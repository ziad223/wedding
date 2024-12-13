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
import { style } from '@mui/system';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';
import Reservation from '../components/Reservation';
import Modal from '@mui/material/Modal';

const Portfolio = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
        <div>
        <img loading="lazy" src={porfolioHero} alt="portfolio-HERO" className='lg:w-[1440px] lg:h-[827px] object-contain' />
        </div> 
      <div className='text-center bg-white p-5 lg:p-10 lg:my-10'>
        <h2 className='text-[#907457] font-bold lg:text-[40px] lg:w-[931px] lg:h-[50px] mx-auto'>استمتعِ بتجربة فريدة مع تصاميم فساتيننا</h2>
        <p className='text-lg lg:text-[28px] leading-[1.3]  mx-auto mt-5 lg:w-[931px] lg:h-[80px]'>
        نحن في بهاء الدين نقدم مجموعة استثنائية من فساتين الزفاف المصممة خصيصًا 
         لتناسب كل عروس. يتميز كل تصميم بلمسة فريدة تعكس الأناقة والجمال، مما يجعل
          يومك الخاص مميزا كما حلمت به.
        </p>
      </div>

        <div className='my-10 px-4 md:px-16 lg:px-24 flex lg:flex-row  flex-col gap-3'>
          <div className='mr-2 lg:mr-0'>
          <img loading="lazy" src={porfolio1} alt="porfolio1" className='lg:w-[271px] mx-auto lg:h-[422px]' />
          </div>
          <div className='mr-2 lg:mr-0'>
          <img loading="lazy" src={porfolio2} alt="porfolio2" className='lg:w-[271px] mx-auto  lg:h-[422px]' />
           </div>
           <div className='mr-2 lg:mr-0'>
          <img loading="lazy" src={porfolio3} alt="porfolio3" className='lg:w-[271px] mx-auto  lg:h-[422px]' />
           </div>
          <div className='relative'>
          <img loading="lazy" src={porfolio4} alt="Fashion" className='w-full h-[500px] mx-auto  object-cover lg:w-[315px] lg:h-[566px] ' />

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
            <img loading="lazy" src={porfolio5} alt="porfolio5"  className='lg:w-[271px] mx-auto  lg:h-[422px]'  />
          </div>
          <div className='mr-2 lg:mr-0'>
            <img loading="lazy" src={porfolio6} alt="porfolio6"  className='lg:w-[271px] mx-auto  lg:h-[422px]'  />
          </div>
          <div className='mr-2 lg:mr-0'>
            <img loading="lazy" src={porfolio7} alt="porfolio7"  className='lg:w-[271px] mx-auto  lg:h-[422px]'  />
          </div>
          <div className='relative'>
          <img loading="lazy" src={porfolio8} alt="Fashion" className='w-full h-[500px] mx-auto  object-cover lg:w-[315px] lg:h-[566px] ' />

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
        <div className="absolute bg-[#efeceb] lg:w-[429px] p-5 top-36  sm:top-24 md:top-32 w-[90%] sm:w-80 text-base sm:text-lg right-5 sm:right-10 md:right-32  shadow-lg">
          <p className="text-lg lg:w-[353px]">
            احجزي موعدك الآن واحصلي على استشارة مجانية مع بهاء الدين
           لتصميم فستان زفاف أحلامك. العرض لفترة محدودة!
          </p>
          <button
            onClick={handleOpen}
            className="bg-[#907457] lg:w-[147px] lg:h-[48px] sm:px-8 px-5 lg:px-5 py-2 lg:py-2 w-max mt-5 text-white text-sm sm:text-lg rounded-lg cursor-pointer hover:bg-[#795b3b] transition-all duration-300 flex justify-center items-center"
          >
            أحجز الأن
          </button>
          <div>

            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={open}
              onClose={handleClose}
              closeAfterTransition
            >
              <Fade in={open}>
                <Box sx={style}>
                  <Reservation handleClose={handleClose} />
                </Box>
              </Fade>
            </Modal>
          </div>
        </div>
      </div>


    </div>
  );
}

export default Portfolio;
