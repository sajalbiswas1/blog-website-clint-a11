import { useQuery } from "@tanstack/react-query";
import useAxiosApi from "../Hooks/useAxiosApi";

const RecentBlogs = () => {
    const axiosApi = useAxiosApi()
    const url = '/blog'
    const {data,  isPending} = useQuery({
        queryKey: ['recentData'],
        queryFn: async()=>{
           const fetchData = await axiosApi.get(url)
           return fetchData.data
        }
        
    })

    console.log(data,isPending)
    if(isPending){
        return  <h3>Loading.....</h3>
    }
    return (
        <div>
            <h1>Recent blogssssssssssssssssssssss</h1>
        </div>
    );
};

export default RecentBlogs;