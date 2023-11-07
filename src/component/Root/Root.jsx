import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { ToastContainer } from "react-toastify";

const Root = () => {
    return (
        <div>
           <div className="relative z-10">
           <NavBar></NavBar>
           </div>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer position="top-center" />
        </div>
    );
};

export default Root;