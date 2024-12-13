import React, { useEffect, useState } from 'react';
import aboutHero from '../images/about/about-hero.png';
import AboutSection1 from '../components/AboutSection1';
import AboutSection2 from '../components/AboutSection2';
import AboutSection3 from '../components/AboutSection3';
import AboutSection4 from '../components/AboutSection4';
import axios from 'axios';

const About = () => {
  const [videoUrl, setVideoUrl] = useState('');

  useEffect(() => {
    // Fetch the video URL from the API
    const fetchVideo = async () => {
      try {
        const response = await axios.get('https://highleveltecknology.com/bahaa/public/all_slides/5');
        const videoPath = response.data?.video[0]?.img;
        if (videoPath) {
          setVideoUrl(`https://highleveltecknology.com/bahaa/public/${videoPath}`);
        }
      } catch (error) {
        console.error('Error fetching the video URL:', error);
      }
    };

    fetchVideo();
  }, []);
  return (
    <div className=''>
         <div className=''>
        <img loading="lazy" src={aboutHero} className='lg:w-[1440px] h-[120vh] object-cover lg:h-[902px]' alt="about-hero" />
         </div>
      <div className='text-center bg-white p-5 lg:my-10 lg:p-10'>
        <h2 className='text-[#907457] lg:w-[894px] mx-auto lg:h-[64px] font-bold text-lg lg:text-[48px]'>رحلة الإبداع في تصميم فساتين الزفاف</h2>
        <p className='text-lg  mx-auto mt-3 leading-[1.2] lg:w-[894px] lg:h-[200px] lg:text-[28px] font-light'>
          في بهاء الدين، نعمل على تحقيق حلم كل عروس بارتداء فستان زفاف يعكس <span className='md:block'>شخصيتها بأفضل صورة. بخبرة تتجاوز عشر سنوات، نقدّم تصاميم فريدة تجمع بين</span> العصرية والتقاليد.
        </p>
         </div>
      <div className="flex justify-center">
        {videoUrl ? (
          <video
            width="100%"
            height="500"
            controls
            src={videoUrl}
          >
          </video>
        ) : (
          <p>Loading video...</p>
        )}
      </div>
      <AboutSection1 />
      <AboutSection2 />
      <AboutSection3 />
      <AboutSection4 />
    </div>
  );
}

export default About;
