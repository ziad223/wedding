import React from 'react';
import img1 from '../images/blog/blog-3.png';
import img2 from '../images/blog/blog-4.png';
import img3 from '../images/blog/blog-5.png';
import { Link } from 'react-router-dom';

const BlogContent = () => {
  return (
    <div>
      <h2 className='font-bold  lg:text-[48px] text-xl mb-10 lg:w-[755px] lg:h-[48px]'>ابقِ على اطلاع بأحدث صيحات الموضة</h2>
      <div className='flex flex-col lg:flex-row justify-center gap-4'>
        <div className="w-full sm:w-1/2 lg:w-1/3 bg-[#f6f2e9] border p-1">
          <img src={img1} alt="img1" className="w-full object-cover h-64 lg:w-[369px] lg:h-[413px]" />
          <div className="p-5">
            <h2 className="lg:text-[24px] font-normal text-lg">رحلة تطوير فساتين الأفراح</h2>
            <p className="mt-3 text-lg font-light lg:text-[16px] lg:w-[353px] lg:h-[88px]">
              احصلي على نظرة حصرية من خلف الكواليس حول كيفية تطوير فساتين الأفراح لدينا. تعرفي على التزامنا بالجودة والابتكار، والعملية الدقيقة التي تضمن أن كل فستان يعكس أعلى معايير الأناقة والفخامة.
            </p>
            <Link
              to="/about"
              className="bg-[#907457] lg:w-[120px] lg:h-[34px] px-8 text-lg py-1 mt-10 text-white rounded-lg cursor-pointer hover:bg-[#795b3b] transition-all block duration-300 flex justify-center items-center"
            >
              المزيد
            </Link>
          </div>
        </div>


        <div className="w-full sm:w-1/2 lg:w-1/3 bg-[#f6f2e9] border p-1">
          <img src={img2} alt="img1" className="w-full object-cover h-64 lg:w-[369px] lg:h-[413px]" />
          <div className="p-5">
            <h2 className="lg:text-[24px] font-normal text-lg lg:w-[353px] lg:h-[24px]">مقابلة حصرية مع المصمم</h2>
            <p className="mt-3 text-lg font-light lg:text-[16px] lg:w-[353px] lg:h-[88px]">
استمتعي بمقابلة حصرية مع المصمم، حيث ستكتشفين أسرار اختيار الفستان المثالي، وتوصياته لأفضل القصات، والنصائح التي ستساعدك في التألق في يومك الكبير.
            </p>
            <Link
              to="/about"
              className="bg-[#907457] lg:w-[120px] lg:h-[34px] px-8 text-lg py-1 mt-10 text-white rounded-lg cursor-pointer hover:bg-[#795b3b] transition-all block duration-300 flex justify-center items-center"
            >
              المزيد
            </Link>
          </div>
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/3 bg-[#f6f2e9] border p-1">
          <img src={img3} alt="img1" className="w-full object-cover h-64 lg:w-[369px] lg:h-[413px]" />
          <div className="p-5">
            <h2 className="lg:text-[24px] font-normal text-lg lg:w-[353px] lg:h-[24px]"> اختيار الفستان المثالي    </h2>
            <p className="mt-3 text-lg font-light lg:text-[16px] lg:w-[353px] lg:h-[88px]">
شاهدي التحولات المذهلة التي شهدها عملاؤنا. اقري قصصاً حقيقية عن رحلات الجمال والأناقة، مع صور قبل وبعد، واستلهمي من قوة العناية الذاتية والتفاصيل التي تجعل كل فستان فريداً من نوعه.            </p>
            <Link
              to="/about"
              className="bg-[#907457] lg:w-[120px] lg:h-[34px] px-8 text-lg py-1 mt-10 text-white rounded-lg cursor-pointer hover:bg-[#795b3b] transition-all block duration-300 flex justify-center items-center"
            >
              المزيد
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogContent;
