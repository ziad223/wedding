import React from 'react';
import homeBanner from '../images/home/home-banner.png';
import { Link } from 'react-router-dom';

const HomeSection6 = () => {
    return (
        <div
            className="flex items-center h-screen  justify-center bg-cover bg-center py-20 px-4"
            style={{ backgroundImage: `url(${homeBanner})` , backgroundPosition : 'center' }}
        >
            <div className="text-center  p-8 rounded-lg ">
                <p className="text-xl font-bold mb-6 text-white">
                    احجزي موعدك الآن واحصلي على استشارة مجانية مع بهاء الدين <span className='lg:block'>   لتصميم فستان زفاف أحلامك. العرض لفترة محدودة!</span>
                </p>
                <Link
                    to="/contact"
                    className="bg-[#907457] py-3 px-20 text-xl text-white rounded-lg mt-4 hover:bg-[#7c6246] transition-all duration-300"
                >
                    أحجز الأن
                </Link>
            </div>
        </div>
    );
};

export default HomeSection6;
