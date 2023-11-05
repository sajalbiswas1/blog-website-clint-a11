import { Link, createBrowserRouter } from "react-router-dom";
import Root from "./component/Root/Root";
import Home from "./component/Home/Home";
import LogIn from "./component/Page/LogIn";
import SignUp from "./component/Page/SignUp";
import AddBlog from "./component/Page/AddBlog";

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
            }

        ]
    },
]);


export default router;