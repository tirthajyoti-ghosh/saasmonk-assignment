export default function MovieCard({ title, date, rating }: { title: string, date: string, rating: string }) {
    return (
      <div className="">
        <div className="bg-custom-blue-light p-6 space-y-3">
          <h2 className="text-2xl text-custom-black">{title}</h2>
          <p className="text-lg italic text-gray-700">Released: {date}</p>
          <p className="text-lg font-bold text-gray-700">Rating: {rating}</p>
        </div>
      </div>
    );
}