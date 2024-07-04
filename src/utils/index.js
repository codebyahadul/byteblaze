import toast from "react-hot-toast";
export const getBlogs = () =>{
    let blogs = [];
    const storedBlogs = localStorage.getItem('blogs');
    if(storedBlogs){
        blogs = JSON.parse(storedBlogs);
    }
    return blogs;
}
// save blogs 
export const saveBlogs = blog => {
    let blogs = getBlogs();
    const isExit = blogs.find(b => b.id === blog.id);
    if(isExit){
      return toast.error('Already Bookmarked !');
    }
    else{
        blogs.push(blog);
        localStorage.setItem('blogs', JSON.stringify(blogs));
        toast.success('Bookmarked Successfully !')
    }
};
// delete blogs
export const deleteBlogs = id => {
    let blogs = getBlogs();
    const remaining = blogs.filter(b => b.id != id);
    localStorage.setItem('blogs', JSON.stringify(remaining));
    toast.success('Bookmarked remove successfully')
};