// import { useMutation } from "@tanstack/react-query";
import useAxiosApi from "../Hooks/useAxiosApi";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import BlogAllCard from "./BlogAllCard";
import { useNavigate } from "react-router-dom";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NoData from "../CoustomToast/NoData";


const BlogsAll = () => {
    const {user}=useContext(AuthContext);
    const [postWishlistData, setPostWishlistData] = useState([])
    const axiosApi = useAxiosApi();
    // const [postWishlist,setPostWishlist]= useState({})
    const [blogs,setBlogs]= useState([])
    const [blogsFilter,setBlogsFilter]= useState(blogs)
    const [isLoading, setLoading]= useState(false)
    const navigate = useNavigate()
    const url = '/blogs'
    const wishlistUrl = '/wishlists'

    useEffect(()=>{
        axiosApi.get(url)
        .then(res =>{
            console.log(res.data)
            setBlogs(res.data)
            setBlogsFilter(res.data)
        })
        .catch(error =>{
            console.log(error)
        })

    },[axiosApi])

    const haldelWishlistButton = (blog)=>{
        setLoading(true)
            const {_id:id,category,imgLink,postDate,shortDescription,title} = blog
            const email = user?.email;
        const wishlistItem = {id,category,imgLink,postDate,shortDescription,title,email}
        axiosApi.post(wishlistUrl,wishlistItem)
        .then(res =>{
            console.log(res.data)
            setPostWishlistData(res.data)
            if(res.data.acknowledged){
                notify()
                if(user.email){
                    navigate('/wishlist')
                }
            }
        })
        .catch(error=>{
            console.log(error)
        })
         console.log(id,category,imgLink,postDate,shortDescription,title,email) 
    }
    //toast
    const notify = () => toast.success("Wishlist Add");
    console.log(postWishlistData)
    const handleCategory = (e)=>{
        const selectValue = e.target.value
        if(selectValue == "All"){
            setBlogsFilter(blogs)
            return;
        }
        const filterCategory = blogs.filter(blog => blog.category == selectValue )
        setBlogsFilter(filterCategory)
        console.log(filterCategory)

      
    }
    const handleForm = (e)=>{
        e.preventDefault()
        const searchValue = e.target.text.value;
        const getBlogs = blogs.filter(a => a.title.toLowerCase().includes(searchValue.toLowerCase()))
        console.log(getBlogs)
        setBlogsFilter(getBlogs)
        if(getBlogs.length == 0){
            console.log('nodaldkfj')
           return <div>No data</div>;
        }
        
       
      
    }

   
    return (
        <div className="bg-[#F1F2F2]">
            <div className="h-20 bg-slate-500 ">
            </div>
            <h3 className="text-3xl  md:max-w-2xl mt-8 w-11/12 px-2 m-auto mb-10 border-l-rose-600 border-l-4 font-bold">All Blogs</h3>

            <div className="max-w-2xl mx-auto pt-2 bg-white mb-">
                <form onSubmit={handleForm} className="md:flex items-center justify-between">
                <div className="px-2 ">
                    <select name="category"  onChange={handleCategory} className="border rounded-lg border-black font-medium p-3">
                        <option value="All">All</option>
                        <option value="Technology">Technology</option>
                        <option value="Programming">Programming</option>
                        <option value="Travel">Travel</option>
                        <option value="Health">Health</option>
                        <option value="Food">Food</option>
                        <option value="Self-Improvement">Self-Improvement</option>
                    </select>
                    </div>
                    <div className="flex p-2 items-center">
                    {/* <h2 className="bg-stone-700 text-white p-3 rounded-lg mr-2">Blogs</h2> */}
                    <input className="p-3 border-y border-black border-x rounded-l-lg" type="text" name="text" placeholder="Search...." id="" />
                    <input className="p-3 bg-stone-700 hover:bg-stone-600 text-white font-medium border-black border-y border-r rounded-r-lg" type="submit" value="Search" />
                    </div>
                    
                </form>
            </div>
            {
                blogsFilter.length == 0 ? <NoData></NoData>:
                blogsFilter?.map((blog,index) => <BlogAllCard
                    key={index} 
                    blog={blog}
                    isLoading={isLoading} 
                    haldelWishlistButton={haldelWishlistButton}
                ></BlogAllCard>)
            }
        </div>
    );
};

export default BlogsAll;