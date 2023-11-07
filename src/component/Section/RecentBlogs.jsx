import { useQuery } from "@tanstack/react-query";
import useAxiosApi from "../Hooks/useAxiosApi";
import RecentBlogCard from "./RecentBlogCard";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const RecentBlogs = () => {
    const {user}= useContext(AuthContext);
    const axiosApi = useAxiosApi();
    const [postWishlistData, setPostWishlistData] = useState([]);

    const url = '/blogs';
    const wishlistUrl = '/wishlists';

    const {data: blogs,error,  isPending} = useQuery({
        queryKey: ['recentData'],
        queryFn: async()=>{
           const fetchData = await axiosApi.get(url)
           return fetchData.data
        }
        
    })

    console.log(blogs,isPending)
    console.log(error)
    if(isPending){
        return  <h3>Loading.....</h3>
    }

    const notify = () => toast.success("Wishlist Add");
    const haldelWishlist = (blog)=>{
        const {_id:id,category,imgLink,postDate,shortDescription,title} = blog
        const email = user.email;
    const wishlistItem = {id,category,imgLink,postDate,shortDescription,title,email}
    axiosApi.post(wishlistUrl,wishlistItem)
    .then(res =>{
        console.log(res.data)
        setPostWishlistData(res.data)
        if(res.data.acknowledged){
            notify()
            
        }
    })
    .catch(error=>{
        console.log(error)
    })
     console.log(id,category,imgLink,postDate,shortDescription,title,email) 
    }
    console.log(postWishlistData)
    return (
        <div className="bg-[#F1F2F2]">
            {
                blogs?.map((blog, index)=> <RecentBlogCard 
                    key={index + 100} 
                    blog={blog}
                    haldelWishlist={haldelWishlist}
                ></RecentBlogCard>)
            }
        </div>
    );
};

export default RecentBlogs;