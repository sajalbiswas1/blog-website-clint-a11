import axios from "axios";

const axiosApi = axios.create({
    baseURL: "http://localhost:5000"

})
 // http://localhost:5000
    // https://blog-website-server-ma11.vercel.app

const useAxiosApi = () => {
   return axiosApi;
};

export default useAxiosApi;