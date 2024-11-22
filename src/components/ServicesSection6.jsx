import React from 'react';
import ServicesAccording from './ServicesAccording';

const ServicesSection6 = () => {
  return (
    <div className='lg:p-10 p-5'>
      <div className="text-center mt-20">
        <h2 className='lg:text-[48px] lg:w-[941px] lg:h-[48px] mx-auto text-lg text-white font-bold'>قسم الأسئلة الشائعة حول الخدمات</h2>
        <p className='text-gray-400 mt-4 lg:text-[24px] mx-auto font-normal lg:w-[943px] lg:h-[78px]'>
          اكتشفي إجابات على أسئلتك الأكثر شيوعًا حول خدماتنا، وعملية التصميم، وما يمكن توقعه عند اختيار 
         الفستان المثالي ليومك الخاص.
      </p>
      </div>
      <div className='mt-14'>
        <ServicesAccording/>
      </div>
    </div>
  );
}

export default ServicesSection6;
