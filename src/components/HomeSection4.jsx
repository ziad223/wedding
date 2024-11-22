import React from 'react';
import home3 from '../images/home/home-3.png';
import home4 from '../images/home/home-4.png';
import home5 from '../images/home/home-5.png';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const HomeSection4 = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
  return (
      <div className='bg-[#f6f2e9] px-4 md:px-8 lg:px-24 py-10'>
          <h2 className='lg:text-4xl text-xl'>معرض الأعمال</h2>
         <Slider {...settings} className="mt-20">
  <img
    src={home3}
    alt="home3"
    className="lg:w-[332px] lg:h-[413px] w-full transition-all duration-200 hover:w-[496px] hover:h-[649px] object-contain transform origin-bottom"
  />
  <img
    src={home4}
    alt="home4"
    className="lg:w-[332px] lg:h-[413px] w-full transition-all duration-200 hover:w-[496px] hover:h-[649px] object-contain transform origin-bottom"
  />
  <img
    src={home5}
    alt="home5"
    className="lg:w-[332px] lg:h-[413px] w-full transition-all duration-200 hover:w-[496px] hover:h-[649px] object-contain transform origin-bottom"
  />
  <img
    src={home3}
    alt="home3"
    className="lg:w-[332px] lg:h-[413px] w-full transition-all duration-200 hover:w-[496px] hover:h-[649px] object-contain transform origin-bottom"
  />
  <img
    src={home4}
    alt="home4"
    className="lg:w-[332px] lg:h-[413px] w-full transition-all duration-200 hover:w-[496px] hover:h-[649px] object-contain transform origin-bottom"
  />
  <img
    src={home5}
    alt="home5"
    className="lg:w-[332px] lg:h-[413px] w-full transition-all duration-200 hover:w-[496px] hover:h-[649px] object-contain transform origin-bottom"
  />
</Slider>

          <div className='mx-auto block text-center'>
              <Link
                  to="/about"
                  className="bg-[#907457] py-3 block px-20 text-xl text-white rounded-lg mt-10 mx-auto hover:bg-[#7c6246] transition-all duration-300  lg:text-right w-max text-center "
              >
                  المزيد
              </Link>
          </div>
    </div>
  );
}

export default HomeSection4;
