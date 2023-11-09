import { Link } from "react-router-dom";


const ErrorElement = () => {
    return (
        <div className="w-10/12 m-auto flex justify-center mt-40">
           <div>
           <p className="text-xl font-bold">404 no fund page</p>
            <Link to={'/'}><button className="text-xl font-bold bg-black text-white px-2 py-1 rounded-lg mt-3 ml-8">Go Home</button></Link>
           </div>
        </div>
    );
};

export default ErrorElement;