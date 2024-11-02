import React from 'react';
import home1 from '../images/home-1.png';
import { Link } from 'react-router-dom';

const HomeSection1 = () => {
  return (
      <div className="flex flex-col lg:flex-row items-center my-20 px-4 md:px-8 lg:px-24 ">
          <div className="w-full lg:w-1/2 flex justify-center">
              <img src={home1} alt="home-1" className="object-contain w-full max-h-[400px] rounded-sm" />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-center h-full">
              <h2 className="text-[#907457] lg:text-4xl font-bold text-xl text-center mt-5 lg:mt-0 lg:text-right">
                  وجهتك المثالية لفساتين الزفاف <span className="lg:block">الفاخرة في مصر</span>
              </h2>
              <p className="my-6 lg:text-2xl text-lg text-center lg:w-[80%] lg:text-right">
                  في <span className="text-[#907457]">بهاء الدين</span>، نجعل كل لحظة لا تُنسى، ونصمم فساتين زفاف تعكس الجمال والأناقة بطابع خاص. بخبرة تمتد لأكثر من 10 سنوات، نقدم تصميمات فريدة تجمع بين التقاليد والعصرية، باستخدام أفضل الخامات والاهتمام بكل تفصيلة.
              </p>
              <Link
                  to="/contact"
                  className="bg-[#907457] py-3 px-10 text-xl text-white rounded-lg mt-4 hover:bg-[#7c6246] transition-all duration-300 text-center lg:text-right w-max mx-auto lg:mx-0"
              >
                  تواصل معنا
              </Link>
          </div>
      </div>

  );
}

export default HomeSection1;
