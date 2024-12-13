import React from 'react';
import img1 from '../images/services/service-img-4.png';
import { Link } from 'react-router-dom';

const ServicesSection4 = () => {
    return (
        <div className='flex flex-col xl:flex-row justify-center items-center xl:items-end'>
            <div className='bg-[#f6f2e9] p-5 xl:p-10 xl:-mb-10 mt-5 xl:mt-5 xl:-ml-20  w-full xl:w-auto'>
                <div className='xl:ml-14 text-center xl:text-right'>
                    <h2 className='font-bold text-xl xl:text-2xl'>إكسسوارات مكملة للفستان</h2>
                    <p className='mt-5 text-lg mb-7'>
                        نصمم قطعًا متكاملة مثل الطرحات، الحجاب، وأغطية الرأس، لنضمن أن إطلالتك في يوم زفافك تكون متكاملة وساحرة.
                    </p>
                    <Link
                        to='/contact'
                        className='bg-[#907457] px-8 text-md py-2  text-white rounded-lg cursor-pointer hover:bg-[#795b3b] transition-all duration-300'
                    >
                        تواصلي معي
                    </Link>
                </div>
            </div>
            <img loading="lazy" src={img1} alt="service-img" className='w-full xl:w-auto mt-5 xl:mt-0 lg:w-[678px] lg:h-[387px]' />
        </div>
    );
}

export default ServicesSection4;
