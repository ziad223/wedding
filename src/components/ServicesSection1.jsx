import React from 'react';
import img1 from '../images/services/service-img-1.png';
import { Link } from 'react-router-dom';

const ServicesSection1 = () => {
  return (
    <div className='flex flex-col xl:flex-row justify-center items-center xl:items-end'>
      <img src={img1} alt="service-img" className='w-full xl:w-auto mb-5 xl:mb-0 lg:w-[678px] lg:h-[368px]' />
      <div className='bg-[#f6f2e9] p-5 xl:p-10 xl:-mr-16 xl:-mb-10 xl:mt-5 -z-20 w-full xl:w-auto'>
        <div className='xl:mr-14 text-center xl:text-right'>
          <h2 className='font-bold text-xl xl:text-2xl'>تعديلات الفساتين</h2>
          <p className='mt-5 text-lg mb-7'>
            نمنحك فرصة الحصول على فستان زفاف فريد ومخصص يعكس شخصيتك ورؤيتك الخاصة، لتتألقي في يومك المميز.
          </p>
          <Link
            to='/contact'
            className='bg-[#907457] px-8 text-md py-2 text-white rounded-lg cursor-pointer hover:bg-[#795b3b] transition-all duration-300'
          >
            تواصلي معي
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection1;
