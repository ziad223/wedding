import React from 'react';
import img1 from '../images/services/service-img-3.png';
import { Link } from 'react-router-dom';

const ServicesSection3 = () => {
    return (
        <div className='flex flex-col xl:flex-row justify-center items-center xl:items-end'>
            <img src={img1} alt="service-img" className='w-full xl:w-auto mt-5 xl:mt-0 lg:w-[678px] lg:h-[404px]' />
            <div className='bg-[#f6f2e9] p-5 xl:p-10 xl:-mb-10 mt-5 xl:mt-5 xl:-mr-20 -z-20 w-full xl:w-auto'>
                <div className='xl:mr-14 text-center xl:text-right'>
                    <h2 className='font-bold text-xl xl:text-2xl'>استشارات مخصصة</h2>
                    <p className='mt-5 text-lg mb-7'>
                        نساعدك في اختيار التصميم المثالي الذي يعكس شخصيتك ويعزز جمالك الطبيعي، مع توجيهات حول أحدث صيحات الموضة في عالم فساتين الزفاف.
                    </p>
                    <Link
                        to='/contact'
                        className='bg-[#907457] px-8 text-md py-2 text-white rounded-lg cursor-pointer hover:bg-[#795b3b] transition-all duration-300'
                    >
                        تواصلي معي
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ServicesSection3;
