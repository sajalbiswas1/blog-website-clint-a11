import axios from "axios";

const axiosApi = axios.create({
    baseURL: "http://localhost:5000/"

})


const useAxiosApi = () => {
   return axiosApi;
};

export default useAxiosApi;