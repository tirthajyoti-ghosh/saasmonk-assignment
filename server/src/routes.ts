import express, { Request, Response } from 'express';
import Movie from './models/movies';
import Review from './models/reviews';
import { Types } from 'mongoose';

const router = express.Router();

router.get('/movies', async (req: Request, res: Response) => {
    try {
        const aggregation = [
            {
                $lookup: {
                    from: 'reviews',
                    localField: '_id',
                    foreignField: 'movieId',
                    as: 'reviews'
                }
            },
            {
                $addFields: {
                    averageRating: { $avg: "$reviews.rating" }
                }
            },
            {
                $project: {
                    reviews: 0,
                },
            }
        ];

        const movies = await Movie.aggregate(aggregation);
        res.json(movies);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to fetch movies' });
    }
});

router.post('/movies', async (req: Request, res: Response) => {
    try {
        if (!req.body.name || !req.body.releaseDate) {
            return res.status(400).json({ error: 'Name and release date are required' });
        }
        const newMovie = new Movie(req.body);
        const savedMovie = await newMovie.save();
        res.status(201).json(savedMovie);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to save movie' });
    }
});

router.get('/movies/:id', async (req: Request, res: Response) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) {
            return res.status(404).json({ error: 'Movie not found' });
        }
        res.json(movie);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch movie' });
    }
});

router.put('/movies/:id', async (req: Request, res: Response) => {
    try {
        const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!movie) {
            return res.status(404).json({ error: 'Movie not found' });
        }
        res.json(movie);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update movie' });
    }
});

router.delete('/movies/:id', async (req: Request, res: Response) => {
    try {
        const movie = await Movie.findByIdAndDelete(req.params.id);
        if (!movie) {
            return res.status(404).json({ error: 'Movie not found' });
        }
        await Review.deleteMany({ movieId: req.params.id });
        res.json({ message: 'Movie deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete movie' });
    }
});

router.get('/movies/:id/reviews', async (req: Request, res: Response) => {
    try {
        if (req.query.search) {
            const reviews = await Review.find({ $text: { $search: req.query.search as string } });
            res.json(reviews);

            return;
        }

        const reviews = await Review.find({ movieId: new Types.ObjectId(req.params.id) });
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch reviews' });
    }
});

router.post('/movies/:id/reviews', async (req: Request, res: Response) => {
    try {
        const movieId = req.params.id;
        if (!req.body.name || !req.body.rating || !req.body.review) {
            return res.status(400).json({ message: 'Name, rating and review comments are required' });
        }
        const newReview = new Review({ movieId, reviewerName: req.body.name, rating: req.body.rating, reviewComments: req.body.review });
        const savedReview = await newReview.save();
        res.status(201).json(savedReview);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

router.put('/reviews/:id', async (req: Request, res: Response) => {
    try {
        const review = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!review) {
            return res.status(404).json({ message: 'Review not found' });
        }
        res.json(review);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

router.delete('/reviews/:id', async (req: Request, res: Response) => {
    try {
        const review = await Review.findByIdAndDelete(req.params.id);
        if (!review) {
            return res.status(404).json({ message: 'Review not found' });
        }
        res.json({ message: 'Review deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

export default router;