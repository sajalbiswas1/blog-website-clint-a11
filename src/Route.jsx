import { Link, createBrowserRouter } from "react-router-dom";
import Root from "./component/Root/Root";
import Home from "./component/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <div><p>This Error</p><Link to={'/'}>Home</Link></div>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            }
        ]
    },
]);


export default router;