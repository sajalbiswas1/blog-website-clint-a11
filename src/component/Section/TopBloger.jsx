import { useEffect, useState } from "react";
import useAxiosApi from "../Hooks/useAxiosApi";
import { Link } from "react-router-dom";

const TopBloger = () => {
    const [bloggers, setBloggers] = useState([])
    const axiosApi = useAxiosApi()
    const url = '/followers'
    useEffect(() => {
        axiosApi.get(url)
        .then(res =>{
            console.log(res.data)
            setBloggers(res.data)
        })
        .catch(error =>{
            console.log(error)
        })
        
        // fetch('flower.json')
        //     .then(res => res.json())
        //     .then(data => setBloggers(data))
    }, [axiosApi,url])
    return (
        <div className="bg-[#F1F2F2] pt-10 pb-10">
           <div className="px-2">
           <h3 className="text-3xl max-w-6xl px-2 m-auto mb-10 border-l-rose-600 border-l-4 font-bold">Top Follower Blogger</h3>
           </div>
            <div className="grid lg:grid-cols-4 pt-5 grid-cols-2 gap-5 max-w-6xl  m-auto px-4 bg-white">
            {
                bloggers.map((blogger, indx) => <div key={indx + 10234}>
                    <div className=" border rounded-lg">
                        <div className="relative" >
                            <img className="h-20 rounded-t-lg w-full bg-cover" src={blogger.coverImg} alt="" />
                            <img className="absolute border-2 -bottom-6 left-4 rounded-full h-20 w-20" src={blogger.img} alt="" />
                        </div>
                        
                        <div className="p-3">
                        <h3 className="mt-10 text-xl font-bold">{blogger.name}</h3>
                        <p className="font-semibold text-[#666666]">{blogger.title}</p>
                        <p className="text-sm text-[#666666] mt-3">{blogger.description}</p>
                        <p className="text-sm font-thin mt-2 text-[#666666]">{blogger.flower} Follower</p>
                        <Link><p className="border mt-3 mb-1 rounded-lg border-blue-500 text-blue-500 text-xl text-center">Follow</p></Link>
                        </div>
                    </div>
                </div>)
            }
        </div>
        </div>
    );
};

export default TopBloger;