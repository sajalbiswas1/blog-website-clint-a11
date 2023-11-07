import useAxiosApi from "../Hooks/useAxiosApi";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import { BsArrowRight } from 'react-icons/bs';
import { AiOutlineDelete } from 'react-icons/ai';
import Swal from "sweetalert2";

const Wishlist = () => {
    const { user } = useContext(AuthContext)
    const axiosApi = useAxiosApi();
    const [wishlists,setWishlists] = useState([])
    const url = `/wishlists?email=${user?.email}`
    useEffect(() => {
        axiosApi.get(url)
        .then(res => {
           
            setWishlists(res.data)
        })
        .catch(error=>{
            console.log(error)
        })
    }, [axiosApi, url])

    //add wishlist
    const handleDelete =(id)=>{
        Swal.fire({
            title: 'Are you sure?',
            // text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosApi.delete(`/wishlists/${id}`)
        .then(res =>{
            console.log(res.data)
            if (res.data.deletedCount > 0) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                const remaining = wishlists.filter(remove => remove._id !== id)
                setWishlists(remaining)
            }
            console.log(res.data)
        })
        .catch(error=>{
            console.log(error)
        })
                    
            }
        })
    }

    return (
        <div>
            <div className="h-20 bg-slate-500">

            </div>
            <div className="grid md:grid-cols-2 max-w-2xl mx-auto">
            {
                wishlists.map(wishlist => <div key={wishlist._id}>
                    <div className='border  bg-white m-auto mb-5'>
                        <h3 className='px-5 text-sm mt-3'>Category: {wishlist.category}</h3>
                        <h3 className='px-5 font-bold text-lg'>{wishlist.title}</h3>
                        <p className='px-5 mb-4'>{wishlist.shortDescription}</p>
                        <img className='max-h-72 w-full  object-cover' src={wishlist.imgLink} alt='blog image' />
                        <div className='flex justify-between px-5'>
                            <Link to={`/details/${wishlist.id}`}> <button className='bg-[#F1F2F2] flex justify-between items-center gap-5 px-7 py-1 my-3 rounded-3xl border-blue-100 border hover:text-white hover:bg-stone-700'>Details <BsArrowRight></BsArrowRight></button></Link>
                            <button onClick={()=>handleDelete(wishlist._id)} className='bg-[#F1F2F2] flex justify-between items-center gap-5 px-7  py-1 my-3 rounded-3xl border-blue-100 border hover:text-white hover:bg-stone-700'>Remove <AiOutlineDelete className="text-red-600"></AiOutlineDelete></button>
                        </div>
                    </div>
                </div>)
            }
            </div>
        </div>
    );
};

export default Wishlist;