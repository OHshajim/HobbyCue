"use client";
import React, { useEffect, useState } from "react";

const Card = () => {
  const [blogs, setBlog] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setBlog(data);
        console.log(data);
      });
  }, []);
  return (
    <div className="my-10">
      {blogs.map((blog) => (
        <div key={blog['id']} className="text-black sm:p-5 p-2">
          <h1 className="text-2xl font-semibold ">{blog['title']}</h1>
          <p className="text-xs text-[#5F5F5F] my-3">{blog['body']}</p>
          <hr />
          <div className="flex justify-between items-center ">
            <div className="flex sm:gap-3 gap-2 mt-6">
              <p className="px-2 py-1 bg-white rounded-full text-xs text-[#76A4CE]">
                #photography
              </p>
              <p className="px-2 py-1 bg-white rounded-full text-xs text-[#76A4CE]">
                #astronomy
              </p>

              <p className="px-2 py-1 bg-white rounded-full text-xs text-[#76A4CE] cursor-pointer">
                +
              </p>
            </div>
            <div>
              <button className="text-[#196AA0] font-semibold  text-base pt-6">
                Read more
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
