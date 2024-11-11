import React from 'react';
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
import homeBanner from '../images/home/home-hero.png'
const Home = () => {
  return (
    <div className=''>
      <div
        className='bg-[#979797] h-screen bg-cover bg-center'
        style={{ backgroundImage: `url(${homeBanner})` }}
      >
      </div>
     {/* section 1 */}
      <HomeSection1/>
      
      {/* Section 2  */}
      <HomeSection2/>

      {/* Section 3  */}
      <HomeSection3 />

      {/* Section 4  */}
      <HomeSection4 />

      {/* Section 5  */}
      <HomeSection5 />

      {/* Section 6  */}
      <HomeSection6 />

      {/* Section 7  */}
      <HomeSection7 />

      {/* Section 8  */}
      <HomeSection8 />

      {/* Section 9  */}
      <HomeSection9 />

      {/* Section 10  */}
      <HomeSection10/>

      {/* Section 11  */}
      <HomeSection11 />
      
    </div>
  );
}

export default Home;
