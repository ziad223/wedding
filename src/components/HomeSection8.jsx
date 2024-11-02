import React from 'react';
import img1 from '../images/home-11.png';

const HomeSection8 = () => {
  return (
    <div className='px-4 md:px-8 lg:px-24 my-20'>
          <h2 className='lg:text-4xl text-xl text-center lg:text-right'>
              لماذا تختارين فساتين بهاء <span className='lg:block'>الدين</span>
         </h2>
       <div className="mt-14 flex flex-col lg:flex-row text-center lg:text-right gap-10 justify-between">
              <div>
                  <h2 className='lg:text-3xl text-xl font-bold'>تصاميم فريدة</h2>
                  <p className='lg:text-xl text-lg mt-4'>
                      <span className='lg:block'> كل فستان يتم تصميمه ليناسب شخصيتك </span>ويعكس رؤيتك الخاصة.
                  </p>
              </div>
              <img src={img1} alt="wedding" />

       </div>
    </div>
  );
}

export default HomeSection8;
