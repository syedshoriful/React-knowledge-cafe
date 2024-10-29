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
        <div>
            <p>Data: {blogs.length}</p>
        </div>
    );
};

export default Blogs;