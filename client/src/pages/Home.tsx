import MovieCard from "../components/MovieCard";
import Layout from "../components/Layout";
import SearchBar from "../components/SearchBar";

function Home() {
    return (
        <Layout>
            <h1 className="text-4xl font-bold text-custom-black">
                The best movie reviews site!
            </h1>
            <SearchBar />
            <div className="grid grid-cols-3 gap-7 mb-5">
                <MovieCard
                    title="Star Wars: A New Hope"
                    date="1st August, 2022"
                    rating="9/10"
                />
                <MovieCard
                    title="Star Wars: A New Hope"
                    date="1st August, 2022"
                    rating="9/10"
                />
                <MovieCard
                    title="Star Wars: A New Hope"
                    date="1st August, 2022"
                    rating="9/10"
                />
                <MovieCard
                    title="Star Wars: A New Hope"
                    date="1st August, 2022"
                    rating="9/10"
                />
                <MovieCard
                    title="Star Wars: A New Hope"
                    date="1st August, 2022"
                    rating="9/10"
                />
            </div>
        </Layout>
    );
}

export default Home;
