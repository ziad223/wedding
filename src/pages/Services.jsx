import React from 'react';
import serviceHero from '../images/services/service-hero.png';
import ServicesSection1 from '../components/ServicesSection1';
import ServicesSection2 from '../components/ServicesSection2';
import ServicesSection3 from '../components/servicesSection3';
import ServicesSection4 from '../components/ServicesSection4';
import ServicesSection5 from '../components/ServicesSection5';
import ServicesSection6 from '../components/ServicesSection6';
import bg from '../images/services/service-bg.png';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div>
        <div>
        <img src={serviceHero} alt="service-hero" className='lg:h-[827px]' />
        </div> 
      <div className='text-center bg-white p-5 lg:p-10 my-10 '>
        <h2 className='text-[#907457] lg:w-[965px] lg:h-[50px] font-bold text-lg lg:text-[48px] mx-auto'>خدماتنا في تصميم فساتين الزفاف</h2>
        <p className='text-lg  mx-auto mt-4 lg:w-[965px] lg:h-[80px] leading-[1.5] lg:text-[28px]'>
          في بهاء الدين، نقدم مجموعة متميزة من الخدمات لتلبية كافة احتياجات العروس وجعل 
           يوم زفافها استثنائيًا
           </p>
      </div>
      <div className="px-4 md:px-16 lg:px-24 mt-14">
      <ServicesSection1/>
      </div>
      <div className="px-4 md:px-16 lg:px-24 lg:my-32">
      <ServicesSection2 />
      </div>
      <div className="px-4 md:px-16 lg:px-24 lg:my-32 mt-10">
       <ServicesSection3 />
      </div>
      <div className="px-4 md:px-16 lg:px-24 lg:my-32">
        <ServicesSection4 />
      </div>
      <div className="px-4 md:px-16 lg:px-24 lg:my-32 mt-10">
        <ServicesSection5 />
      </div>
      <div className='bg-[#252525] mt-32'>
        <ServicesSection6/>
        <div
          className="h-[700px] lg:h-[829px] flex justify-center items-center text-center px-4"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover', // لضمان ملء الخلفية للمساحة
            backgroundPosition: 'center', // لتوسيط الخلفية
            backgroundRepeat: 'no-repeat', // لمنع تكرار الخلفية
          }}
        >
          <div className="w-full max-w-2xl">
            {/* يحدد عرض المحتوى ليكون مناسباً على مختلف الشاشات */}
            <h2 className="text-white text-xl lg:text-2xl font-bold">
              هل ترغبين في تصميم فستان أحلامك؟ تواصلي معنا الآن لحجز
              <span className="md:block">استشارتك الخاصة.</span>
            </h2>
            <Link
              to="/contact"
              className="bg-[#907457] block w-max mx-auto px-8 sm:px-10 md:px-14 py-3 text-lg sm:text-xl text-white rounded-lg cursor-pointer hover:bg-[#795b3b] transition-all duration-300 mt-6"
            >
              تواصلي معنا
            </Link>
          </div>
        </div>


      </div>
      


    </div>
  );
}

export default Services;
