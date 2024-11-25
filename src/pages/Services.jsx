import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import serviceHero from '../images/services/service-hero.png';
import bg from '../images/services/service-bg.png';
import ServicesSection6 from '../components/ServicesSection6';

const Services = () => {
  const [services, setServices] = useState([]);
  const baseUrl = "https://highleveltecknology.com/bahaa/public/";

  useEffect(() => {
    fetch(`${baseUrl}all_slides/8`)
      .then((response) => response.json())
      .then((data) => setServices(data.services))
      .catch((error) => console.error("Error fetching services:", error));
  }, []);

  return (
    <div>
      <div>
        <img src={serviceHero} alt="service-hero" className='lg:h-[827px]' />
      </div> 
    
      <div className="text-center bg-white p-5 lg:p-10 my-10">
        <h2 className="text-[#907457] lg:w-[965px] lg:h-[50px] font-bold text-lg lg:text-[48px] mx-auto">
          خدماتنا في تصميم فساتين الزفاف
        </h2>
        <p className="text-lg mx-auto mt-4 lg:w-[965px] lg:h-[80px] leading-[1.5] lg:text-[28px]">
          في بهاء الدين، نقدم مجموعة متميزة من الخدمات لتلبية كافة احتياجات العروس وجعل
          يوم زفافها استثنائيًا.
        </p>
      </div>

      {/* الخدمات */}
      <div className="px-4 md:px-16 lg:px-24 mt-14 flex flex-col lg:gap-20 ">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`flex flex-col xl:flex-row justify-center items-center xl:items-end mb-16 ${index % 2 === 0 ? "xl:flex-row" : "xl:flex-row-reverse"
              }`}
          >
            {/* الصورة */}
            <img
              src={`${baseUrl}${service.img}`}
              alt={service.title}
              className={`w-full xl:w-auto lg:w-[678px] z-20 lg:h-[368px] mb-5 xl:mb-0 ${index % 2 === 0 ? "lg:mr-5" : "lg:ml-5"
                }`}
            />

            {/* المحتوى */}
            <div
              className={`bg-[#f6f2e9] p-5 xl:p-10 ${index % 2 === 0 ? "xl:-mr-16" : "xl:-ml-16"
                } xl:-mb-10 xl:mt-5 w-full xl:w-auto`}
            >
              <div
                className={`${index % 2 === 0 ? "xl:mr-14" : "xl:ml-14"
                  } text-center xl:text-right`}
              >
                <h2 className="font-bold text-xl xl:text-2xl">{service.title}</h2>
                <p className="mt-5 text-lg mb-7">{service.text}</p>
                <Link
                  to="/contact"
                  className="bg-[#907457] px-8 text-md py-2 text-white rounded-lg cursor-pointer hover:bg-[#795b3b] transition-all duration-300"
                >
                  تواصلي معي
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='bg-[#252525] mt-32'>
        <ServicesSection6 />
        </div>
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
  );
};

export default Services;
