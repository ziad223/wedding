import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const BlogContent = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetching data from the API
    axios.get('https://highleveltecknology.com/bahaa/public/all_slides/7')
      .then((response) => {
        setBlogs(response.data.blog);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h2 className="font-bold lg:text-[48px] text-xl mb-10 lg:w-[755px] lg:h-[48px]">
        ابقِ على اطلاع بأحدث صيحات الموضة
      </h2>
      <div className="flex flex-col flex-wrap lg:flex-row  gap-4">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="w-full lg:w-[31%] bg-[#f6f2e9] border p-1"
          >
            <img
              src={`https://highleveltecknology.com/bahaa/public/${blog.img}`}
              alt={blog.title}
              className="w-full object-cover h-64 lg:w-[369px] lg:h-[413px]"
            />
            <div className="p-5">
              <h2 className="lg:text-[24px] font-normal text-lg">
                {blog.title}
              </h2>
              <p className="mt-3 text-lg font-light lg:text-[16px] lg:h-[88px]">
                {blog.text}
              </p>
              <button
                onClick={() =>
                  navigate(`/blog/${blog.id}`, { state: blog })
                }
                className="bg-[#907457] lg:w-[120px] lg:h-[34px] px-8 text-lg py-1 mt-10 text-white rounded-lg cursor-pointer hover:bg-[#795b3b] transition-all block duration-300 flex justify-center items-center"
              >
                المزيد
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogContent;
