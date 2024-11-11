import React from 'react';
import img1 from '../images/blog/blog-3.png';
import img2 from '../images/blog/blog-4.png';
import img3 from '../images/blog/blog-5.png';
import { Link } from 'react-router-dom';

const BlogContent = () => {
  return (
    <div>
      <h2 className='font-semibold lg:text-3xl text-xl mb-10'>ابقِ على اطلاع بأحدث صيحات الموضة</h2>
      <div className='flex flex-col lg:flex-row justify-center gap-4'>
        <div className="w-full sm:w-1/2 lg:w-1/3 bg-[#f6f2e9] border p-1">
          <img src={img1} alt="img1" className="w-full object-cover h-64" />
          <div className='p-5'>
            <h2 className='lg:text-xl text-lg'>رحلة تطوير فساتين الأفراح</h2>
            <p className='mt-3 text-lg'>
              احصلي على نظرة حصرية من خلف الكواليس حول كيفية تطوير فساتين الأفراح لدينا. تعرفي على التزامنا بالجودة والابتكار، والعملية الدقيقة التي تضمن أن كل فستان يعكس أعلى معايير الأناقة والفخامة.
            </p>
            <Link to='/about' className='bg-[#907457] px-8 text-lg py-1 mt-5 text-white rounded-lg cursor-pointer hover:bg-[#795b3b] transition-all block w-max duration-300'>
              المزيد
            </Link>
          </div>
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/3 bg-[#f6f2e9] border p-1">
          <img src={img2} alt="img2" className="w-full object-cover h-64" />
          <div className='p-5'>
            <h2 className='lg:text-xl text-lg'>مقابلة حصرية مع المصمم</h2>
            <p className='mt-3 text-lg'>
              استمتعي بمقابلة حصرية مع المصمم، حيث ستكتشفين أسرار اختيار الفستان المثالي، وتوصياته لأفضل القصات، والنصائح التي ستساعدك في التألق في يومك الكبير.
            </p>
            <Link to='/about' className='bg-[#907457] px-8 text-lg py-1 mt-5 text-white rounded-lg cursor-pointer hover:bg-[#795b3b] transition-all block w-max duration-300'>
              المزيد
            </Link>
          </div>
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/3 bg-[#f6f2e9] border p-1">
          <img src={img3} alt="img3" className="w-full object-cover h-64" />
          <div className='p-5'>
            <h2 className='lg:text-xl text-lg'>اختيار الفستان المثالي</h2>
            <p className='mt-3 text-lg'>
              شاهدي التحولات المذهلة التي شهدها عملاؤنا. اقري قصصاً حقيقية عن رحلات الجمال والأناقة، مع صور قبل وبعد، واستلهمي من قوة العناية الذاتية والتفاصيل التي تجعل كل فستان فريداً من نوعه.
            </p>
            <Link to='/about' className='bg-[#907457] px-8 text-lg py-1 mt-5 text-white rounded-lg cursor-pointer hover:bg-[#795b3b] transition-all block w-max duration-300'>
              المزيد
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogContent;
