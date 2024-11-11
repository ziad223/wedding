import React from 'react';
import img1 from '../images/services/service-img-3.png';
import { Link } from 'react-router-dom';

const ServicesSection3 = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-center items-end'>
            <img src={img1} alt="service-img" />
            <div className='bg-[#f6f2e9] lg:p-10 p-5 lg:-mb-10 mt-5 lg:mt-5 lg:-mr-20 -z-20 '>
                <div className='lg:mr-14'>
                    <h2 className='font-bold lg:text-2xl text-xl'> استشارات مخصصة</h2>
                    <p className='mt-5 text-lg mb-7'>
                        نساعدك في اختيار التصميم المثالي الذي يعكس شخصيتك ويعزز جمالك الطبيعي، مع توجيهات حول أحدث صيحات الموضة في عالم فساتين الزفاف.
                    </p>
                    <Link to='/contact' className='bg-[#907457] px-8 text-md py-2 text-white rounded-lg d cursor-pointer hover:bg-[#795b3b] transition-all duration-300'>
                        تواصلي معي
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ServicesSection3;
