/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link, Outlet, useLoaderData, useNavigation } from "react-router-dom";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import { saveBlogs } from "../utils";
const Blog = () => {
    // eslint-disable-next-line no-unused-vars
    const [tabIndex, setTabIndex] = useState(0);
    const blog = useLoaderData();
    console.log(blog);
    const { title, tags, public_reactions_count, reading_time_minutes, comments_count, published_at } = blog;
    const handleBookmark = blog => {
        console.log(blog);
        saveBlogs(blog);

    }
    return (
        <div className="max-w-3xl px-6 py-16 mx-auto space-y-12">
            <article className="space-y-8 dark:bg-gray-800 dark:text-gray-50">
                <div className="space-y-6">
                    <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">{title}</h1>
                    {/* <img src={cover_image} alt="" /> */}
                    <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-400">
                        <p className="text-sm">{reading_time_minutes} min read time • <span>{new Date(published_at).toLocaleDateString()}</span></p>
                        <p className="flex-shrink-0 mt-3 text-sm md:mt-0">{comments_count} comments • {public_reactions_count} views</p>
                    </div>
                    <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-800 dark:text-gray-100">
                        <Link
                         to=''
                        onClick={()=> setTabIndex(0)}
                          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex ===0? 'border border-b-0 ': 'border-b'} dark:border-gray-400 dark:text-gray-400`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                            </svg>
                            <span>Content</span>
                        </Link>
                        <Link 
                        to={`author`}
                        onClick={()=> setTabIndex(1)}
                        className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex ===1? 'border border-b-0': 'border-b'} dark:border-gray-400 dark:text-gray-400`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                            </svg>
                            <span>Author</span>
                        </Link>
                        {/* book mark button */}
                        <div onClick={()=> handleBookmark(blog)} className="bg-primary p-3 ml-5 rounded-full hover:bg-opacity-30 bg-opacity-10 cursor-pointer hover:scale-105">
                            <BsFillBookmarkStarFill size={25} className ="text-secondary"></BsFillBookmarkStarFill>                        
                        </div>
                    </div>
                </div>
                <Outlet/>
            </article>
        </div>
    );
};

export default Blog;