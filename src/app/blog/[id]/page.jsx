"use client"
import Loader from "@/app/components/Loader";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";




const Blog = () => {
 
  const { id } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(` https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => res.json())
    .then((result => setData(result)))
    setLoading(false);
  }, [])

  if(loading) {
    return <div className="flex justify-center items-center min-h-screen">
      <Loader />
    </div>
  }

  return (
    <div className="px-4">
      <div className="max-w-screen-md rounded-md mx-auto border p-4 border-green-700">
        <p>Blog no: {data?.id}</p>
        <h3 className="font-semibold text-3xl mb-4">{data?.title}</h3>
        <p className="opacity-90">{data?.body}</p>
      </div>
    </div>
  );
};

export default Blog;