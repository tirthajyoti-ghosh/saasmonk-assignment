import AddMovieForm from "./AddMovieForm";
import AddReviewForm from "./AddReviewForm";

export default function Navbar() {
    return (
        <div className="flex justify-between items-center bg-custom-grey p-4">
            <span className="font-bold text-custom-black">MOVIECRITIC</span>
            <div className="flex">
                <div className="mr-3">
                    <AddMovieForm />
                </div>
                <AddReviewForm />
            </div>
        </div>
    );
}
