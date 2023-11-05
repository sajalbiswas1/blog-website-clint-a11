import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosApi from "../Hooks/useAxiosApi";


const BlogDetails = () => {
    const {id} =useParams();
    const axiosApi = useAxiosApi()
    const url = `/blogs/${id}`
    const {data: blog} = useQuery({
        queryKey: ['blogDetails'],
        queryFn: async()=>{
           const fetchData = await axiosApi.get(url)
           return fetchData.data
        }
    })
    const { imgLink, shortDescription, title,longDescription} = blog
    return (
        <div>
            <img src={imgLink} alt="" />
            <h3>{title}</h3>
            <p>{shortDescription}</p>
            <p>{longDescription}</p>
        </div>
    );
};

export default BlogDetails;