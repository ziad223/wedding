import React from 'react';
import logo from '../images/logo.png';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FiMail } from 'react-icons/fi';

const Footer = () => {
    return (
        <div className='bg-[#252525] p-10 flex justify-around items-start flex-col lg:gap-0 gap-10 lg:flex-row px-4 md:px-8 lg:px-24'>
            <div className='text-gray-100 lg:w-1/3 w-full text-center'>
                <h2 className='lg:text-[48px] font-normal lg:w-[225px] lg:h-[28px] text-xl lg:text-right mr-10'>Logo</h2>
                <p className='my-10  lg:text-right text-lg font-normal lg:w-[379px] lg:h-[140px]'>
                    موقع "Bahaa Eldin" هو وجهتك المثالية لفساتين الأفراح، حيث نقدم مجموعة رائعة من الفساتين بأعلى معايير الجودة والأناقة. نساعدك في العثور على الفستان المثالي الذي يعكس أسلوبك في يومك الكبير. انضمي إلينا واستمتعي بتجربة تسوق مميزة!
                </p>
                <div>
                    <div className='flex gap-4 justify-center lg:justify-start'>
                        <FaInstagram className='text-lg' />
                        <FaFacebookF className='text-lg' />
                        <FaTwitter className='text-lg' />
                    </div>
                </div>
            </div>
            <div className='text-gray-100 lg:w-1/3 w-full text-center'>
                <h2 className='lg:text-3xl lg:w-[115px] mx-auto text-xl mb-5'>الرابط</h2>
                <ul className='text-lg flex flex-col gap-5'>
                    <li><Link className='text-lg hover:text-[#907457]' to='/'>الرئيسيه</Link></li>
                    <li><Link className='text-lg hover:text-[#907457]' to='/about'>عن بهاء الدين</Link></li>
                    <li><Link className='text-lg hover:text-[#907457]' to='/services'>خدماتنا</Link></li>
                    <li><Link className='text-lg hover:text-[#907457]' to='/portfolio'>معرض اعمالنا</Link></li>
                    <li><Link className='text-lg hover:text-[#907457]' to='/contact'>التواصل</Link></li>
                </ul>
            </div>
            <div className="text-gray-100 lg:w-1/3 w-full ">
                <h2 className='lg:text-2xl text-xl lg:text-right text-center lg:w-[306px] lg:h-[56px]'>احصلى على احدث المعلومات <span className='lg:block'>حول العروض</span></h2>
                <div className="flex items-center border lg:w-[306px] lg:h-[55px] border-gray-300 rounded-md p-2 mt-10">
                    <FiMail className="text-gray-500 text-lg mr-2" />
                    <input
                        type="email"
                        placeholder="ادخل البريد الالكتروني"
                        className="flex-1 p-2 text-lg  outline-none bg-transparent"
                    />
                </div>
                <button className='bg-[#434343] lg:w-[306px] lg:h-[55px] text-gray-100 text-lg hover:bg-[#686666] transition duration-300 rounded-lg p-5 w-full mt-10'>
                    ارسال
                </button>
            </div>
        </div>
    );
}

export default Footer;
