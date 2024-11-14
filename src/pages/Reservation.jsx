import React from 'react';
import img from '../images/reservation.png';
const Reservation = () => {
  return (
    <div className='bg-[#2f2c2c]'>
      <div className='py-20 lg:w-[70%] mx-auto px-4'>
        <div className='border border-gray-400 p-5 flex flex-col lg:flex-row justify-center gap-10 items-center'>
          <div className="lg:w-1/2 w-full">
            <h2 className='text-white lg:text-3xl text-xl font-bold text-center lg:text-right'>احجزي موعدك الآن</h2>
            <p className='text-gray-300 my-5 text-sm text-center lg:text-right'>
              نحن هنا لمساعدتك في العثور على فستان الأحلام! احجزي موعد لزيارتك في الأتيليه لتجربة أفضل الفساتين والحصول على استشارة مخصصة تناسب ذوقك وأسلوبك.
            </p>
            <div className='flex flex-col lg:flex-row gap-3 mt-3'>
              <input type="text" placeholder='الأسم الأول' className='bg-[#393737] rounded-sm p-3 text-white outline-none w-full' />
              <input type="text" placeholder='الأسم الثاني' className='bg-[#393737] rounded-sm p-3 text-white outline-none w-full lg:mt-0 mt-3' />
            </div>
            <input type="text" placeholder='رقم الهاتف' className='w-full mt-3 rounded-sm bg-[#393737] p-3 outline-none' />
            <input type="text" placeholder='العنوان' className='w-full mt-3 rounded-sm bg-[#393737] p-3 outline-none' />
            <input type="text" placeholder='موعد الزيارة' className='w-full mt-3 rounded-sm bg-[#393737] p-3 outline-none' />
            <input type="text" placeholder='ملاحظة' className='w-full mt-3 rounded-sm bg-[#393737] p-3 outline-none' />
            <button className='bg-[#907457] px-8 text-lg py-2 mt-5 text-white rounded-sm cursor-pointer hover:bg-[#795b3b] transition-all block w-full duration-300'>
              ارسال
            </button>
          </div>
          <div className="lg:w-1/2 w-full mt-5 lg:mt-0">
            <img src={img} alt="reservation" className="w-full h-full object-cover rounded-sm" />
          </div>
        </div>
      </div>
    </div>

  );
}

export default Reservation;
