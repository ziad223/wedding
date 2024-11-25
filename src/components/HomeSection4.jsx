import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const HomeSection4 = () => {
  const [images, setImages] = useState([]); // لتخزين الصور القادمة من API
  const [currentSlide, setCurrentSlide] = useState(0); // لتحديد الشريحة النشطة
  const baseUrl = "https://highleveltecknology.com/bahaa/public/";

  // إعدادات السلايدر
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true, // يجعل العنصر الأوسط دائمًا في المنتصف
    centerPadding: "0", // يزيل المسافات حول العنصر الأوسط
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex), // تحديث الشريحة النشطة
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  // جلب الصور من API
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          "https://highleveltecknology.com/bahaa/public/all_slides/2"
        );
        const data = await response.json();
        if (data && Array.isArray(data.Gallery)) {
          // استخراج الصور من مفتاح Gallery
          setImages(data.Gallery.map((item) => `${baseUrl}${item.img}`)); // إضافة الرابط الأساسي لكل صورة
        }
      } catch (error) {
        console.error("خطأ في جلب الصور:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="bg-[#f6f2e9] px-4 md:px-8 lg:px-24 py-10">
      <h2 className="lg:text-4xl text-xl">معرض الأعمال</h2>
      {images.length > 0 ? ( // عرض السلايدر فقط إذا كانت الصور متوفرة
        <Slider {...settings} className="mt-20">
          {images.map((image, index) => (
            <div key={index} className="relative lg:h-[630px] h-[413px]">
              <div className="absolute bottom-0 w-full flex justify-center">
                <img
                  src={image}
                  alt={`image-${index}`}
                  className={`transition-all duration-200 object-contain ${currentSlide === index
                    ? "lg:h-[649px] lg:w-[496px] object-contain" // الحفاظ على المحاذاة بدون تغيير الاتجاه
                    : "lg:h-[413px] lg:w-[332px] object-contain"
                    }`}
                />
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <p className="text-center text-gray-500">جاري تحميل الصور...</p> // رسالة أثناء تحميل الصور
      )}

      <div className="mx-auto block text-center">
        <Link
          to="/about"
          className="bg-[#907457] py-3 block px-20 text-xl text-white rounded-lg mt-10 mx-auto hover:bg-[#7c6246] transition-all duration-300 lg:text-right w-max text-center"
        >
          المزيد
        </Link>
      </div>
    </div>
  );
};

export default HomeSection4;
