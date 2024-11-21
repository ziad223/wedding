import React from 'react';
import home2 from '../images/home/home-2.png';
import { Link } from 'react-router-dom';
import layer from '../images/layers/homeLayer-2.png';

const HomeSection3 = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${layer})`,
                backgroundSize: 'contain', // لجعل الخلفية تظهر بالكامل.
                backgroundPosition: 'bottom -50px center ',
                backgroundRepeat: 'no-repeat', // منع التكرار.
            }}         className="flex flex-col lg:flex-row items-center my-20 px-4 md:px-8 lg:px-24 space-y-10 lg:space-y-0">
            {/* Text Section */}
            <div className="w-full lg:w-1/ flex flex-col justify-center h-full space-y-6">
                <h2 className=" lg:w-[599px] font-bold text-xl lg:text-5xl text-center lg:text-right">
                    لأنك تستحقين فستانًا يُحاكي جمالك
                </h2>
                <p className="lg:text-2xl text-lg text-center lg:w-[592px] lg:text-right leading-relaxed">
                    بهاء الدين، من الأسماء الرائدة في عالم تصميم فساتين الزفاف المخصصة في مصر. بفضل خبرته التي تزيد عن
                    10 سنوات في صناعة الأزياء، استطاع أن يقدم لكل عروس فستانًا يجمع بين الفخامة العصرية والتفاصيل
                    الكلاسيكية الراقية. يعمل بهاء الدين بشغف وتفانٍ على تصميم فساتين تعكس جمال وروح كل عروس، لتحقق
                    رؤيتها الخاصة في يومها الكبير.
                </p>
                <Link
                    to="/about"
                    className="bg-[#907457] lg:w-[177px] w-[140px] h-[50px]  lg:h-[60px] flex items-center justify-center lg:font-bold text-xl text-white rounded-lg hover:bg-[#7c6246] transition-all duration-300  mx-auto lg:mx-0"
                >
                    أقرئي المزيد
                </Link>

            </div>

            {/* Image Section */}
            <div className="w-full lg:w-1/ flex justify-center">
                <img
                    src={home2}
                    alt="home"
                    className="object-contain w-[518px] h-[430px] rounded-sm "
                />
            </div>
        </div>
    );
};

export default HomeSection3;
