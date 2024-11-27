import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import HomeSection1 from "../components/HomeSection1";
import HomeSection2 from "../components/HomeSection2";
import HomeSection3 from "../components/HomeSection3";
import HomeSection4 from "../components/HomeSection4";
import HomeSection5 from "../components/HomeSection5";
import HomeSection6 from "../components/HomeSection6";
import HomeSection7 from "../components/HomeSection7";
import HomeSection8 from "../components/HomeSection8";
import HomeSection9 from "../components/HomeSection9";
import HomeSection10 from "../components/HomeSection10";
import HomeSection11 from "../components/HomeSection11";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [slides, setSlides] = useState([]);

  useEffect(() => {
    // Fetch the slides from the API
    const fetchSlides = async () => {
      try {
        const response = await axios.get(
          "https://highleveltecknology.com/bahaa/public/all_slides/1"
        );
        const slideData = response.data?.slide || [];
        const formattedSlides = slideData.map((slide) => ({
          id: slide.id,
          imageUrl: `https://highleveltecknology.com/bahaa/public/${slide.img}`,
        }));
        setSlides(formattedSlides);
      } catch (error) {
        console.error("Error fetching the slides:", error);
      }
    };

    fetchSlides();
  }, []);

  return (
    <div>
      {/* Slider Section */}
      <div className="h-screen">
        {slides.length > 0 ? (
          <Slider {...sliderSettings}>
            {slides.map((slide) => (
              <div key={slide.id} className="h-screen">
                <div
                  className="h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.imageUrl})` }}
                ></div>
              </div>
            ))}
          </Slider>
        ) : (
          <div className="h-screen bg-gray-200 flex items-center justify-center">
            <p>Loading slides...</p>
          </div>
        )}
      </div>

      {/* Other Sections */}
      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 />
      <HomeSection5 />
      <HomeSection6 />
      <HomeSection7 />
      <HomeSection8 />
      <HomeSection9 />
      <HomeSection10 />
      <HomeSection11 />
    </div>
  );
};

export default Home;
