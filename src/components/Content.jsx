import { useLoaderData } from "react-router-dom";
import placeholderimage from '../assets/404.jpg'
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
const Content = () => {
    const blog = useLoaderData();
    return (
        <div className="mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 p-3 border-2 border-opacity-5 border-primary">
            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={blog.cover_image || placeholderimage} />
            <div>
                <div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-400">
                    {
                        blog.tags.map(tag=> <a key={tag} rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-400 dark:text-gray-900">#{tag}</a>)
                    }
                </div>
            </div>
            <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{blog.title}</h3>
                <span className="text-xs dark:text-gray-400">{new Date(blog.published_at).toLocaleDateString()}</span>
                <p>{blog.description}</p>
                <Markdown rehypePlugins={[rehypeRaw]}>{blog.body_html}</Markdown>
            </div>
        </div>
    );
};

export default Content;