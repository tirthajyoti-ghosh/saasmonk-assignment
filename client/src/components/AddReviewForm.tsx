import React, { useState } from "react";
import MoviesDropdown from "./MoviesDropdown";

function AddReviewForm() {
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
                className="bg-custom-blue text-white font-medium px-4 py-2 rounded"
            >
                Add new review
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
                            Add New review
                        </h2>
                        <form
                            className="flex flex-col space-y-4"
                            onSubmit={handleSubmit}
                        >
                            <MoviesDropdown />
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="px-4 py-2 rounded border border-gray-300 focus:border-blue-500"
                            />
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Rating out of 10"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="px-4 py-2 rounded border border-gray-300 focus:border-blue-500"
                            />
                            <textarea
                                id="review"
                                name="review"
                                placeholder="Review comments"
                                className="px-4 py-2 rounded border border-gray-300 focus:border-blue-500"
                            ></textarea>
                            <button
                                type="submit"
                                className="self-end inline-block px-4 py-2 rounded bg-custom-blue text-white font-bold"
                            >
                                Add review
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default AddReviewForm;
