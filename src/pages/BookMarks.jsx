import { useEffect, useState } from "react";
import { deleteBlogs, getBlogs } from "../utils";
import BlogCard from "../components/BlogCard";
import { Link } from "react-router-dom";

const BookMarks = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        const savedBlogs = getBlogs();
        setBlogs(savedBlogs);
    }, []);
    const handleDelete = id => {
        deleteBlogs(id);
        const savedBlogs = getBlogs();
        setBlogs(savedBlogs);
    }
    return (
        <Link to='/bookmarks' className="grid justify-center grid-cols-1 gap-5  px-4 sm:px-8 lg:px-12 py-8 sm:grid-cols-2 lg:grid-cols-3">
            {
                blogs.map((blog) => <BlogCard
                    key={blog.id}
                    blog={blog}
                    deletable = {true}
                    handleDelete={handleDelete}
                />)
            }
            
        </Link>
    );
};

export default BookMarks;