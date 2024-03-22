import PropTypes from 'prop-types';
import placeholderimage from '../assets/404.jpg'
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
const BlogCard = ({ blog, deletable, handleDelete }) => {
    return (
        <div className='flex relative'>
            <Link to={`/blog/${blog.id}`} className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 p-2 border-2 border-primary hover:border-secondary  transition hover:scale-105">
                <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={blog.cover_image || placeholderimage} />
                <div className="p-6 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{blog.title}</h3>
                    <span className="text-xs dark:text-gray-400">{new Date(blog.published_at).toLocaleDateString()}</span>
                    <p>{blog.description}</p>
                </div>
            </Link>
                {
                    deletable && <div onClick={() => handleDelete(blog.id)} className='absolute -top-6 z-5 right-8 bg-primary p-3 ml-5 rounded-full hover:bg-opacity-30 bg-opacity-80 cursor-pointer hover:scale-105'><MdDelete size={20} className='text-secondary font-bold' /></div>
                }
        </div>
    );
};
BlogCard.propTypes = {
    blog: PropTypes.object.isRequired,
    deletable: PropTypes.bool.isRequired,
    handleDelete: PropTypes.func.isRequired
}

export default BlogCard;