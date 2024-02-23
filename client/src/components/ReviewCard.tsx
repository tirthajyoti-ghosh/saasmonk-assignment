export default function ReviewCard({ review, rating, author }: { review: string, rating: number, author: string }) {
    return (
        <div className="flex justify-between items-start mt-4 border-2 border-gray-200 px-4 py-4 mb-5">
        <div>
            <p className=" text-custom-black mb-4">
                {review}
            </p>
            <span className="text-custom-black italic font-bold">
                By {author}
            </span>
        </div>
        <div className="flex items-center justify-end">
            <span className="text-xl mr-2 text-custom-blue">{rating}/10</span>
        </div>
    </div>
    );
}