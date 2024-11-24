import React from 'react';
import img from '../images/about/about-img-1.png';

const AboutSection1 = () => {
    return (
        <div className="bg-white p-10 px-4 md:px-16 lg:px-24 flex flex-col gap-5 lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-6">
            {/* القسم الأول */}
            <div className="w-full lg:w-1/3 text-center lg:text-left lg:ml-5">
                <h2 className="text-2xl font-bold text-[#907457]">رؤيتنا ورسالتنا</h2>
            </div>

            {/* صورة في الوسط */}
            <div className="w-full lg:w-1/3 flex justify-center">
                <img
                    src={img}
                    alt="wedding-img"
                    className="lg:w-[466px] lg:h-auto lg:max-h-[450px] object-cover h-auto"
                />
            </div>

            {/* النص محاذٍ لأسفل الصورة */}
            <div className="w-full lg:w-1/3 lg:text-lg text-center lg:text-right lg:self-end">
                <p>
                    نسعى إلى تقديم فساتين زفاف تحكي قصة كل عروس، تجمع بين الحرفية العالية والتصاميم العصرية التي تجعل كل لحظة في حفل الزفاف لا تُنسى
                </p>
            </div>
        </div>
    );
};

export default AboutSection1;
