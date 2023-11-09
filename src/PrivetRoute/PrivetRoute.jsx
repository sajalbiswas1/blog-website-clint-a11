import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';



const PrivetRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);


    if(loading){
        return <div className="flex justify-center h-screen"><span className="loading loading-spinner loading-lg"></span></div>
    }
    if(user){
        return children;
    }
    return <Navigate to={'/logIn'}></Navigate>
};
PrivetRoute.propTypes = {
    children: PropTypes.node
}
   


export default PrivetRoute;