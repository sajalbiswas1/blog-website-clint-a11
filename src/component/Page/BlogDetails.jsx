import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosApi from "../Hooks/useAxiosApi";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const BlogDetails = () => {
    const {user}=useContext(AuthContext)
    const {id} =useParams();
    const axiosApi = useAxiosApi()
    const url = `/blogs/${id}`
    const {data: blog, isPending} = useQuery({
        queryKey: ['blogDetails'],
        queryFn: async()=>{
           const fetchData = await axiosApi.get(url)
           return fetchData.data
        }
    })
    if(isPending){
        return <p>Loading.......</p>
    }
    const { imgLink, shortDescription, title,longDescription} = blog
    return (
        <div className=" bg-[#F1F2F2]">
            <div className='border max-w-4xl bg-white mx-auto mb-5'>
                <img className='max-h-72 w-full  object-cover' src={imgLink} alt='blog image' />
                <h3 className='px-5 font-bold text-3xl mt-4'>{title}</h3>
                <p className='px-5 mb-4 text-xl mt-3'>{shortDescription}</p><br />
                <p className='px-5 mb-4 text-xl'>{longDescription}</p>
            </div>
            <div className="max-w-4xl mx-auto p-5 bg-white">
            <h2 className="text-2xl font-bold ">Comment ()</h2>
                <div className="flex gap-5 py-5">
                    
                <img className="w-10 h-10 rounded-full" src={user?.photoURL} alt="" />
                <textarea className="w-full p-3 border" placeholder="Comment here.." name="" id="" cols="30" rows="2"></textarea>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;