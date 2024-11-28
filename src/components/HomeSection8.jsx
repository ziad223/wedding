import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeSection8 = () => {
  const [slides, setSlides] = useState([]);
  const baseURL = "https://highleveltecknology.com/bahaa/public/";

  useEffect(() => {
    // Fetch slides data
    axios
      .get(`${baseURL}all_slides/9`)
      .then((response) => {
        if (response.data && response.data.slides) {
          setSlides(response.data.slides);
        }
      })
      .catch((error) => {
        console.error("Error fetching slides:", error);
      });
  }, []);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay : true,
    autoplaySpeed : 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="px-4 md:px-8 lg:px-24 my-20 bg-[#252525] p-10">
      <h2 className="lg:text-[32px] text-xl text-center text-white mb-20">
        لماذا تختارين فساتين بهاء الدين
      </h2>
      <div className=" lg:border rounded-2xl mx-auto">
        {slides.length > 0 ? (
          <Slider {...sliderSettings}>
            {slides.map((slide) => (
              <div
                key={slide.id}
                className="flex flex-col items-center justify-center  text-center lg:text-right gap-10 lg:gap-0"
              >
                <div className="flex flex-col items-center justify-between lg:px-10 lg:py-14 lg:flex-row-reverse">
                  <div className="lg:text-right">
                    <h2 className="text-xl font-bold lg:text-[25px] text-white">
                      {slide.title}
                    </h2>
                    <p className="mt-3 text-gray-300 text-lg font-light leading-[1.4] lg:text-[25px] lg:w-[70%]  float-right">
                      {slide.text}
                    </p>
                  </div>
                  <img
                    src={`${baseURL}${slide.img}`}
                    alt={slide.title}
                    className="lg:w-[367px] lg:h-[284px] mt-5 lg:mt-0"
                  />
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <p className="text-white text-center">جارٍ تحميل المحتوى...</p>
        )}
      </div>
    </div>
  );
};

export default HomeSection8;
