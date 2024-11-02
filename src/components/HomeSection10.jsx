import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import dot from '../images/dot.png';
import img1 from '../images/testimonail1.png';
import img2 from '../images/testimonail2.png';
import img3 from '../images/testimonail3.png';
import img4 from '../images/testimonail4.png';
import img5 from '../images/testimonail5.png';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <button
            onClick={onClick}
            className="absolute top-1/2 right-[-80px] lg:text-5xl text-2xl transform -translate-y-1/2  text-gray-400 p-2 rounded-full"
        >
            <FiChevronRight />
        </button>
    );
};

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <button
            onClick={onClick}
            className="absolute top-1/2 lg:text-5xl text-2xl left-[-80px] transform -translate-y-1/2  text-gray-400  rounded-full z-10"
        >
            <FiChevronLeft />
        </button>
    );
};
const HomeSection10 = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay : true,
        autoplaySpeed : 3000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <div className='px-4 md:px-8 lg:px-24 my-20'>
            <h2 className='text-xl lg:text-4xl mb-10'>اراء العملاء</h2>
            <div className='lg:w-[60%] mx-auto'> {/* This ensures the entire slider container is 60% on large screens */}
                <Slider {...settings}>
                    {/* Slide 1 */}
                    <div className='bg-[#f6f2e9] p-5 '>
                        <img src={dot} alt="dot" className='mb-4 float-right' />
                        <div className='flex flex-col  lg:flex-row items-center justify-around mt-14'>
                            <img src={img1} alt="testimonial" className='w-32 h-32 lg:w-40 lg:h-40 ml-14 lg:ml-0 mr-0 lg:mr-6 mb-4 lg:mb-0' />
                            <p className='text-xl lg:w-[60%] w-[100%] text-center lg:text-right leading-[1.5]  ml-14 lg:ml-0 '>
                                فساتين بهاء الدين هي حلم كل عروس، حيث يتم تصميمها بعناية فائقة وبأجود الخامات، مما يجعل كل عروس تشعر بأنها مميزة في يومها الكبير.
                            </p>
                        </div>
                    </div>

                    {/* Slide 2 */}
                     <div className='bg-[#f6f2e9] p-5'>
                        <img src={dot} alt="dot" className='mb-4 float-right' />
                        <div className='flex flex-col lg:flex-row items-center justify-around mt-14'>
                            <img src={img2} alt="testimonial" className='w-32 h-32 lg:w-40 lg:h-40 ml-12 lg:ml-0  mr-0 lg:mr-6 mb-4 lg:mb-0' />
                            <p className='text-xl lg:w-[60%] text-center lg:text-right ml-12 lg:ml-0 w-[100%]  leading-[1.5]'>
                                أحببت كل التفاصيل الصغيرة في فستاني، كانت تجربة غير عادية، وأوصي كل عروس بالتوجه إلى فساتين بهاء الدين.
                            </p>
                        </div>
                    </div>

                    {/* Slide 3 */}
                    <div className='bg-[#f6f2e9] p-5'>
                        <img src={dot} alt="dot" className='mb-4 float-right' />
                        <div className='flex flex-col lg:flex-row items-center justify-around mt-14'>
                            <img src={img3} alt="testimonial" className='w-32 h-32 lg:w-40 ml-12 lg:ml-0  lg:h-40 mr-0 lg:mr-6 mb-4 lg:mb-0' />
                            <p className='text-xl lg:w-[60%] text-center lg:text-right  ml-12 lg:ml-0 w-[100%] leading-[1.5]'>
                                الجودة والخدمة هما عنوان فساتين بهاء الدين. شكراً لكل العاملين هناك على الاهتمام والتفاني.
                            </p>
                        </div>
                    </div>

                    {/* Slide 4 */}
                    <div className='bg-[#f6f2e9] p-5'>
                        <img src={dot} alt="dot" className='mb-4 float-right' />
                        <div className='flex flex-col lg:flex-row items-center justify-around mt-14'>
                            <img src={img4} alt="testimonial" className='w-32 h-32 lg:w-40 ml-12 lg:ml-0  lg:h-40 mr-0 lg:mr-6 mb-4 lg:mb-0' />
                            <p className='text-xl lg:w-[60%] text-center lg:text-right ml-12 lg:ml-0 w-[100%] leading-[1.5]'>
                                كان الفستان مذهلاً بكل المقاييس، والجميع أشادوا بالتفاصيل والأناقة. أشكركم من أعماق قلبي.
                            </p>
                        </div>
                    </div>

                    {/* Slide 5 */}
                    <div className='bg-[#f6f2e9] p-5 '>
                        <img src={dot} alt="dot" className='mb-4 float-right' />
                        <div className='flex flex-col lg:flex-row items-center justify-around mt-14'>
                            <img src={img5} alt="testimonial" className='w-32 h-32 lg:w-40 ml-12 lg:ml-0  lg:h-40 mr-0 lg:mr-6 mb-4 lg:mb-0' />
                            <p className='text-xl lg:w-[60%] text-center lg:text-right  ml-12 lg:ml-0 w-[100%] leading-[1.5]'>
                                تجربة رائعة! كان الفستان مثاليًا، وشعرت كأنني ملكة في يوم زفافي بفضل التفصيل الدقيق والخامات الممتازة.
                            </p>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default HomeSection10;
