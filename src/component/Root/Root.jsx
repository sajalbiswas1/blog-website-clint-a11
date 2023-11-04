import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const Root = () => {
    return (
        <div>
           <div className="relative">
           <NavBar></NavBar>
           </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;