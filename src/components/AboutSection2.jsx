import React from 'react';
import img1 from '../images/about/about-img-2.png';
import img2 from '../images/about/about-img-3.png';
import bg from '../images/about/bg.png';

const AboutSection2 = () => {
  return (
      <div className='bg-[#252525] px-4 md:px-16 lg:px-24 py-10 gap-5 lg:gap-0 flex justify-center items-center flex-col lg:flex-row' style={{backgroundImage : `url(${bg})` , backgroundPosition : 'center' , backgroundSize : 'contain' , backgroundRepeat : 'no-repeat'}}>
          <div className='w-full text-center lg:text-right lg:mb-20'>
              <h2 className='text-2xl font-bold text-white'>لمحة عن المصمم بهاء الدين</h2>
              <p className='mt-4 text-gray-200 text-lg'>
                  بهاء الدين هو مصمم أزياء رائد في مصر، يتمتع بشغف لتصميم<span className='md:block'> فساتين الزفاف التي تمزج بين الأناقة العصرية والتقاليد، ليحقق</span> لكل عروس فستان أحلامها.
              </p>
          </div>
          <div className='w-full md:w-1/2 relative flex justify-center'>
              <img src={img2} alt="about-img" className='absolute bottom-0 w-40 left-60  sm:left-60 lg:left-96 transform -translate-x-1/2 lg:w-3/4 md:w-auto' />
              <img src={img1} alt="about-img" className='mx-auto lg:mx-0 w-3/4 md:w-auto' />
          </div>
      </div>

  );
}

export default AboutSection2;
