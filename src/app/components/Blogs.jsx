'use client'
import Link from "next/link";
import { useEffect, useState } from "react";


const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(result => setBlogs(result))
  }, [])
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {blogs.map((blog) => (
        <div key={blog?.id} className="border p-4 rounded-md flex flex-col justify-between hover:scale-105 transition-all duration-500">
          <h3 className="font-semibold text-lg">{blog?.title}</h3>
          <p>{blog?.body}</p>
          <Link className="btn mt-2 btn-success" href={`/blog/${blog?.id}`}>
            View Detail
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Blogs;