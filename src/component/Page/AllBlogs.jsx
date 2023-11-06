// import { useQuery } from "@tanstack/react-query";
// import useAxiosApi from "../Hooks/useAxiosApi";
// import RecentBlogCard from "../Section/RecentBlogCard";

const AllBlogs = () => {
    // const axiosApi = useAxiosApi()
    // const url = '/blogs'
    // const {data: blogs,error,  isPending} = useQuery({
    //     queryKey: ['allRecentData'],
    //     queryFn: async()=>{
    //        const fetchData = await axiosApi.get(url)
    //        return fetchData.data
    //     }
        
    // })

    // console.log(blogs,isPending)
    // console.log(error)
    // if(isPending){
    //     return  <h3>Loading.....</h3>
    // }
    return (
        <div className="bg-[#F1F2F2]">
            {/* {
                blogs?.map(blog => <RecentBlogCard 
                    key={blog._id} 
                    blog={blog}
                ></RecentBlogCard>)
            } */}
            <h3>hello</h3>
        </div>
    );
};

export default AllBlogs;