
const AddBlog = () => {
    const handleAddBlog = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const imgLink = form.imgLink.value;
        const category = form.category.value;
        const shortDescription = form.shortDescription.value;
        const longDescription = form.longDescription.value;

        console.log(title,imgLink,category,shortDescription,longDescription)
    }
    return (
        <div className="w-10/12 m-auto pt-20">
            <div className="border bg-blue-100 text-black">
                <div>
                    <h2 className="text-center mt-5 text-3xl font-bold">Add Blog</h2>
                </div>
            <form onSubmit={handleAddBlog} className="card-body">
                <div className="lg:flex lg:gap-5  justify-center">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <input type="text" name="title" placeholder="Enter your title" className="input input-bordered" required />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Image Url</span>
                    </label>
                    <input type="text" name="imgLink" placeholder="Image Url" className="input input-bordered"  />
                    
                </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    {/* <input type="drop-down" placeholder="Image Url" className="input input-bordered"  /> */}
                    <select name="category" className="input input-bordered">
                        <option value="Travel">Travel</option>
                        <option value="Technology">Technology</option>
                        <option value="Natural">Natural</option>
                        <option value="Health">Health</option>
                        <option value="Food">Food</option>
                        <option value="Self-Improvement">Self-Improvement</option>
                    </select>
                    
                </div>
                <div className="w-full">
                <label className="label">
                        <span className="label-text">Short Description</span>
                    </label>
                    <textarea  className="w-full p-5 rounded-lg" name="shortDescription" id="" cols="50" rows="3" placeholder="Enter your short description"></textarea>
                </div>
                <div className="w-full">
                <label className="label">
                        <span className="label-text">Long Description</span>
                    </label>
                    <textarea className="w-full p-5 rounded-lg" name="longDescription" id="" cols="50" rows="6" placeholder="Enter your short description"></textarea>
                </div>
                <div className="form-control mt-6">
                    <button className="p-3 bg-[#F5D27B]">Add Blog</button>
                    {/* <button className="btn btn-primary">Add Blog</button> */}
                </div>
            </form>
        </div>
        </div>
    );
};

export default AddBlog;