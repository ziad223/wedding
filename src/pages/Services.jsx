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
        <img src={serviceHero} alt="service-hero" />
        </div> 
      <div className='text-center bg-white p-5 lg:p-10'>
        <h2 className='text-[#907457] font-bold text-lg lg:-2xl'>خدماتنا في تصميم فساتين الزفاف</h2>
        <p className='text-lg  mx-auto mt-4'>
          في بهاء الدين، نقدم مجموعة متميزة من الخدمات لتلبية كافة احتياجات العروس وجعل 
          <span className='md:block'>  يوم زفافها استثنائيًا</span>
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
          className="mt-10 h-[700px]" // استخدم ارتفاع مناسب هنا، أو يمكنك استخدام h-full إذا كنت ترغب بملء المساحة
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className='flex justify-center flex-col gap-7 items-center h-screen text-center'>
            <h2 className='text-white lg:text-3xl text-xl font-bold w-[90%] lg:w-[full]'>
              هل ترغبين في تصميم فستان أحلامك؟ تواصلي معنا الآن لحجز
              <span className='md:block'>
                استشارتك الخاصة.
              </span>
            </h2>
            <Link to='/contact' className='bg-[#907457] px-14 text-lg py-3 text-white rounded-lg d cursor-pointer hover:bg-[#795b3b] transition-all duration-300'>
               تواصلي معنا
            </Link>
          </div>
        </div>
      </div>
      


    </div>
  );
}

export default Services;
