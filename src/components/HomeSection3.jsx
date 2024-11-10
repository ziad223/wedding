import React from 'react';
import home2 from '../images/home/home-2.png';
import { Link } from 'react-router-dom';
const HomeSection3 = () => {
  return (
      <div className="flex flex-col lg:flex-row items-center my-20 px-4 md:px-8 lg:px-24">
          <div className="w-full lg:w-1/2 flex flex-col mt-2 justify-center h-full">
              <h2 className="text-[#907457] lg:text-4xl font-bold text-xl text-center lg:text-right">
                  لأنك تستحقين فستانًا يُحاكي <span className="lg:block">جمالك</span>
              </h2>
              <p className="mt-4 lg:text-2xl text-lg text-center lg:w-[80%] lg:text-right">
                  بهاء الدين، من الأسماء الرائدة في عالم تصميم فساتين الزفاف المخصصة في مصر. بفضل خبرته التي تزيد عن 10 سنوات في صناعة الأزياء، استطاع أن يقدم لكل عروس فستانًا يجمع بين الفخامة العصرية والتفاصيل الكلاسيكية الراقية. يعمل بهاء الدين بشغف وتفانٍ على تصميم فساتين تعكس جمال وروح كل عروس، لتحقق رؤيتها الخاصة في يومها الكبير.
              </p>
              <Link
                  to="/about"
                  className="bg-[#907457] py-3 px-10 text-xl text-white rounded-lg mt-5 hover:bg-[#7c6246] transition-all duration-300 text-center lg:text-right w-max mx-auto lg:mx-0"
              >
                  أقرئي المزيد
              </Link>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0">
              <img src={home2} alt="home-1" className="object-contain w-full max-h-[430px] rounded-sm" />
          </div>
      </div>

  );
}

export default HomeSection3;
