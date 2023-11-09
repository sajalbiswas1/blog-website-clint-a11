import { Link, useParams } from "react-router-dom";
import useAxiosApi from "../Hooks/useAxiosApi";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const BlogDetails = () => {
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const [emptyField, setEmptyField] = useState('')
    const [blog,setBlogs] = useState([]);
    const [commentData,setCommentData] = useState([])
    const axiosApi = useAxiosApi();
    const url = `/blogs/${id}` // get data , specific id url
    const CommentUrl = `/blogs/comments` //  comment post data url
    const allCommentUrl = `/blogsComments/${id}` // get all comment this blog url

    const CommentPostData = new Date()

    
const year = CommentPostData.getFullYear();
const month = CommentPostData.getMonth() + 1; // Month is 0-based, so add 1
const day = CommentPostData.getDate();

// Format the date as "YYYY-MM-DD" (e.g., "2023-11-09")
const CommentPostDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;



    const { imgLink, shortDescription, title, longDescription,userEmail } = blog


    // get blog data
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

    // comment form handler
    const handleForm = (e) => {
        e.preventDefault();
        const form = e.target;
        if(userEmail == user?.email){
            setEmptyField('Can not comment on won blog')
            return;
        }
        const userComment = form.text.value;
        const userImg = user?.photoURL
        const userName = user?.displayName
        const commentId = id
        console.log(userComment)
        const commentPost = { userName, userImg, commentId, userComment, CommentPostDate }
        if (/[A-Z]/.test(userComment) || /[a-z]/.test(userComment) || /\d/.test(userComment) || /[@$!%*?&]/.test(userComment)) {
            setEmptyField('')
            // mutate(commentPost)
            axiosApi.post(CommentUrl,commentPost)
        .then(res =>{
            console.log(res.data)
            if(res.data.acknowledged){
                setCommentData([commentPost, ...commentData])
            }
        })
        .catch(error=>{
            console.log(error)
        })

        }
        else {
            setEmptyField("Empty Flied");
            
            e.target.reset()
            return <h2>A</h2>
        }
        e.target.reset()
    }
    // get all comment data this blog
    useEffect(()=>{
        axiosApi.get(allCommentUrl)
        .then(res =>{
            console.log(res.data)
            
            setCommentData(res.data)
        
        })
        .catch(error=>{
            console.log(error)
        })

    },[allCommentUrl, axiosApi])

    return (
        <div className=" bg-[#F1F2F2]">
            <div className="h-20 bg-slate-500">

            </div>
            <h3 className="text-3xl  md:max-w-4xl mt-8 w-11/12 px-2 m-auto mb-10 border-l-rose-600 border-l-4 font-bold">Blog Details</h3>

            <div className='border max-w-4xl  mt-2 bg-white mx-auto mb-5'>
                <img className='max-h-72 w-full  object-cover' src={imgLink} alt='blog image' />
                <h3 className='px-5 font-bold text-3xl mt-4'>{title}</h3>
                <p className='px-5 mb-4 text-xl mt-3'>{shortDescription}</p><br />
                <p className='px-5 mb-4 text-xl'>{longDescription}</p>
                {/* <p className='px-5 mb-4 text-lg font-medium'>Post: <span className="text-sm">{postDate}</span></p> */}
                
                {
                    userEmail == user?.email ? <Link to={`/update/${id}`}><button className="border text-xl font-semibold px-5 py-2 rounded-lg m-4 bg-stone-500 text-white hover:bg-stone-700">Update</button></Link>
                    : ''
                }
            </div>
            
            <div className="max-w-4xl mx-auto p-5 bg-white">
                <h2 className="text-2xl font-bold ">Comment ({commentData.length})</h2>
                <div className="flex gap-5 py-5">
                    {/* user comment input section */}
                    <img className="w-10 h-10 rounded-full" src={user?.photoURL} alt="" />
                    <form onSubmit={handleForm} className="w-full">
                        <textarea className="w-full p-3 border" placeholder="Comment here.." name="text" id="" cols="30" rows="2"></textarea>
                        <p className="text-xs text-red-500">{emptyField ? emptyField : ''}</p>
                        <input className="bg-[#F1F2F2] hover:bg-[#ebf0f0] px-7  py-1 my-3 rounded-3xl border-blue-100 border font-semibold " type="submit" value={"Submit"} id="" />
                    </form>
                    {/* Comment section */}
                    
                </div>
                <div>
                        {
                           commentData.map(comment => <div key={comment._id +109}>
                            <div className="flex gap-2 mb-5">
                            <img className="w-10 h-10 mt-2 rounded-full" src={comment?.userImg} alt="" />
                            <div className="border rounded-xl w-full p-3">
                                <h2 className="mb-2 font-bold text-xl">{comment.userName} <span className="text-sm font-light">{comment.CommentPostDate}</span></h2>
                                <p className="text-xl">{comment.userComment}</p>
                            </div>
                            </div>
                           </div>)
                        }
                    </div>
            </div>
        </div>
    );
};

export default BlogDetails;