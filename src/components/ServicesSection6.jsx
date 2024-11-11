import React from 'react';
import ServicesAccording from './ServicesAccording';

const ServicesSection6 = () => {
  return (
    <div className='lg:p-10 p-5'>
      <div className="text-center">
      <h2 className='lg:text-3xl text-lg text-white font-bold'>قسم الأسئلة الشائعة حول الخدمات</h2>
      <p className='text-gray-400 mt-4'>
          اكتشفي إجابات على أسئلتك الأكثر شيوعًا حول خدماتنا، وعملية التصميم، وما يمكن توقعه عند اختيار 
          <span className='lg:block'>الفستان المثالي ليومك الخا.</span>
      </p>
      </div>
      <div>
        <ServicesAccording/>
      </div>
    </div>
  );
}

export default ServicesSection6;
