import React from "react";

const Blog = ({ blog }) => {
  return (
    <div className="w-full border rounded-2xl shadow-lg cursor-pointer hover:scale-105 transition-all duration-300">
      <img src={blog.img} className="object-cover w-full h-[300px]" />
      <div className="flex gap-2 mt-3 px-3">
        <span className="text-sm text-gray-400">{blog.createdDate}</span>
        <span className="text-sm text-gray-400">{blog.type}</span>
      </div>
      <h2 className="px-3 capitalize font-semibold pb-5">{blog.title}</h2>
    </div>
  );
};

export default Blog;
