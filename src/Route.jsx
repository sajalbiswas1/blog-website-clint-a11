import { createBrowserRouter } from "react-router-dom";
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
import PrivetRoute from "./PrivetRoute/PrivetRoute";
import ErrorElement from "./component/ErrorElement";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorElement></ErrorElement>,
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
                element: <PrivetRoute><AddBlog></AddBlog></PrivetRoute>
            },
            {
                path: 'details/:id',
                element: <PrivetRoute><BlogDetails></BlogDetails></PrivetRoute>
            },
            {
                path: 'wishlist',
                element: <PrivetRoute><Wishlist></Wishlist></PrivetRoute>
            },
            {
                path: 'blogsall',
                element: <BlogsAll></BlogsAll>
            },
            {
                path: 'update/:id',
                element: <PrivetRoute><UpdateBlog></UpdateBlog></PrivetRoute>
            },
            {
                path: 'featureblog',
                element: <FeatureBolgs></FeatureBolgs>
            },

        ]
    },
]);


export default router;