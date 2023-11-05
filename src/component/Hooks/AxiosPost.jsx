import axios from "axios";


const AxiosPost = () => {
    const blogsPost = axios.post('http://localhost:5000/blogs')
    return blogsPost.data;
};

export default AxiosPost;