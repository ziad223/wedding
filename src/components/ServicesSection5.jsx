import React from 'react';
import img1 from '../images/services/service-img-5.png';
import { Link } from 'react-router-dom';

const ServicesSection5 = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-center items-end'>
            <img src={img1} alt="service-img" />
            <div className='bg-[#f6f2e9] lg:p-10 p-5 lg:-mb-10 mt-5 lg:mt-5 lg:-mr-20 -z-20 '>
                <div className='lg:mr-14'>
                    <h2 className='font-bold lg:text-2xl text-xl'>خدمة المرافقة الشخصية</h2>
                    <p className='mt-5 text-lg mb-7'>
                        من بين خدماتنا المميزة، تقوم إحدى المختصات من فريقنا بمرافقتك طوال يوم الزفاف، حيث تساعدك في ارتداء الفستان بأفضل طريقة، وتهتم بأدق التفاصيل لضمان إطلالتك المثالية من بداية اليوم حتى نهايته، لتظهري في أجمل صورة.
                    </p>
                    <Link to='/contact' className='bg-[#907457] px-8 text-md py-2 text-white rounded-lg d cursor-pointer hover:bg-[#795b3b] transition-all duration-300'>
                        تواصلي معي
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ServicesSection5;
