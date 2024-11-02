import React from 'react';
import home3 from '../images/home-3.png';
import home4 from '../images/home-4.png';
import home5 from '../images/home-5.png';
import { Link } from 'react-router-dom';
const HomeSection4 = () => {
  return (
      <div className='bg-[#f6f2e9] px-4 md:px-8 lg:px-24 py-10'>
          <h2 className='lg:text-4xl text-xl'>معرض الأعمال</h2>
          <div className="flex justify-center lg:w-[80%] mx-auto gap-3 mt-16 items-end">
              <img src={home3} alt="home3" className="w-1/4 h-full object-contain" /> {/* الصورة الأولى بحجم نصف */}
              <img src={home4} alt="home4" className="w-1/2 h-full object-contain" /> {/* الصورة الوسطى بحجم كامل */}
              <img src={home5} alt="home5" className="w-1/4 h-full object-contain" /> {/* الصورة الأخيرة بحجم نصف */}
          </div>
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
