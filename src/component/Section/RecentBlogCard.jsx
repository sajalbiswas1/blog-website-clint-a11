import PropTypes from 'prop-types';
import { BsArrowRight } from 'react-icons/bs';
import { FaRegBookmark } from 'react-icons/fa';
const RecentBlogCard = ({ blog }) => {
    const { category, imgLink, longDescription, shortDescription, userEmail, title, } = blog;
    return (
        <div>
            <div className='border max-w-2xl bg-white m-auto mb-5'>
                <h3 className='px-5 text-sm mt-3'>Category: {category}</h3>
                <h3 className='px-5 font-bold text-lg'>{title}</h3>
                <p className='px-5 mb-4'>{shortDescription}</p>
                <img className='max-h-72 w-full  object-cover' src={imgLink} alt='blog image' />
                <div className='flex justify-between px-5'>
                    <button className='bg-[#F1F2F2] flex justify-between items-center gap-5 px-7 py-1 my-3 rounded-3xl border-blue-100 border'>Details <BsArrowRight></BsArrowRight></button><br />
                    <button className='bg-[#F1F2F2] flex justify-between items-center gap-5 px-7  py-1 my-3 rounded-3xl border-blue-100 border'>Wishlist <FaRegBookmark></FaRegBookmark></button>
                </div>
            </div>
        </div>
    );
};

RecentBlogCard.propTypes = {
    blog: PropTypes.object
}
export default RecentBlogCard;