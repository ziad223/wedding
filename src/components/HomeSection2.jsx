import React from 'react';
import vector1 from '../images/home/vector-1.png';
import vector2 from '../images/home/vector-2.png';
import vector3 from '../images/home/vector-3.png';
import vector4 from '../images/home/vector-4.png';
import vector5 from '../images/home/vector-5.png';
import vector6 from '../images/home/vector-6.png';

const HomeSection2 = () => {
  return (
      <div className='bg-[#252525] lg:p-10 p-5'>
          <h2 className='text-white lg:text-4xl lg:w-[760px] lg:h-[109px] mx-auto text-center'>
              أكثر من مجرد أرقام، إنها قصص <span className='border rounded-full p-2'>نجاح</span> <span className='lg:block'>لا تُنسي</span>
          </h2>
          <div className='mt-10 lg:w-[1128px] lg:h-[532px] lg:mt-20 gap-10 lg:gap-0 border p-10 mx-auto rounded-xl flex flex-wrap justify-between'>
              {/* كل عنصر من العناصر */}
              <div className='lg:w-1/3 w-full lg:p-4'>
                  <img src={vector1} alt="vector1" className='mx-auto lg:mx-0 lg:w-[51px] lg:h-[50.91px]' />
                  <h2 className=' text-white lg:w-[331px] lg:h-[27px] lg:text-2xl text-xl lg:mt-5 text-center lg:text-right mt-3 '>أكثر من 1000 عروس سعيدة</h2>
                  <p className='text-gray-300 lg:w-[331px] lg:h-[44px] lg:mt-3 text-lg text-center lg:text-right mt-1'>
                      بهاء الدين ساعد أكثر من 1000 عروس على <span className='lg:block'>ارتداء فستان أحلامهن ليومهن المميز.</span>
                  </p>
              </div>
              <div className='lg:w-1/3 w-full lg:p-4'>
                  <img src={vector2} alt="vector2" className='mx-auto lg:mx-0 lg:w-[57.32px] lg:h-[50.37px]' />
                  <h2 className=' text-white lg:text-2xl lg:w-[331px] lg:h-[27px]  text-xl lg:mt-5 text-center lg:text-right mt-2'>اختيار الشخصيات العامة</h2>
                  <p className='text-gray-300 text-lg lg:w-[331px] lg:h-[44px] lg:mt-3  text-center lg:text-right mt-1'>
                      تصاميم بهاء الدين كانت الخيار الأول للعديد <span className='lg:block'>من الشخصيات العامة والنجوم.</span>
                  </p>
              </div>
              <div className='lg:w-1/3 w-full lg:p-4'>
                  <img src={vector3} alt="vector3" className='mx-auto lg:mx-0 lg:w-[42.37px] lg:h-[56.47px] ' />
                  <h2 className=' text-white lg:text-2xl text-xl lg:w-[331px] lg:mt-3 lg:h-[27px] text-center lg:text-right mt-1'>تصاميم حصرية لكل موسم</h2>
                  <p className='text-gray-300 text-lg lg:w-[331px] lg:h-[44px] lg:mt-3.5  text-center lg:text-right mt-1'>
                      قدم لكل عروس فساتين فريدة لا مثيل <span className='lg:block'>لها بتصاميم مخصصة لكل موسم.</span>
                  </p>
              </div>
              <div className='lg:w-1/3 w-full lg:p-4 mt-10'>
                  <img src={vector4} alt="vector4" className='mx-auto lg:mx-0 lg:w-[48.8px] lg:h-[47.28px]' />
                  <h2 className=' text-white lg:text-2xl lg:w-[331px] lg:h-[27px] lg:mt-5 text-xl text-center lg:text-right mt-2'>تكريمات وجوائز مرموقة</h2>
                  <p className='text-gray-300 text-lg lg:w-[331px] lg:h-[44px] lg:mt-3   text-center lg:text-right mt-1'>
                      حصلنا على تكريمات من أبرز معارض الأزياء <span className='lg:block'>المحلية والدولية.</span>
                  </p>
              </div>
              <div className='lg:w-1/3 w-full lg:p-4 mt-10'>
                  <img src={vector5} alt="vector5" className='mx-auto lg:mx-0 lg:w-[56px] lg:h-[56px]' />
                  <h2 className=' text-white lg:text-2xl lg:w-[331px] lg:h-[27px] lg:mt-3 text-xl text-center lg:text-right mt-1'>أفضل تقييم من العملاء</h2>
                  <p className='text-gray-300 text-lg lg:w-[331px] lg:h-[44px] lg:mt-3 text-center lg:text-right '>
                      حصلنا على تقييمات عالية من العرائس <span className='lg:block'>بفضل الجودة والتفاني في تقديم الخدمة.</span>
                  </p>
              </div>
              <div className='lg:w-1/3 w-full lg:p-4 mt-10'>
                  <img src={vector6} alt="vector6" className='mx-auto lg:mx-0 lg:w-[56px] lg:h-[56px]' />
                  <h2 className=' text-white lg:text-2xl lg:w-[331px] lg:h-[27px]  text-xl text-center lg:text-right mt-2'>خبرة تفوق 10 سنوات</h2>
                  <p className='text-gray-300 text-lg lg:w-[331px] lg:h-[44px] lg:mt-3   text-center lg:text-right mt-1'>
                      أكثر من عقد من الزمن في تصميم <span className='lg:block'>الفساتين الفاخرة المخصصة.</span>
                  </p>
              </div>
          </div>
      </div>
  );
}

export default HomeSection2;
