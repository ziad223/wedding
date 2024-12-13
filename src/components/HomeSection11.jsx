import React from 'react';
import img1 from '../images/home/homeBlog1.png';
import img2 from '../images/home/homeBlog2.png';
import img3 from '../images/home/homeBlog3.png';
import { Link } from 'react-router-dom';


const HomeSection11 = () => {
  return (
      <div className='bg-[#f6f2e9] my-20 p-10'>
        <div className="text-center">
            <h2 className='lg:text-3xl font-bold text-2xl'>مدونة</h2>
            <p className='text-lg mt-3'>
                  تابعي مدونتنا لأحدث النصائح حول اختيار الفستان المثالي، واطلعي على أحدث <span className='lg:block'>صيحات الموضة في عالم فساتين الزفاف.</span>
            </p>
        </div>
        <div className='mt-10 flex lg:flex-row flex-col justify-center gap-6 items-center '>
              <img loading="lazy" src={img1} alt="homeBlog1" />
              <img loading="lazy" src={img2} alt="homeBlog2" className='lg:mt-40' />
              <img loading="lazy" src={img3} alt="homeBlog3" />
        </div>
          <div>
              <Link
                  to="/contact"
                  className="bg-[#907457] block mx-auto mt-20 w-max py-3 px-20 text-xl text-white rounded-lg  hover:bg-[#7c6246] transition-all duration-300"
              >
                  أقرئي المزيد
              </Link>
          </div>
      
    </div>
  );
}

export default HomeSection11;
