import { Link, createBrowserRouter } from "react-router-dom";
import Root from "./component/Root/Root";
import Home from "./component/Home/Home";
import LogIn from "./component/Page/LogIn";
import SignUp from "./component/Page/SignUp";
import AddBlog from "./component/Page/AddBlog";
import BlogDetails from "./component/Page/BlogDetails";

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
            }

        ]
    },
]);


export default router;