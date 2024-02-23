import { create } from 'zustand';
import { Movie } from '../types';

const useMovieStore = create<{
    movies: Movie[];
    setMovies: (movies: Movie[]) => void;
}>(set => ({
    movies: [],
    setMovies: (movies) => set({ movies }),
}));

export const useMovieList = useMovieStore;