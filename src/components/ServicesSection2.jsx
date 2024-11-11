import img1 from '../images/services/service-img-2.png';
import { Link } from 'react-router-dom';


const ServicesSection2 = () => {
  return (
      <div className='flex flex-col lg:flex-row justify-center items-end'>
          <div className='bg-[#f6f2e9] lg:p-10 p-5 lg:-mb-10 mt-5 lg:mt-5 lg:-ml-20 -z-20 '>
              <div className='lg:ml-14'>
                  <h2 className='font-bold lg:text-2xl text-xl'>تصميم فساتين حسب الطلب</h2>
                  <p className='mt-5 text-lg mb-7'>
                      لضمان تناسق مثالي ومظهر ساحر، نقدم خدمة تعديل الفساتين الجاهزة لتلائم جسمك وتفاصيلك بشكل لا مثيل له.
                  </p>
                  <Link to='/contact' className='bg-[#907457] px-8 text-md py-2 text-white rounded-lg d cursor-pointer hover:bg-[#795b3b] transition-all duration-300'>
                      تواصلي معي
                  </Link>
              </div>
          </div>
          <img src={img1} alt="service-img" />
      </div>
  );
}

export default ServicesSection2;
