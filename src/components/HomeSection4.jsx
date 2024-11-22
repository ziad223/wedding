import React, { useState } from "react";
import home3 from "../images/home/home-3.png";
import home4 from "../images/home/home-4.png";
import home5 from "../images/home/home-5.png";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const HomeSection4 = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // لتحديد الشريحة النشطة

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true, // يجعل العنصر الأوسط دائمًا في المنتصف
    centerPadding: "0", // يزيل المسافات حول العنصر الأوسط
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex), // تحديث الشريحة النشطة
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  const images = [home3, home4, home5, home3, home4, home5];

  return (
    <div className="bg-[#f6f2e9] px-4 md:px-8 lg:px-24 py-10">
      <h2 className="lg:text-4xl text-xl">معرض الأعمال</h2>
      <Slider {...settings} className="mt-20">
        {images.map((image, index) => (
          <div key={index} className="relative lg:h-[630px] h-[413px]">
            <div className="absolute bottom-0 w-full flex justify-center">
              <img
                src={image}
                alt={`image-${index}`}
                className={`transition-all duration-200 object-contain ${currentSlide === index
                  ? "lg:h-[649px] lg:w-[496px] object-contain"  // الحفاظ على المحاذاة بدون تغيير الاتجاه
                  : "lg:h-[413px] lg:w-[332px] object-contain"
                  }`}
              />
            </div>
          </div>
        ))}
      </Slider>

      <div className="mx-auto block text-center">
        <Link
          to="/about"
          className="bg-[#907457] py-3 block px-20 text-xl text-white rounded-lg mt-10 mx-auto hover:bg-[#7c6246] transition-all duration-300 lg:text-right w-max text-center"
        >
          المزيد
        </Link>
      </div>
    </div>
  );
};

export default HomeSection4;
