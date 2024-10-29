import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
    const [blogs, setBlogs] = useState([])


    useEffect(() => {
        fetch('blog.json')
        .then(response => response.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl">Blogs</h1>
        </div>
    );
};

export default Blogs;