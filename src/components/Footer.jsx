import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FiMail } from 'react-icons/fi';

const Footer = () => {
    return (
        <footer className="bg-[#252525] text-gray-100 p-8">
            <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start gap-10 px-4 md:px-8 lg:px-24">

                {/* القسم الأول */}
                <div className="w-full lg:w-auto text-center lg:text-right flex flex-col gap-4">
                    <h2 className="text-xl lg:text-[48px] font-normal mb-5">Logo</h2>
                    <p className="text-lg lg:text-[18px] font-normal lg:w-[379px] lg:h-[140px] mb-8">
                        موقع "Bahaa Eldin" هو وجهتك المثالية لفساتين الأفراح، حيث نقدم مجموعة رائعة من الفساتين بأعلى معايير الجودة والأناقة. نساعدك في العثور على الفستان المثالي الذي يعكس أسلوبك في يومك الكبير. انضمي إلينا واستمتعي بتجربة تسوق مميزة!
                    </p>
                    <div className="flex gap-4 justify-center lg:justify-start">
                        <FaInstagram className="text-xl cursor-pointer hover:text-[#907457] transition-all" />
                        <FaFacebookF className="text-xl cursor-pointer hover:text-[#907457] transition-all" />
                        <FaTwitter className="text-xl cursor-pointer hover:text-[#907457] transition-all" />
                    </div>
                </div>

                {/* القسم الثاني */}
                <div className="w-full lg:w-auto text-center lg:text-right">
                    <h2 className="text-xl lg:text-[24px] font-bold mb-5">الرابط</h2>
                    <ul className="flex flex-col gap-5">
                        <li><Link className="hover:text-[#907457] lg:text-[18px] font-normal transition-all" to="/">الرئيسيه</Link></li>
                        <li><Link className="hover:text-[#907457] lg:text-[18px] font-normal transition-all" to="/about">عن بهاء الدين</Link></li>
                        <li><Link className="hover:text-[#907457] lg:text-[18px] font-normal transition-all" to="/services">خدماتنا</Link></li>
                        <li><Link className="hover:text-[#907457] lg:text-[18px] font-normal transition-all" to="/portfolio">معرض اعمالنا</Link></li>
                        <li><Link className="hover:text-[#907457] lg:text-[18px] font-normal transition-all" to="/contact">التواصل</Link></li>
                    </ul>
                </div>

                {/* القسم الثالث */}
                <div className="w-full lg:w-auto text-center lg:text-right flex flex-col gap-4">
                    <h2 className="text-xl lg:text-[24px] leading-[1.3] font-bold mb-5 lg:w-[306px] lg:h-[56px]">
                        احصلى على احدث المعلومات حول العروض
                    </h2>
                    <div className="flex items-center border border-gray-300 rounded-md p-2 mb-6 mx-auto lg:mx-0">
                        <FiMail className="text-gray-500 text-xl mr-2" />
                        <input
                            type="email"
                            placeholder="ادخل البريد الالكتروني"
                            className="flex-1 p-2 text-lg outline-none bg-transparent"
                        />
                    </div>
                    <button className="bg-[#434343] hover:bg-[#686666] transition duration-300 rounded-lg text-lg px-6 py-3 w-full lg:w-auto">
                        ارسال
                    </button>
                </div>

            </div>
            <hr className='mt-10 mb-2 text-gray-400 opacity-60 ' />
            <h2 className='text-center lg:text-xl text-lg'>Developed by High Level Technology</h2>
        </footer>
    );
};

export default Footer;
