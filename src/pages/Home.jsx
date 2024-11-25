import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HomeSection1 from '../components/HomeSection1';
import HomeSection2 from '../components/HomeSection2';
import HomeSection3 from '../components/HomeSection3';
import HomeSection4 from '../components/HomeSection4';
import HomeSection5 from '../components/HomeSection5';
import HomeSection6 from '../components/HomeSection6';
import HomeSection7 from '../components/HomeSection7';
import HomeSection8 from '../components/HomeSection8';
import HomeSection9 from '../components/HomeSection9';
import HomeSection10 from '../components/HomeSection10';
import HomeSection11 from '../components/HomeSection11';

const Home = () => {
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    // Fetch the background image from the API
    const fetchBackgroundImage = async () => {
      try {
        const response = await axios.get('https://highleveltecknology.com/bahaa/public/all_slides/1');
        const imagePath = response.data?.slide[0]?.img;
        if (imagePath) {
          setBackgroundImage(`https://highleveltecknology.com/bahaa/public/${imagePath}`);
        }
      } catch (error) {
        console.error('Error fetching the background image:', error);
      }
    };

    fetchBackgroundImage();
  }, []);

  return (
    <div>
      <div
        className='bg-[#979797] h-screen bg-cover bg-center'
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
      </div>
      {/* Section 1 */}
      <HomeSection1 />

      {/* Section 2 */}
      <HomeSection2 />

      {/* Section 3 */}
      <HomeSection3 />

      {/* Section 4 */}
      <HomeSection4 />

      {/* Section 5 */}
      <HomeSection5 />

      {/* Section 6 */}
      <HomeSection6 />

      {/* Section 7 */}
      <HomeSection7 />

      {/* Section 8 */}
      <HomeSection8 />

      {/* Section 9 */}
      <HomeSection9 />

      {/* Section 10 */}
      <HomeSection10 />

      {/* Section 11 */}
      <HomeSection11 />
    </div>
  );
};

export default Home;
