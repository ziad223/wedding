import React, { useEffect, useState } from 'react';
import axios from 'axios';
import layer from '../images/layers/homeLayer-3.png';
import { Link } from 'react-router-dom';

const HomeSection5 = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // جلب الصور من الـ API
    axios
      .get('https://highleveltecknology.com/bahaa/public/all_slides/3')
      .then((response) => {
        const fetchedImages = response.data['Our Group'] || [];
        setImages(fetchedImages.slice(0, 5)); // نأخذ أول 5 صور فقط
      })
      .catch((error) => {
        console.error('Error fetching images:', error);
      });
  }, []);

  // تقسيم الصور حسب التنسيق المطلوب
  const column1Images = images.slice(0, 2); // الصور الخاصة بالعمود الأول
  const column2TopImages = images.slice(2, 4); // الصور العلوية في العمود الثاني
  const column2BottomImage = images[4]; // الصورة السفلية في العمود الثاني

  return (
    <div className="px-4 md:px-8 lg:px-24 my-20 relative">
      <h2 className="lg:text-4xl text-xl text-center lg:text-right">مجموعتنا</h2>
      <div className="lg:absolute hidden lg:block lg:top-[-150px] lg:left-[-20px] -z-20">
        <img src={layer} className="lg:w-[811px] lg:h-[537px]" alt="layer" />
      </div>
      <div className="flex flex-col lg:flex-row justify-center gap-5 mt-16">
        {/* العمود الأول */}
        <div className="lg:w-1/3 w-full flex flex-col gap-5">
          {column1Images.map((image, index) => (
            <img
              key={image.id}
              src={`https://highleveltecknology.com/bahaa/public/${image.img}`}
              alt={`home-column1-${index}`}
              className={`w-full h-full lg:w-[384px] ${index === 0 ? 'lg:h-[328px]' : 'lg:h-[576px]'
                } object-cover`}
            />
          ))}
        </div>

        {/* العمود الثاني */}
        <div className="lg:w-2/3 w-full flex flex-col gap-5">
          {/* الصور العلوية */}
          <div className="flex gap-2">
            {column2TopImages.map((image, index) => (
              <img
                key={image.id}
                src={`https://highleveltecknology.com/bahaa/public/${image.img}`}
                alt={`home-column2-top-${index}`}
                className="w-1/2 lg:w-[375px] h-auto lg:h-[512px] object-cover"
              />
            ))}
          </div>
          {/* الصورة السفلية */}
          {column2BottomImage && (
            <img
              src={`https://highleveltecknology.com/bahaa/public/${column2BottomImage.img}`}
              alt="home-column2-bottom"
              className="w-full lg:w-[792px] h-auto lg:h-[392px] object-cover"
            />
          )}
        </div>
      </div>
      <div className="mx-auto block text-center">
        <Link
          to="/contact"
          className="bg-[#907457] py-3 z-20 block px-20 text-xl text-white rounded-lg mt-10 mx-auto hover:bg-[#7c6246] transition-all duration-300 lg:text-right w-max text-center"
        >
          تواصل معنا
        </Link>
      </div>
    </div>
  );
};

export default HomeSection5;
