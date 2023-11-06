import { useQuery } from "@tanstack/react-query";
import useAxiosApi from "../Hooks/useAxiosApi";
import RecentBlogCard from "../Section/RecentBlogCard";

const BlogsAll = () => {
    const axiosApi = useAxiosApi()
    const url = '/blogs'
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
    return (
        <div className="bg-[#F1F2F2]">
            <div className="h-20 bg-slate-300">
            </div>
            <div className="max-w-2xl mx-auto bg-white mb-2">
                <form className="md:flex items-center justify-between">
                <div className="px-2 ">
                    <select name="category" className="border rounded-lg border-black font-medium p-3">
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
                blogs?.map(blog => <RecentBlogCard 
                    key={blog._id} 
                    blog={blog}
                ></RecentBlogCard>)
            }
        </div>
    );
};

export default BlogsAll;