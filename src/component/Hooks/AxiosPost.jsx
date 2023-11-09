import axios from "axios";


const AxiosPost = () => {
    const blogsPost = axios.post('http://localhost:5000')
    // http://localhost:5000
    // https://blog-website-server-ma11.vercel.app
    return blogsPost.data;
};

export default AxiosPost;