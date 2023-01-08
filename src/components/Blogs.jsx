import React from "react";
import blog1 from "../assets/Images/blog1.jpg";
import blog2 from "../assets/Images/blog2.jpg";
import blog3 from "../assets/Images/blog3.jpg";
import Blog from "./Blog";
const Blogs = () => {
  const data = [
    {
      id: 1,
      img: blog1,
      createdDate: "12 July, 2021",
      type: "Design",
      title: "secret behind being creative without any strategy",
    },
    {
      id: 4,
      img: blog2,
      createdDate: "12 July, 2021",
      type: "Design",
      title: "The simpliest form of design Gives minimalism look",
    },
    {
      id: 3,
      img: blog3,
      createdDate: "12 July, 2021",
      type: "Business",
      title: "Being creative while inventing ideas is quick startup",
    },
  ];
  return (
    <section className="px-10 py-20" id="blogs">
      <div className="container mx-auto ">
        <h2 className="py-4 text-2xl text-center">Blogs</h2>
        <p className="font-bold py-8 text-4xl text-center">Latest Blog Posts</p>
        <div className="grid grid-cols-3 w-[900px] mx-auto gap-3 items-center">
          {data.map((blog) => {
            return <Blog key={blog.id} blog={blog} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
