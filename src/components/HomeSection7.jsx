import React from 'react';
import img1 from '../images/home/home-service-1.png';
import img2 from '../images/home/home-service-2.png';
import img3 from '../images/home/home-service-3.png';
import { Link } from 'react-router-dom';
const HomeSection7 = () => {
  return (
    <div className='px-4 md:px-8 lg:px-24 my-20 '>
      <div className='text-center'>
        <h2 className='lg:text-4xl text-2xl'>خدماتنا</h2>
        <p className='mt-2 lg:text-xl text-lg'>
          نحن نقدم مجموعة متميزة من الخدمات لتلبية كافة احتياجات العروس <span className='lg:block'>وجعل يوم زفافها استثنائيًا</span>  </p>
      </div>
      <div className="flex lg:flex-row flex-col gap-5 lg:gap-0 justify-center items-center mt-10">
      <div className='lg:w-1/3 w-full '>
          <img src={img1} alt="service1" />
      </div>
        <div className='flex flex-col border gap-3 text-center lg:w-1/3 w-full '>
         <div className='p-3'>
            <h2 className='lg:text-2xl'>تصميم فساتين حسب الطلب</h2>
            <p className='mt-4 lg:w-[70%] w-[90%] mx-auto '>
              نمنحك فرصة الحصول على فستان زفاف فريد ومخصص يعكس شخصيتك ورؤيتك الخاصة، لتتألقي في يومك المميز
            </p>
         </div>
          <img src={img2} alt="service2" />
      </div>
        <div className='lg:w-1/3 w-full '>
       <img src={img3} alt="service3" />
          <div className='text-center p-4 shadow-lg'>
            <h2 className='lg:text-2xl '> تعديلات الفساتين </h2>
            <p className='mt-4 lg:w-[70%] w-[90%] mx-auto '>
              نمنحك فرصة الحصول على فستان زفاف فريد ومخصص يعكس شخصيتك ورؤيتك الخاصة، لتتألقي في يومك المميز
            </p>
          </div>
      </div>
      
      </div>
     <div>
        <Link
          to="/contact"
          className="bg-[#907457] block mx-auto mt-10 w-max py-3 px-20 text-xl text-white rounded-lg  hover:bg-[#7c6246] transition-all duration-300"
        >
           أقرئي المزيد
        </Link>
     </div>
    </div>
  );
}

export default HomeSection7;
