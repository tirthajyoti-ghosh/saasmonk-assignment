import Layout from "../components/Layout";
import ReviewCard from "../components/ReviewCard";

function Reviews() {
    return (
        <Layout>
            <div className="flex flex-col md:flex-row justify-between items-center py-4">
                <h1 className="text-3xl font-bold text-custom-black">Star Wars: A New Hope</h1>
                <div className="flex items-center">
                    <span className="text-3xl mr-2 text-custom-blue">9/10</span>
                </div>
            </div>
            <ReviewCard
                review="The best movie ever!"
                rating="9"
                author="John Doe"
            />
            <ReviewCard
                review="The best movie ever!"
                rating="9"
                author="John Doe"
            />
            <ReviewCard
                review="The best movie ever!"
                rating="9"
                author="John Doe"
            />
            <ReviewCard
                review="The best movie ever!"
                rating="9"
                author="John Doe"
            />
        </Layout>
    );
}

export default Reviews;
