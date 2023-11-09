import { useEffect } from "react";
import useAxiosApi from "../Hooks/useAxiosApi";
import { useState } from "react";
import { FcBusinessman } from 'react-icons/fc';
import { SlCalender } from 'react-icons/sl';
import { Link } from "react-router-dom";

const TrendingPost = () => {
    const axiosApi = useAxiosApi();
    const [blogs, setBlogs] = useState([])
    const url = '/blogs'



    useEffect(() => {
        axiosApi.get(url)
            .then(res => {
                console.log(res.data)
                setBlogs(res.data)
            })
            .catch(error => {
                console.log(error)
            })

    }, [axiosApi])
    console.log(blogs)
    return (
        <div className="pt-10 bg-[#F1F2F2]">
            <h3 className="text-3xl max-w-6xl px-2 m-auto mb-10 border-l-rose-600 border-l-4 font-bold">Trending Post</h3>

            <div className="grid lg:grid-cols-4 pb-6 pt-6 bg-white  rounded-lg md:grid-cols-2 gap-5 max-w-6xl m-auto px-4">
                {
                    blogs?.slice(0,10).map((blog, index) => <div key={index + 102}>
                        <Link to={`/details/${blog._id}`}>
                        <div className="border border-slate-200 shadow-lg  h-full  rounded-lg shadow-slate-300">
                            <img className="rounded-t-lg w-full" src={blog.imgLink} alt="" />
                            <div className="p-5 ">
                                <h1 className="text-xl font-bold">{blog.title}</h1>
                                <div className="flex justify-between mt-3 items-center">
                                    <p className="flex  items-center gap-2"><FcBusinessman></FcBusinessman>{blog.userName}</p>
                                    <p className="flex text-sm items-center gap-2"><SlCalender></SlCalender>{blog.postDate.slice(0, 10)}</p>
                                </div>
                            </div>
                        </div></Link>
                    </div>)
                }

            </div>
        </div>
    );
};

export default TrendingPost;