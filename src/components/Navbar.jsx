import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActiveLink = (path) => location.pathname === path;

  return (
    <div className="bg-[#f6f2e9] fixed w-full z-4 top-0 px-7 lg:px-24 py-5 flex justify-between items-center">
      <div className="items-center gap-3 hidden lg:flex">
        <FaInstagram className="text-[#907457] text-lg cursor-pointer" />
        <FaFacebookF className="text-[#907457] text-lg cursor-pointer" />
        <FaTwitter className="text-[#907457] text-lg cursor-pointer" />
      </div>

      {/* الروابط الأساسية */}
      <div className="hidden lg:flex items-center gap-8">
        <Link
          to="/"
          className={`font-bold transition-all duration-300 ${isActiveLink('/') ? 'text-[#907457]' : 'hover:text-[#907457]'}`}
        >
          الرئيسية
        </Link>
        <Link
          to="/about"
          className={`font-bold transition-all duration-300 ${isActiveLink('/about') ? 'text-[#907457]' : 'hover:text-[#907457]'}`}
        >
          عن بهاء الدين
        </Link>
        <Link
          to="/services"
          className={`font-bold transition-all duration-300 ${isActiveLink('/services') ? 'text-[#907457]' : 'hover:text-[#907457]'}`}
        >
          خدماتنا
        </Link>
        <Link
          to="/portfolio"
          className={`font-bold transition-all duration-300 ${isActiveLink('/portfolio') ? 'text-[#907457]' : 'hover:text-[#907457]'}`}
        >
          معرض أعمالنا
        </Link>
        <Link
          to="/blog"
          className={`font-bold transition-all duration-300 ${isActiveLink('/blog') ? 'text-[#907457]' : 'hover:text-[#907457]'}`}
        >
          مقالات
        </Link>
        <Link
          to="/contact"
          className={`font-bold transition-all duration-300 ${isActiveLink('/contact') ? 'text-[#907457]' : 'hover:text-[#907457]'}`}
        >
          التواصل
        </Link>
      </div>

      {/* أيقونة القائمة للشاشات الصغيرة */}
      <div className="lg:hidden">
        <FiMenu className="text-[#907457] text-2xl cursor-pointer" onClick={toggleMenu} />
      </div>

      {/* الشعار */}
      <Link to='/' className="flex items-center gap-5">
        <img src={logo} className="w-[80px]" alt="logo" />
      </Link>

      {isMenuOpen && (
        <div className="lg:hidden absolute z-50 top-20 left-0 w-full bg-[#f6f2e9] p-5 shadow-md flex flex-col items-center gap-4">
          <Link
            to="/"
            className={`hover:text-[#907457] font-bold ${isActiveLink('/') ? 'text-[#907457]' : ''}`}
            onClick={toggleMenu}
          >
            الرئيسية
          </Link>
          <Link
            to="/about"
            className={`hover:text-[#907457]  font-bold ${isActiveLink('/about') ? 'text-[#907457]' : ''}`}
            onClick={toggleMenu}
          >
            عن بهاء الدين
          </Link>
          <Link
            to="/services"
            className={` hover:text-[#907457] font-bold ${isActiveLink('/services') ? 'text-[#907457]' : ''}`}
            onClick={toggleMenu}
          >
            خدماتنا
          </Link>
          <Link
            to="/portfolio"
            className={` hover:text-[#907457] font-bold ${isActiveLink('/portfolio') ? 'text-[#907457]' : ''}`}
            onClick={toggleMenu}
          >
            معرض أعمالنا
          </Link>
          <Link
            to="/blog"
            className={` hover:text-[#907457] font-bold ${isActiveLink('/blog') ? 'text-[#907457]' : ''}`}
            onClick={toggleMenu}
          >
            مقالات
          </Link>
          <Link
            to="/contact"
            className={` hover:text-[#907457] font-bold ${isActiveLink('/contact') ? 'text-[#907457]' : ''}`}
            onClick={toggleMenu}
          >
            التواصل
          </Link>
          <div className="flex items-center gap-3 mt-4">
            <FaInstagram className="text-[#907457] text-lg cursor-pointer" />
            <FaFacebookF className="text-[#907457] text-lg cursor-pointer" />
            <FaTwitter className="text-[#907457] text-lg cursor-pointer" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
