import PropTypes from 'prop-types';
import { BsArrowRight } from 'react-icons/bs';
import { FaRegBookmark } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const RecentBlogCard = ({ blog, haldelWishlist }) => {
    const { _id, category, imgLink, shortDescription, title, } = blog;
    return (
        <div>
            <div className='border max-w-2xl bg-white m-auto mb-5 rounded-lg'>
                <h3 className='px-5 text-sm mt-3'>Category: {category}</h3>
                <h3 className='px-5 font-bold text-lg'>{title}</h3>
                <p className='px-5 mb-4'>{shortDescription}</p>
                <img className='max-h-72 w-full  object-cover' src={imgLink} alt='blog image' />
                <div className='flex justify-between px-5'>
                    <Link to={`/details/${_id}`}> <button className='bg-[#F1F2F2] flex justify-between items-center gap-5 px-7 py-1 my-3 rounded-3xl border-blue-100 border'>Details <BsArrowRight></BsArrowRight></button></Link>
                    <button onClick={()=>haldelWishlist(blog)} className='bg-[#F1F2F2] flex justify-between items-center gap-5 px-7  py-1 my-3 rounded-3xl border-blue-100 border'>Wishlist<FaRegBookmark></FaRegBookmark></button>
                </div>
            </div>
        </div>
    );
};

RecentBlogCard.propTypes = {
    blog: PropTypes.object,
    haldelWishlist: PropTypes.func,
}
export default RecentBlogCard;