import axios from "axios";


const AxiosPost = () => {
    const blogsPost = axios.post('https://blog-website-server-ma11.vercel.app')
    return blogsPost.data;
};

export default AxiosPost;