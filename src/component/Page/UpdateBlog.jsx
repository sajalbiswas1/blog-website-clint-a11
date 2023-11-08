import { useEffect, useState } from "react";
import useAxiosApi from "../Hooks/useAxiosApi";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateBlog = () => {

    const {id} = useParams()

    const [blog,setBlogs] = useState([]);
    const axiosApi = useAxiosApi();
    const url = `/blogs/${id}` // get data , specific id url
    const updateUrl = `blogs/update/${id}`

    const { imgLink, shortDescription,category, title, longDescription } = blog

    useEffect(()=>{
        axiosApi.get(url)
        .then(res =>{
            console.log(res.data)
            setBlogs(res.data)
            
        })
        .catch(error=>{
            console.log(error)
        })
    },[axiosApi, url])
    
    const handleUpdate = (event)=>{
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const imgLink = form.imgLink.value;
        // const category = form.category.value;
        const shortDescription = form.shortDescription.value;
        const longDescription = form.longDescription.value;
        const blog = {title, imgLink, shortDescription, longDescription}
        console.log(blog)
        axiosApi.put(updateUrl, blog)
        .then(res =>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Updated',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
            }
           
        })
        .catch(error=>{
            console.log(error)
        })

    }
    return (
        <div>
        <div className="h-20 bg-slate-500">

        </div>
         <div className="w-10/12 m-auto pt-20">
            <div className="border bg-blue-100 text-black">
                <div>
                    <h2 className="text-center mt-5 text-3xl font-bold">Update Blog</h2>
                </div>
            <form onSubmit={handleUpdate} className="card-body">
                <div className="lg:flex lg:gap-5  justify-center">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <input type="text" name="title" defaultValue={title} placeholder="Enter your title" className="input input-bordered" required />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Image Url</span>
                    </label>
                    <input type="text" defaultValue={imgLink} name="imgLink" placeholder="Image Url" className="input input-bordered"  />
                    
                </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    {/* <input type="drop-down" placeholder="Image Url" className="input input-bordered"  /> */}
                    <select name="category" defaultValue={category} className="input input-bordered">
                        <option value="Technology">Technology</option>
                        <option value="Programming">Programming</option>
                        <option value="Travel">Travel</option>
                        <option value="Health">Health</option>
                        <option value="Food">Food</option>
                        <option value="Self-Improvement">Self-Improvement</option>
                    </select>
                    
                </div>
                <div className="w-full">
                <label className="label">
                        <span className="label-text">Short Description</span>
                    </label>
                    <textarea defaultValue={shortDescription} className="w-full p-5 rounded-lg" name="shortDescription" id="" cols="50" rows="3" placeholder="Enter your short description"></textarea>
                </div>
                <div className="w-full">
                <label className="label">
                        <span className="label-text">Long Description</span>
                    </label>
                    <textarea defaultValue={longDescription} className="w-full p-5 rounded-lg" name="longDescription" id="" cols="50" rows="6" placeholder="Enter your short description"></textarea>
                </div>
                <div className="form-control mt-6">
                    <button className="p-3 bg-[#F5D27B]">Update</button>
                    {/* <button className="btn btn-primary">Add Blog</button> */}
                </div>
            </form>
        </div>
        </div>
       </div>
    );
};

export default UpdateBlog;