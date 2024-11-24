import React from 'react';
import home1 from '../images/home/home-1.png';
import { Link } from 'react-router-dom';
import layer from '../images/layers/homeLayer-1.png';

const HomeSection1 = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center my-20 px-4 md:px-8 lg:px-24 ">
            {/* صورة الفستان */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-between mb-6 lg:mb-0 relative">
                {/* الصورة الأساسية */}
                <img
                    src={home1}
                    alt="home-1"
                    className="object-contain -z-20 w-[90%] sm:w-[70%] lg:w-[589px] h-auto max-h-[492px] rounded-sm"
                />

                {/* صورة layer */}
                <img
                    src={layer}
                    alt="layer"
                    className="w-[70px] h-[70px] sm:w-[90.41px] sm:h-[90.41px] absolute left-[-15px] sm:left-[-20px] top-[-30px] sm:top-[-40px] lg:left-[-40px] lg:top-[-40px]"
                />
            </div>

            {/* النصوص والرابط */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center lg:mt-14 lg:mr-10 h-full">
                <h2 className="text-[#907457] lg:w-[547px] lg:h-[109] font-bold text-lg sm:text-2xl lg:text-4xl text-center lg:text-right mt-3 lg:mt-0">
                    وجهتك المثالية لفساتين الزفاف الفاخرة في مصر
                </h2>
                <p className="my-6 text-base sm:text-lg lg:w-[547] lg:h-[200px] lg:text-2xl text-center lg:text-right leading-[30px] sm:leading-[35px] lg:leading-[40px]">
                    في <span className='text-[#907457]'>بهاء الدين</span>، نجعل كل لحظة لا تُنسى، ونصمم فساتين زفاف تعكس الجمال والأناقة بطابع خاص. بخبرة تمتد لأكثر من 10 سنوات، نقدم تصميمات فريدة تجمع بين التقاليد والعصرية، باستخدام أفضل الخامات والاهتمام بكل تفصيلة.
                </p>
                <Link
                    to="/contact"
                    className="bg-[#907457]  py-3 px-6 lg:w-[200px] lg:h-[60px] sm:px-10 text-base sm:text-xl text-white rounded-lg mt-4 hover:bg-[#7c6246] transition-all duration-300 flex items-center justify-center text-center lg:text-right w-[160px] sm:w-[200px] h-[50px] sm:h-[60px] mx-auto lg:mx-0"
                >
                    تواصل معنا
                </Link>
            </div>
        </div>
    );
};

export default HomeSection1;
