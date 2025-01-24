"use client"
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";




const Blog = () => {
 
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(` https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => res.json())
    .then((result => setData(result)))
  }, [])

  return (
    <div className="px-4">
      <div className="max-w-screen-md mx-auto border p-4 border-green-700">
        <p>Blog no: {data?.id}</p>
        <h3 className="font-semibold text-3xl mb-4">{data?.title}</h3>
        <p className="opacity-90">{data?.body}</p>
      </div>
    </div>
  );
};

export default Blog;