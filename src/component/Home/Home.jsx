import Banner from "../Banner/Banner";
import RecentBlogs from "../Section/RecentBlogs";
import Subscrib from "../Section/Subscrib";
import TableReact from "../Section/TableReact";
import TopBloger from "../Section/TopBloger";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <RecentBlogs></RecentBlogs>
           <Subscrib></Subscrib>
           <TopBloger></TopBloger>
           <TableReact></TableReact>
        </div>
    );
};

export default Home;