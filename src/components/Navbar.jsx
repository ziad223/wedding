import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/navbar-logo.png';
import { FaThreads } from 'react-icons/fa6';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActiveLink = (path) => location.pathname === path;

  return (
    <div className="bg-[#f6f2e9] shadow-lg fixed w-full z-50 top-0 px-7 lg:px-24 py-2 flex justify-between items-center">
      <div className="items-center gap-3 hidden lg:flex">
        <a target='_blank' href="https://www.instagram.com/bahaaeldin.couture/">
          <FaInstagram className="text-[#907457] text-lg cursor-pointer" />
       </a>
        <a target='_blank' href="https://www.facebook.com/bahaaeldin.couture">
          <FaFacebookF className="text-[#907457] text-lg cursor-pointer" />
        </a>
        <a target='_blank' href="https://www.youtube.com/@BahaaEldin-couture">
        <FaYoutube className="text-[#907457] text-lg cursor-pointer" />
        </a>
        <a target='_blank' href="https://www.tiktok.com/@bahaaeldin_couture">
          <FaTiktok className="text-[#907457] text-lg cursor-pointer" />
        </a>
        <a target='_blank' href="https://www.threads.net/@bahaaeldin.couture">
          <FaThreads className="text-[#907457] text-lg cursor-pointer" />
        </a>
      </div>

      {/* الروابط الأساسية */}
      <div className="hidden lg:flex items-center gap-8">
        <Link
          to="/"
          className={`font-normal lg:text-[20px] transition-all duration-300 ${isActiveLink('/') ? 'text-[#907457]' : 'hover:text-[#907457]'}`}
        >
          الرئيسية
        </Link>
        <Link
          to="/about"
          className={`font-normal lg:text-[20px] transition-all duration-300 ${isActiveLink('/about') ? 'text-[#907457]' : 'hover:text-[#907457]'}`}
        >
          عن بهاء الدين
        </Link>
        <Link
          to="/services"
          className={`font-normal lg:text-[20px] transition-all duration-300 ${isActiveLink('/services') ? 'text-[#907457]' : 'hover:text-[#907457]'}`}
        >
          خدماتنا
        </Link>
        <Link
          to="/portfolio"
          className={`font-normal lg:text-[20px] transition-all duration-300 ${isActiveLink('/portfolio') ? 'text-[#907457]' : 'hover:text-[#907457]'}`}
        >
          معرض أعمالنا
        </Link>
        <Link
          to="/blog"
          className={`font-normal lg:text-[20px] transition-all duration-300 ${isActiveLink('/blog') ? 'text-[#907457]' : 'hover:text-[#907457]'}`}
        >
          مقالات
        </Link>
        <Link
          to="/contact"
          className={`font-normal lg:text-[20px] transition-all duration-300 ${isActiveLink('/contact') ? 'text-[#907457]' : 'hover:text-[#907457]'}`}
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
        <img loading="lazy" src={logo} className="w-[80px] lg:w-[120px] lg:h-[100.24px]" alt="logo" />
      </Link>

      {isMenuOpen && (
        <div className="lg:hidden absolute z-50 top-20 left-0 w-full bg-[#f6f2e9] p-5 shadow-md flex flex-col items-center gap-4">
          <Link
            to="/"
            className={`hover:text-[#907457] font-normal lg:text-[20px] ${isActiveLink('/') ? 'text-[#907457]' : ''}`}
            onClick={toggleMenu}
          >
            الرئيسية
          </Link>
          <Link
            to="/about"
            className={`hover:text-[#907457]  font-normal lg:text-[20px] ${isActiveLink('/about') ? 'text-[#907457]' : ''}`}
            onClick={toggleMenu}
          >
            عن بهاء الدين
          </Link>
          <Link
            to="/services"
            className={` hover:text-[#907457] font-normal lg:text-[20px] ${isActiveLink('/services') ? 'text-[#907457]' : ''}`}
            onClick={toggleMenu}
          >
            خدماتنا
          </Link>
          <Link
            to="/portfolio"
            className={` hover:text-[#907457] font-normal lg:text-[20px] ${isActiveLink('/portfolio') ? 'text-[#907457]' : ''}`}
            onClick={toggleMenu}
          >
            معرض أعمالنا
          </Link>
          <Link
            to="/blog"
            className={` hover:text-[#907457] font-normal lg:text-[20px] ${isActiveLink('/blog') ? 'text-[#907457]' : ''}`}
            onClick={toggleMenu}
          >
            مقالات
          </Link>
          <Link
            to="/contact"
            className={` hover:text-[#907457] font-normal ${isActiveLink('/contact') ? 'text-[#907457]' : ''}`}
            onClick={toggleMenu}
          >
            التواصل
          </Link>
          <div className="flex items-center gap-3 mt-4">
            <a target='_blank' href="https://www.instagram.com/bahaaeldin.couture/">
              <FaInstagram className="text-[#907457] text-lg cursor-pointer" />
            </a>
            <a target='_blank' href="https://www.facebook.com/bahaaeldin.couture">
              <FaFacebookF className="text-[#907457] text-lg cursor-pointer" />
            </a>
            <a target='_blank' href="https://www.youtube.com/@BahaaEldin-couture">
              <FaYoutube className="text-[#907457] text-lg cursor-pointer" />
            </a>
            <a target='_blank' href="https://www.tiktok.com/@bahaaeldin_couture">
              <FaTiktok className="text-[#907457] text-lg cursor-pointer" />
            </a>
            <a target='_blank' href="https://www.threads.net/@bahaaeldin.couture">
              <FaThreads className="text-[#907457] text-lg cursor-pointer" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
