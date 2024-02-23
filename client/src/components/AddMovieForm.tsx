import React, { useRef, useState } from "react";
import axios from "axios";
import { useMovieList } from "../store/movies";

function AddMovieForm() {
    const [showModal, setShowModal] = useState(false);
    const {movies, setMovies} = useMovieList();

    const formRef = useRef<HTMLFormElement>(null);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(formRef.current!);
        const name = formData.get("name") as string;
        const releaseDate = formData.get("releaseDate") as string;

        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/movies`, {
                name,
                releaseDate,
            });

            setMovies([response.data, ...movies]);
        } catch (error) {
            console.error("Failed to create movie", error);
        } finally {
            closeModal();
        }
    };

    return (
        <>
            <button
                onClick={openModal}
                className="bg-white text-custom-blue font-medium px-4 py-2 rounded border border-solid border-custom-blue"
            >
                Add new movie
            </button>
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow border border-gray-200 border-2 px-8 py-8 w-[400px] relative">
                        <button
                            className="absolute top-2 right-2 text-custom-black rounded-full h-6 w-6 flex items-center justify-center text-xl font-bold"
                            onClick={closeModal}
                        >
                            &times;
                        </button>
                        <h2 className="text-2xl font-bold mb-6 text-custom-black">
                            Add New Movie
                        </h2>
                        <form
                            ref={formRef}
                            className="flex flex-col space-y-4"
                            onSubmit={handleSubmit}
                        >
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Name"
                                className="px-4 py-2 rounded border border-gray-300 focus:border-blue-500"
                            />
                            <input
                                type="date"
                                id="releaseDate"
                                name="releaseDate"
                                placeholder="Release Date"
                                className="px-4 py-2 rounded border border-gray-300 focus:border-blue-500"
                            />
                            <button
                                type="submit"
                                className="self-end inline-block px-4 py-2 rounded bg-custom-blue text-white font-bold"
                            >
                                Create movie
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default AddMovieForm;
