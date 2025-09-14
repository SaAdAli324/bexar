import React from 'react'
import { Link } from 'react-router-dom'
const AboutUsSection = () => {
  return (
    <>
      <section className='py-5'>
        <div className='container mx-auto gap-10 grid grid-cols-2 max-sm:px-0 max-sm:grid-cols-1 max-md:grid-cols-1 max-lg:grid-cols-1 py-25 px-27'>
          <div className='bg-[url("/backgroundImages/about-us-bg.png")] bg-no-repeat bg-center flex justify-center items-center px-12'>
            <img src="/images/about-us.png" alt="" />
          </div>
          <div className='space-y-9 py-18 px-9 font-bold'>
            <span className='primary-color flex space-x-1'><hr className='border-3 rounded w-6' /> <hr className='border-3 rounded w-4' /> <hr className='border-3 rounded w-2' /></span>
            <p className='text-gray-500 text-2xl'>ABOUT US</p>
            <h2 className='text-5xl font-semibold leading-[1.2] whitespace-normal'>WE ARE DYNAMIC TEAM AND BUSINESS AGENCY</h2>
            <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde repellat voluptatum nihil amet voluptatibus minima eum? Ea laudantium laboriosam ex.</p>
            <Link to="/about" className='btn btn-primary text-sm btn2 '>MORE SERVICE</Link>

          </div>
        </div>
      </section> 
    </>
  )
}

export default AboutUsSection
