import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
const HeroSectionSlider = () => {
    const [sliderIndex, setSliderIndex] = useState(0)
    return (
        <>
            <section className='h-[70vh] grid grid-cols-1'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                    onSlideChange={(Swiper) => setSliderIndex(Swiper.realIndex)}
                >
                    <SwiperSlide className='bg-[url("/images/banner-1.jpg")] bg-no-repeat bg-cover max-sm:bg-center  '>
                        <div className={` h-10/12 container ${sliderIndex === 0 ? "animate-slideDown" : ""}  flex  items-center mx-auto`}>
                            <div className='py-12 max-sm:px-4 px-27 w-3xl  text-start font-bold'>
                                <span className=' font-stretch-ultra-condensed'>WE ARE HERE FOR</span>
                                <h1 className='text-6xl font-stretch-ultra-condensed  mb-8'>PLANNING BUSINESS</h1>
                                <p className='text-sm text-[#818385] mb-16'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa veritatis quos neque iusto magnam saepe non commodi doloremque optio tempora!</p>
                                <Link href="/about" className='btn btn-secondary text-sm btn-secondaryHover '>GET STARTED</Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='bg-[url("/images/banner-2.jpg")] bg-no-repeat bg-cover  max-sm:bg-center  '>
                        <div className={` h-10/12 container ${sliderIndex === 1 ? "animate-slideRight" : ""}  flex  items-center mx-auto`}>
                            <div className='py-12 max-sm:px-4 px-27 w-3xl  text-start font-bold'>
                                <span className=' font-stretch-ultra-condensed'>WE ARE HERE FOR</span>
                                <h1 className='text-6xl font-stretch-ultra-condensed  mb-8'>PLANNING BUSINESS</h1>
                                <p className='text-sm text-[#818385] mb-16'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa veritatis quos neque iusto magnam saepe non commodi doloremque optio tempora!</p>
                                <Link to="/about" className='btn btn-secondary text-sm btn-secondaryHover '>GET STARTED</Link>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='bg-[url("/images/banner-3.jpg")] bg-no-repeat bg-cover max-sm:bg-center  '>
                        <div className={` h-10/12 container ${sliderIndex === 2 ? "animate-slideBottom" : ""}  flex  items-center mx-auto`}>
                            <div className='py-12 max-sm:px-4  px-27 w-3xl  text-start font-bold'>
                                <span className=' font-stretch-ultra-condensed'>WE ARE HERE FOR</span>
                                <h1 className='text-6xl font-stretch-ultra-condensed  mb-8'>PLANNING BUSINESS</h1>
                                <p className='text-sm text-[#818385] mb-16'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa veritatis quos neque iusto magnam saepe non commodi doloremque optio tempora!</p>
                                <Link to="/about" className='btn btn-secondary text-sm btn-secondaryHover '>GET STARTED</Link>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='bg-[url("/images/banner-4.jpg")] bg-no-repeat bg-cover  max-sm:bg-center  '>
                        <div className={` h-10/12 container ${sliderIndex === 3 ? "animate-slideLeft" : ""}  flex  items-center mx-auto`}>
                            <div className='py-12 max-sm:px-4  px-27 w-3xl  text-start font-bold'>
                                <span className=' font-stretch-ultra-condensed'>WE ARE HERE FOR</span>
                                <h1 className='text-6xl font-stretch-ultra-condensed  mb-8'>PLANNING BUSINESS</h1>
                                <p className='text-sm text-[#818385] mb-16'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa veritatis quos neque iusto magnam saepe non commodi doloremque optio tempora!</p>
                                <Link to="/about" className='btn btn-secondary text-sm btn-secondaryHover '>GET STARTED</Link>

                            </div>
                        </div>
                    </SwiperSlide>


                </Swiper>

            </section>
        </>
    )
}

export default HeroSectionSlider
