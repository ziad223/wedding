import React from 'react';
import img1 from '../images/about/about-img-4.png';
import img2 from '../images/about/about-img-5.png';
import img3 from '../images/about/about-img-6.png';

const AboutSection3 = () => {
    return (
        <div className='p-10 px-4 md:px-16 lg:px-24 flex flex-col lg:flex-row justify-center items-center'>
            {/* Left Side */}
            <div className='w-full lg:w-1/2'>
                <h2 className='lg:text-3xl text-2xl font-bold text-[#907457]'>
                    لماذا تختارين فساتين بهاء
                    <span className='lg:block'> الدين</span>
                </h2>
                <div className='flex flex-col gap-4 mt-10'>
                    <div className='flex items-center gap-5'>
                        <span className='bg-[#907457] p-1 w-6 h-6 text-white rounded-full flex items-center justify-center text-sm'>1</span>
                        <p className='text-xl'>التركيز على جودة الخامات</p>
                    </div>
                    <div className='flex items-center gap-5'>
                        <span className='bg-[#907457] p-1 w-6 h-6 text-white rounded-full flex items-center justify-center text-sm'>2</span>
                        <p className='text-xl'>التصميم المخصص</p>
                    </div>
                    <div className='flex items-center gap-5'>
                        <span className='bg-[#907457] p-1 w-6 h-6 text-white rounded-full flex items-center justify-center text-sm'>3</span>
                        <p className='text-xl'>الخدمة المتكاملة</p>
                    </div>
                    <div className='flex items-center gap-5'>
                        <span className='bg-[#907457] p-1 w-6 h-6 text-white rounded-full flex items-center justify-center text-sm'>4</span>
                        <p className='text-xl'>الاهتمام بالتفاصيل</p>
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
