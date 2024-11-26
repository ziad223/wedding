import React from 'react';
import img1 from '../images/about/about-img-4.png';
import img2 from '../images/about/about-img-5.png';
import img3 from '../images/about/about-img-6.png';

const AboutSection3 = () => {
    return (
        <div className='p-10 my-24 px-4 md:px-16 lg:px-24 lg:my-14 flex flex-col lg:flex-row justify-center'>
            {/* Left Side */}
            <div className='w-full lg:w-1/2 lg:mt-3'>
                <h2 className='lg:text-[40px] leading-[1.4] lg:w-[470px] lg:h-[101px] text-2xl font-bold text-[#907457]'>
                    لماذا تختارين فساتين بهاء
                    الدين
                </h2>
               
                <div className='flex flex-col gap-5 lg:gap-0 mt-10'>
                    <div className='flex items-center gap-5'>
                        <span className='bg-[#907457] p-1 w-8 h-8 lg:w-[42px] lg:h-[42px] text-white rounded-full flex items-center justify-center text-lg'>1</span>
                        <p className='text-xl lg:w-[434px] lg:mt-4 lg:h-[46px] font-light lg:text-[28px] '>التركيز على جودة الخامات</p>
                    </div>
                    <div className='flex items-center gap-5'>
                        <span className='bg-[#907457] p-1 w-8 h-8 lg:w-[42px] lg:h-[42px] text-white rounded-full flex items-center justify-center text-lg'>2</span>
                        <p className='text-xl lg:w-[434px] lg:mt-4 lg:h-[46px] font-light lg:text-[28px]'>التصميم المخصص</p>
                    </div>
                    <div className='flex items-center gap-5'>
                        <span className='bg-[#907457] p-1 w-8 h-8 lg:w-[42px] lg:h-[42px] text-white rounded-full flex items-center justify-center text-lg'>3</span>
                        <p className='text-xl lg:w-[434px] lg:mt-4 lg:h-[46px] font-light lg:text-[28px]'>الخدمة المتكاملة</p>
                    </div>
                    <div className='flex items-center gap-5'>
                        <span className='bg-[#907457] p-1 w-8 h-8 lg:w-[42px] lg:h-[42px] text-white rounded-full flex items-center justify-center text-lg'>4</span>
                        <p className='text-xl lg:w-[434px] lg:mt-4 lg:h-[46px] font-light lg:text-[28px]'>الاهتمام بالتفاصيل</p>
                    </div>
                </div>
            </div>

            {/* Right Side */}
            <div className="w-full lg:w-1/2 flex flex-col lg:flex-row gap-5 mt-10 lg:mt-0">
                <div className='flex flex-col gap-3 w-full lg:w-1/2'>
                    <img src={img1} alt="img1" className='w-full h-full' />
                    <img src={img2} alt="img2" className='w-full h-full' />
                </div>
                <img src={img3} alt="img3" className='w-full h-auto lg:w-1/2' />
            </div>
        </div>
    );
}

export default AboutSection3;
