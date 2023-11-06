import axios from "axios";

const axiosApi = axios.create({
    baseURL: "https://blog-website-server-ma11.vercel.app"

})


const useAxiosApi = () => {
   return axiosApi;
};

export default useAxiosApi;