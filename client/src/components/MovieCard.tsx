import { Link } from "react-router-dom";

export default function MovieCard({
    id,
    title,
    date,
    rating,
}: {
    id: string;
    title: string;
    date: string;
    rating: string;
}) {
    return (
        <Link to={`/movies/${id}`}>
        <div className="">
            <div className="bg-custom-blue-light p-6 space-y-3">
                <h2 className="text-2xl text-custom-black">{title}</h2>
                <p className="text-lg italic text-gray-700">Released: {date}</p>
                <p className="text-lg font-bold text-gray-700">
                    Rating: {rating}
                </p>
            </div>
        </div>
        </Link>
    );
}
