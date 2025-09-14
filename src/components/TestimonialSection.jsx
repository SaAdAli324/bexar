import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const TestimonialSection = () => {
  return (
    <>
         <section className='bg-[#f5f6fa] bg-[url("/backgroundImages/testimonial-bg-1.png")] bg-cover py-17'>
        <div className='container mx-auto'>
          <div className='container  mx-auto  flex flex-col justify-center items-center text-center font-bold py-8 px-26 max-md: max-md:px-4 space-y-8 '>
            <span className='primary-color flex space-x-1'><hr className='border-3 rounded w-6' /> <hr className='border-3 rounded w-4' /> <hr className='border-3 rounded w-2' /></span>
            <p className='text-2xl text-gray-500'>Testimonials</p>
            <h2 className='text-4xl font-semibold uppercase'>what our clients say?</h2>

          </div>
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
          >
            <SwiperSlide className=''>
              <div className=' container flex items-center justify-center mx-auto'>
                <div className='py-16 max-md:px-25 px-65 flex flex-col justify-center items-center text-center font-bold'>
                  <div className='w-18'>
                    <img src="/images/client-1.jpg" className='rounded-full' alt="" />
                  </div>
                  <div className='pt-15'>
                    <p className=' mb-8 text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae omnis ad, quisquam deserunt assumenda voluptas temporibus eius? Ratione blanditiis optio deleniti ullam dignissimos amet aut numquam minus laborum sed! Ipsa.</p>
                    <h2 className='uppercase'>brad pit</h2>
                    <p className='font-normal primary-color mb-16 '>Designer</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className=''>
              <div className={` h-10/12 container   flex  items-center justify-center mx-auto`}>
                <div className='py-12 max-md:px-25  px-65  flex flex-col items-center text-center font-bold'>
                  <div className='w-18'>
                    <img src="/images/client-2.jpg" className='rounded-full' alt="" />
                  </div>
                  <div className='pt-15'>
                    <p className=' mb-8 text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae omnis ad, quisquam deserunt assumenda voluptas temporibus eius? Ratione blanditiis optio deleniti ullam dignissimos amet aut numquam minus laborum sed! Ipsa.</p>
                    <h2 className='uppercase'>brad pit</h2>
                    <p className='font-normal primary-color mb-16 '>Designer</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className=''>
              <div className={` h-10/12 container  flex  items-center justify-center mx-auto`}>
                <div className='py-12 max-md:px-25  px-65 flex flex-col items-center text-center font-bold'>
                  <div className='w-18'>
                    <img src="/images/client-3.jpg" className='rounded-full' alt="" />
                  </div>
                  <div className='pt-15'>
                    <p className=' mb-8 text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae omnis ad, quisquam deserunt assumenda voluptas temporibus eius? Ratione blanditiis optio deleniti ullam dignissimos amet aut numquam minus laborum sed! Ipsa.</p>
                    <h2 className='uppercase'>brad pit</h2>
                    <p className='font-normal primary-color mb-16 '>Designer</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  )
}

export default TestimonialSection
