import Banner from "../Banner/Banner";
import RecentBlogs from "../Section/RecentBlogs";
import Subscrib from "../Section/Subscrib";
import TopBloger from "../Section/TopBloger";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <RecentBlogs></RecentBlogs>
           <Subscrib></Subscrib>
           <TopBloger></TopBloger>
        </div>
    );
};

export default Home;