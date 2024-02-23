import React, { useState } from "react";

function AddMovieForm() {
    const [name, setName] = useState("");
    const [releaseDate, setReleaseDate] = useState("");
    const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Movie name:", name);
        console.log("Release date:", releaseDate);

        setName("");
        setReleaseDate("");

        closeModal();
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
                            className="flex flex-col space-y-4"
                            onSubmit={handleSubmit}
                        >
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="px-4 py-2 rounded border border-gray-300 focus:border-blue-500"
                            />
                            <input
                                type="date"
                                id="releaseDate"
                                name="releaseDate"
                                placeholder="Release Date"
                                value={releaseDate}
                                onChange={(e) => setReleaseDate(e.target.value)}
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
