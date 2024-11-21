import React from 'react';
import home6 from '../images/home/home-6.png';
import home7 from '../images/home/home-7.png';
import home8 from '../images/home/home-8.png';
import home9 from '../images/home/home-9.png';
import home10 from '../images/home/home-10.png';
import layer from '../images/layers/homeLayer-3.png';
import { Link } from 'react-router-dom';

const HomeSection5 = () => {
  return (
    <div
      className="px-4 md:px-8 lg:px-24 my-20 relative -z-10"
    >
      <h2 className="lg:text-4xl text-xl text-center lg:text-right">مجموعتنا</h2>
      <div className='lg:absolute hidden lg:block lg:top-[-150px] lg:left-[-20px] -z-20'>
        <img src={layer} className='lg:w-[811px]  lg:h-[537px]' alt="layer" />
      </div>
      <div className="flex flex-col lg:flex-row justify-center gap-5 mt-16">
        {/* العمود الأول */}
        <div className="lg:w-1/3 w-full flex flex-col gap-5">
          <img src={home6} alt="home6" className="w-full h-full lg:w-[384px] lg:h-[328px] object-cover " />
          <img src={home7} alt="home7" className="w-full h-full lg:w-[384px] lg:h-[576px] object-cover " />
        </div>

        {/* العمود الثاني */}
        <div className="lg:w-2/3 w-full flex flex-col gap-5">
          <div className="flex flex-col gap-5">
            <div className="flex ">
              <img src={home8} alt="home8" className="w-1/2 h-full lg:w-[384px] lg:h-[512px] object-cover " />
              <img src={home9} alt="home9" className="w-1/2 h-full lg:w-[384px] lg:h-[512px] object-cover " />
            </div>
            <img src={home10} alt="home10" className="w-full h-full lg:w-[792px] lg:h-[392px] object-cover " />
          </div>
        </div>
        
      </div>
      <div className='mx-auto block text-center'>
        <Link
          to="/contact"
          className="bg-[#907457] py-3 block px-20 text-xl text-white rounded-lg mt-10 mx-auto hover:bg-[#7c6246] transition-all duration-300  lg:text-right w-max text-center "
        >
          تواصل معنا
        </Link>
      </div>
    </div>
  );
}

export default HomeSection5;
