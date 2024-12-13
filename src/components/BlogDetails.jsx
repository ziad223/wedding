import React from 'react';
import { useLocation } from 'react-router-dom';

const BlogDetails = () => {
    const { state } = useLocation(); // Get blog data passed from BlogContent

    if (!state) {
        return <p>لا توجد تفاصيل للمقالة.</p>;
    }

    const { title, text, img } = state;

    return (
        <div className="px-4 md:px-16 lg:px-24 my-32 mx-auto py-10 text-center">
            <img
                loading="lazy" 
                src={`https://highleveltecknology.com/bahaa/public/${img}`}
                alt={title}
                className=" lg:w-[500px] lg:h-[500px] mx-auto mb-5"
            />
            <h1 className="lg:text-3xl text-xl font-bold mb-5 text-[#907457] ">{title}</h1>
            <p className="text-lg font-normal lg:w-[60%] mx-auto">{text}</p>
        </div>
    );
};

export default BlogDetails;
