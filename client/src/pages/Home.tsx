import { useEffect } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import Layout from "../components/Layout";
import SearchBar from "../components/SearchBar";
import { Movie } from "../types";
import { useMovieList } from "../store/movies";

function formatDate(date: string) {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}

function Home() {
    const {movies, setMovies} = useMovieList();

    useEffect(() => {
        const source = axios.CancelToken.source();

        (async () => {
            try {
                const response = await axios.get<Movie[]>(
                    `${import.meta.env.VITE_API_URL}/movies`
                );
                setMovies(response.data);
            } catch (error) {
                console.error("Failed to fetch movies", error);
            }
        })();

        return () => {
            source.cancel();
        };
    }, [setMovies]);

    return (
        <Layout>
            <h1 className="text-4xl font-bold text-custom-black">
                The best movie reviews site!
            </h1>
            <SearchBar />
            <div className="grid grid-cols-3 gap-7 mb-5">
                {movies.map((movie) => (
                    <MovieCard
                        key={movie._id}
                        id={movie._id}
                        title={movie.name}
                        date={formatDate(movie.releaseDate)}
                        rating={movie.averageRating}
                    />
                ))}
            </div>
        </Layout>
    );
}

export default Home;
