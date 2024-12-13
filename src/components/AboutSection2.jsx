import React from 'react';
import img1 from '../images/about/about-img-2.png';
import img2 from '../images/about/about-img-3.png';
import bg from '../images/about/bg.png';

const AboutSection2 = () => {
  return (
      <div className='bg-[#252525] my-24 px-4 md:px-16 lg:px-24 py-10 gap-5 lg:gap-0 flex justify-center items-center flex-col lg:flex-row' style={{backgroundImage : `url(${bg})` , backgroundPosition : 'center' , backgroundSize : 'contain' , backgroundRepeat : 'no-repeat'}}>
          <div className='w-full text-center  lg:text-right lg:mb-20'>
              <h2 className='lg:text-[40px] font-bold text-white lg:w-[664px] lg:h-[67px]'>لمحة عن المصمم بهاء الدين</h2>
              <p className='mt-4 text-gray-200 text-lg lg:w-[664px] lg:h-[120px] leading-[1.4] font-light lg:text-[28px]'>
بهاء الدين هو مصمم أزياء رائد في مصر، يتمتع بشغف لتصميم فساتين الزفاف التي تمزج بين الأناقة العصرية والتقاليد، ليحقق لكل عروس فستان أحلامها.              </p>
          </div>
          <div className='w-full md:w-1/2 relative flex justify-center'>
              <img loading="lazy" src={img2} alt="about-img" className='absolute lg:w-[245px] lg:h-[176px] z-20 -bottom-4 w-40 left-64  sm:left-60 lg:left-[400px] transform -translate-x-1/2 md:w-auto' />
              <img loading="lazy" src={img1} alt="about-img" className='mx-auto lg:mx-0 w-3/4 md:w-auto z-10 lg:w-[371px] lg:h-[427px]' />
          </div>
      </div>

  );
}

export default AboutSection2;
