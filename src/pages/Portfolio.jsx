import React from 'react';
import porfolioHero from '../images/portfolio/portfolio-hreo.png';
import porfolio1 from '../images/portfolio/portfolio-1.png';
import porfolio2 from '../images/portfolio/portfolio-2.png';
import porfolio3 from '../images/portfolio/portfolio-3.png';
import porfolio4 from '../images/portfolio/portfolio-4.png';
import porfolio5 from '../images/portfolio/portfolio-5.png';
import porfolio6 from '../images/portfolio/portfolio-6.png';
import porfolio7 from '../images/portfolio/portfolio-7.png';
import porfolio8 from '../images/portfolio/portfolio-8.png';
import bg from '../images/portfolio/portfolio-9.png';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <div>
        <div>
        <img src={porfolioHero} alt="portfolio-HERO" />
        </div> 
      <div className='text-center bg-white p-5 lg:p-10'>
        <h2 className='text-[#907457] font-bold lg:text-2xl'>استمتعِ بتجربة فريدة مع تصاميم فساتيننا</h2>
        <p className='text-lg  mx-auto mt-4'>
        نحن في بهاء الدين نقدم مجموعة استثنائية من فساتين الزفاف المصممة خصيصًا 
          <span className='md:block'>لتناسب كل عروس. يتميز كل تصميم بلمسة فريدة تعكس الأناقة والجمال، مما يجعل</span>
          يومك الخاص مميزا كما حلمت به.
        </p>
        <div className='my-10 px-4 md:px-16 lg:px-24 flex lg:flex-row flex-col gap-3'>
          <div className='mr-2 lg:mr-0'>
            <img src={porfolio1} alt="porfolio1" />
          </div>
          <div className='mr-2 lg:mr-0'>
            <img src={porfolio2} alt="porfolio2" />
           </div>
           <div className='mr-2 lg:mr-0'>
            <img src={porfolio3} alt="porfolio3" />
           </div>
          <div className='relative'>
            <img src={porfolio4} alt="Fashion" className='w-full h-[500px] object-cover ' />

            {/* طبقة overlay */}
            <div className='absolute inset-0 bg-black opacity-50'></div>

            <div className='absolute top-1/3 text-right right-5 text-white z-10'>
              <h2 className='text-2xl font-bold'>فساتين عصرية</h2>
              <p className='w-[90%] my-3 text-lg'>
                تتميز بأساليب حديثة وتفاصيل مبتكرة تلبي أحدث صيحات الموضة.
              </p>
              <Link to='/about' className='bg-[#907457] block mt-5 w-max px-10 text-lg py-1 text-white rounded-lg cursor-pointer hover:bg-[#795b3b] transition-all duration-300'>
                الكل
              </Link>
            </div>
          </div>

        </div>
        <div className='my-10 px-4 md:px-16 lg:px-24 flex lg:flex-row flex-col gap-3'>
          <div className='mr-2 lg:mr-0'>
            <img src={porfolio5} alt="porfolio5" />
          </div>
          <div className='mr-2 lg:mr-0'>
            <img src={porfolio6} alt="porfolio6" />
          </div>
          <div className='mr-2 lg:mr-0'>
            <img src={porfolio7} alt="porfolio7" />
          </div>
          <div className='relative'>
            <img src={porfolio8} alt="Fashion" className='w-full h-[500px] object-cover ' />

            {/* طبقة overlay */}
            <div className='absolute inset-0 bg-black opacity-50'></div>

            <div className='absolute top-1/3 text-right right-5 text-white z-10'>
              <h2 className='text-2xl font-bold'>فساتين كلاسيكية</h2>
              <p className='w-[90%] my-3 text-lg'>
               تجمع بين الفخامة والراحة، مثالية لكل العرائس التي تبحث عن لمسة تقليدية 
              </p>
              <Link to='/about' className='bg-[#907457] block mt-5 w-max px-10 text-lg py-1 text-white rounded-lg cursor-pointer hover:bg-[#795b3b] transition-all duration-300'>
                الكل
              </Link>
            </div>
          </div>

        </div>
        
      </div>
      <div
        className="relative"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '100vh', // يمكنك ضبط الارتفاع هنا حسب متطلباتك
        }}
      >
        <div className="absolute bg-[#efeceb] p-5 top-36  sm:top-24 md:top-32 w-[90%] sm:w-80 text-base sm:text-lg right-5 sm:right-10 md:right-32  shadow-lg">
          <p className="text-lg">
            احجزي موعدك الآن واحصلي على <span className="block">استشارة مجانية مع بهاء الدين</span>
            <span className="block">لتصميم فستان زفاف أحلامك</span>. العرض لفترة محدودة!
          </p>
          <Link
            to="/contact"
            className="bg-[#907457] px-6 sm:px-8 py-1 block w-max mt-5 text-white text-sm sm:text-lg rounded-lg cursor-pointer hover:bg-[#795b3b] transition-all duration-300"
          >
            أحجز الأن
          </Link>
        </div>
      </div>


    </div>
  );
}

export default Portfolio;
