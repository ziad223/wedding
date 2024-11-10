import React from 'react';
import vector1 from '../images/home/vector-1.png';
import vector2 from '../images/home/vector-2.png';
import vector3 from '../images/home/vector-3.png';
import vector4 from '../images/home/vector-4.png';
import vector5 from '../images/home/vector-5.png';
import vector6 from '../images/home/vector-6.png';
import bg from '../images/about/about-img-7.png';
import { Link } from 'react-router-dom';


const AboutSection4 = () => {
    return (
        <div className='bg-[#252525] '>
            <h2 className='text-white lg:text-4xl text-center lg:p-10 p-5'>
                أكثر من مجرد أرقام، إنها قصص <span className='border rounded-full p-2'>نجاح</span> <span className='lg:block'>لا تُنسي</span>
            </h2>
            <div className='mt-10 lg:w-[90%] gap-10 lg:gap-0 lg:border p-10 mx-auto rounded-xl flex flex-wrap justify-between'>
                {/* كل عنصر من العناصر */}
                <div className='lg:w-1/3 w-full lg:p-4'>
                    <img src={vector1} alt="vector1" className='mx-auto lg:mx-0' />
                    <h2 className=' text-white lg:text-2xl text-xl text-center lg:text-right mt-2'>أكثر من 1000 عروس سعيدة</h2>
                    <p className='text-gray-300 text-lg text-center lg:text-right mt-1'>
                        بهاء الدين ساعد أكثر من 1000 عروس على <span className='lg:block'>ارتداء فستان أحلامهن ليومهن المميز.</span>
                    </p>
                </div>
                <div className='lg:w-1/3 w-full lg:p-4'>
                    <img src={vector2} alt="vector2" className='mx-auto lg:mx-0' />
                    <h2 className=' text-white lg:text-2xl text-xl text-center lg:text-right mt-2'>اختيار الشخصيات العامة</h2>
                    <p className='text-gray-300 text-lg text-center lg:text-right mt-1'>
                        تصاميم بهاء الدين كانت الخيار الأول للعديد <span className='lg:block'>من الشخصيات العامة والنجوم.</span>
                    </p>
                </div>
                <div className='lg:w-1/3 w-full lg:p-4'>
                    <img src={vector3} alt="vector3" className='mx-auto lg:mx-0 ' />
                    <h2 className=' text-white lg:text-2xl text-xl text-center lg:text-right mt-2'>تصاميم حصرية لكل موسم</h2>
                    <p className='text-gray-300 text-lg text-center lg:text-right mt-1'>
                        قدم لكل عروس فساتين فريدة لا مثيل <span className='lg:block'>لها بتصاميم مخصصة لكل موسم.</span>
                    </p>
                </div>
                <div className='lg:w-1/3 w-full lg:p-4 mt-10'>
                    <img src={vector4} alt="vector4" className='mx-auto lg:mx-0' />
                    <h2 className=' text-white lg:text-2xl text-xl text-center lg:text-right mt-2'>تكريمات وجوائز مرموقة</h2>
                    <p className='text-gray-300 text-lg text-center lg:text-right mt-1'>
                        حصلنا على تكريمات من أبرز معارض الأزياء <span className='lg:block'>المحلية والدولية.</span>
                    </p>
                </div>
                <div className='lg:w-1/3 w-full lg:p-4 mt-10'>
                    <img src={vector5} alt="vector5" className='mx-auto lg:mx-0' />
                    <h2 className=' text-white lg:text-2xl text-xl text-center lg:text-right mt-2'>أفضل تقييم من العملاء</h2>
                    <p className='text-gray-300 text-lg text-center lg:text-right mt-1'>
                        حصلنا على تقييمات عالية من العرائس <span className='lg:block'>بفضل الجودة والتفاني في تقديم الخدمة.</span>
                    </p>
                </div>
                <div className='lg:w-1/3 w-full lg:p-4 mt-10'>
                    <img src={vector6} alt="vector6" className='mx-auto lg:mx-0' />
                    <h2 className=' text-white lg:text-2xl text-xl text-center lg:text-right mt-2'>خبرة تفوق 10 سنوات</h2>
                    <p className='text-gray-300 text-lg text-center lg:text-right mt-1'>
                        أكثر من عقد من الزمن في تصميم <span className='lg:block'>الفساتين الفاخرة المخصصة.</span>
                    </p>
                </div>
            </div>
            <div
                className="mt-10 h-[700px]" // استخدم ارتفاع مناسب هنا، أو يمكنك استخدام h-full إذا كنت ترغب بملء المساحة
                style={{
                    backgroundImage: `url(${bg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className='flex justify-center flex-col gap-7 items-center h-screen text-center'>
                    <h2 className='text-white lg:text-3xl text-xl font-bold w-[90%] lg:w-[full]'>
                        احجزي موعدك الآن واحصلي على استشارة مجانية مع بهاء الدين 
                        <span className='md:block'>
                            لتصميم فستان زفاف أحلامك. العرض لفترة محدودة!
                            </span>
                        </h2>
                    <Link to='/contact' className='bg-[#907457] px-14 text-lg py-3 text-white rounded-lg d cursor-pointer hover:bg-[#795b3b] transition-all duration-300'>
                         أحجز الأن
                          </Link>
                </div>
            </div>
        </div>
    );
}

export default AboutSection4;
