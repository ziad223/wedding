import React from 'react';
import { FaFacebookF, FaInstagram, FaRegEnvelope, FaTwitter } from 'react-icons/fa';
import { HiOutlinePhone } from 'react-icons/hi';
import { IoLocationOutline } from 'react-icons/io5';

const Contact = () => {
  return (
    <div className=''>
      <div className='bg-[#f5f2f0] h-80'></div>
      <div className='lg:w-[950px] lg:px-12 lg:h-[663px] rounded-lg w-[90%] mx-auto shadow  p-7 relative -top-32 bg-white'>
        <h2 className='border-b-2 text-xl lg:text-[24px] font-normal lg:w-[159px] lg:h-[27px] mx-auto text-center w-max'>تواصلي معانا</h2>
        <div className="flex justify-between mt-20 flex-col lg:flex-row">
          {/* القسم الأول: نموذج التواصل */}
          <div className='w-full lg:w-1/'>
            <h2 className='text-xl'>تواصل معنا الآن</h2>
            <form className='mt-10'>
              <input type="text" placeholder='الأسم' className=' outline-none block border p-2 lg:w-3/4 w-full' />
              <input type="email" placeholder='البريد الألكتروني' className=' outline-none  my-5 block border p-2  lg:w-3/4 w-full' />
              <textarea rows={7} cols={40} placeholder='الرسالة' className=' outline-none  my-5 block border p-2  lg:w-3/4 w-full'></textarea>
            </form>
          </div>
          {/* القسم الثاني: الموقع */}
          <div className='w-full lg:w-1/2'>
            <div className='flex flex-col lg:items-end gap-6'>
              <div className='flex gap-3 items-center lg:flex-row flex-row-reverse justify-end '>
                <span>شارع الزفاف، القاهرة، مصر</span>
                <IoLocationOutline className='text-xl' />
              </div>
              <div className='flex gap-3 items-center lg:flex-row flex-row-reverse justify-end  '>
                <span> (+20) 123-456-7890</span>
                <HiOutlinePhone className='text-xl' />
              </div>
              <div className='flex gap-3 items-center lg:flex-row flex-row-reverse justify-end '>
                <span> (+20) 123-456-7890</span>
                <FaRegEnvelope className='text-xl' />
              </div>
              <div className='flex items-center gap-6 mt-5'>
                <FaInstagram className='text-xl' />
                <FaFacebookF className='text-xl' />
                <FaTwitter className='text-xl' />
              </div>
              <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.2729567505235!2d31.261422625612912!3d30.710725986698023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7c1e092ec4329%3A0x66fa1a7154f19f28!2z2KjZh9in2KEg2KfZhNiv2YrZhtiMINmF2K_ZitmG2Kkg2YXZitiqINi62YXYsSAo2KrYtNmF2YQg2K_Zgtin2K_ZiNizKdiMINmC2LPZhSDZhdmK2Kog2LrZhdix2Iwg2YXYrdin2YHYuNipINin2YTYr9mC2YfZhNmK2Kk!5e0!3m2!1sar!2seg!4v1731278243229!5m2!1sar!2seg"
                className='h-max lg:w-[366px] lg:h-[155px]'></iframe>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
