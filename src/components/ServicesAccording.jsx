import React, { useState, useEffect } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const ServicesAccording = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [data, setData] = useState([]);

  // Function to toggle the active accordion index
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://highleveltecknology.com/bahaa/public/all_slides/4');
        const result = await response.json();
        const formattedData = result['Why Bahaa?'].map(item => ({
          question: item.title,
          answer: item.text
        }));
        setData(formattedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='mt-10'>
      <div className='flex flex-col gap-5 justify-center lg:w-[60%] w-[90%] mx-auto'>
        {data.map((item, index) => (
          <div
            key={index}
            className={`rounded-lg p-4 ${activeIndex === index ? 'bg-[#3d3d3d]' : 'bg-[#2a2a2a]'}`}
          >
            <div
              className='flex items-center justify-between text-gray-300 cursor-pointer'
              onClick={() => toggleAccordion(index)}
            >
              <span className='lg:text-lg text-sm w-[70%] lg:w-full'>{item.question}</span>
              {activeIndex === index ? <FaMinus /> : <FaPlus />}
            </div>
            {activeIndex === index && (
              <p className='text-gray-300 mt-5 transition-all duration-300 '>
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesAccording;
