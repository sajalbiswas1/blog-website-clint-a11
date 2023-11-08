import { Link, createBrowserRouter } from "react-router-dom";
import Root from "./component/Root/Root";
import Home from "./component/Home/Home";
import LogIn from "./component/Page/LogIn";
import SignUp from "./component/Page/SignUp";
import AddBlog from "./component/Page/AddBlog";
import BlogDetails from "./component/Page/BlogDetails";
// import BlogsAll from "./component/Page/BlogsAll";
import Wishlist from "./component/Page/Wishlist";
import BlogsAll from "./component/Page/BlogsAll";
import UpdateBlog from "./component/Page/UpdateBlog";
import FeatureBolgs from "./component/Page/FeatureBolgs";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <div><p>This Error</p><Link to={'/'}>Home</Link></div>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'login',
                element: <LogIn></LogIn>
            },
            {
                path:'signup',
                element: <SignUp></SignUp>
            },
            {
                path:'addblog',
                element: <AddBlog></AddBlog>
            },
            {
                path: 'details/:id',
                element: <BlogDetails></BlogDetails>
            },
            {
                path: 'wishlist',
                element: <Wishlist></Wishlist>
            },
            {
                path: 'blogsall',
                element: <BlogsAll></BlogsAll>
            },
            {
                path: 'update/:id',
                element: <UpdateBlog></UpdateBlog>
            },
            {
                path: 'featureblog',
                element: <FeatureBolgs></FeatureBolgs>
            },

        ]
    },
]);


export default router;