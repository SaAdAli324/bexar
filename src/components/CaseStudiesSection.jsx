import React from 'react'
import { Link } from 'react-router-dom'
const CaseStudiesSection = () => {
  return (
    <>
        <section className=' pb-27'>
        <div className='bg-gray-white'>
          <div className='container  mx-auto  text-start font-bold py-8 px-26 space-y-4 max-md:px-4 '>
            <span className='primary-color flex space-x-1'><hr className='border-3 rounded w-6' /> <hr className='border-3 rounded w-4' /> <hr className='border-3 rounded w-2' /></span>
            <p className='text-2xl text-gray-500 '>Our Team</p>
            <div className='flex justify-between items-center max-md:flex-col max-md:items-start max-md:space-y-4 '>
              <h2 className='text-4xl font-semibold uppercase'>bexar case studies</h2>
              <Link to="/about" className='btn btn-primary text-sm btn2 uppercase'>more projects</Link>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1  pb-8'>

          <div className='group'>
            <div className='relative overflow-hidden  '>
              <img src="/images/project-1.jpg" className='w-full group-hover:scale-105 transition-all duration-300 ease-in-out ' alt="" />
              <div className='absolute bottom-0 w-full h-full flex justify-center text-white items-center font-light opacity-0 more-projectsHover '>+</div>
            </div>
            <div className='font-bold p-4'>
              <h2 className='primary-color uppercase p-1'>Business solution</h2>
              <a href="#" className='uppercase text-lg text-hover p-0'>Art institute of chicago</a>
            </div>
          </div>

          <div className='group'>
            <div className=' relative overflow-hidden  '>
              <img src="/images/project-2.jpg" className='w-full group-hover:scale-105 transition-all duration-300 ease-in-out ' alt="" />
              <div className='absolute bottom-0 w-full  h-full flex justify-center text-white items-center font-light opacity-0 more-projectsHover '>+</div>
            </div>
            <div className='font-bold p-4'>
              <h2 className='primary-color uppercase p-1'>Business solution</h2>
              <a href="#" className='uppercase text-lg text-hover p-0'>Art institute of chicago</a>
            </div>
          </div>


          <div className='group'>
            <div className='relative overflow-hidden  '>
              <img src="/images/project-3.jpg" className='w-full group-hover:scale-105 transition-all duration-300 ease-in-out ' alt="" />
              <div className='absolute bottom-0 w-full h-full flex justify-center text-white items-center font-light opacity-0 more-projectsHover '>+</div>
            </div>
            <div className='font-bold p-4'>
              <h2 className='primary-color uppercase p-1'>Business solution</h2>
              <a href="#" className='uppercase text-lg text-hover p-0'>Art institute of chicago</a>
            </div>
          </div>

          <div className='group'>
            <div className=' relative overflow-hidden  '>
              <img src="/images/project-4.jpg" className='w-full group-hover:scale-105 transition-all duration-300 ease-in-out ' alt="" />
              <div className='absolute bottom-0 w-full  h-full flex justify-center text-white items-center font-light opacity-0 more-projectsHover '>+</div>
            </div>
            <div className='font-bold p-4 '>
              <h2 className='primary-color uppercase p-1'>Business solution</h2>
              <a href="#" className='uppercase text-lg text-hover p-0'>Art institute of chicago</a>
            </div>
          </div>

        </div>
      </section> 
    </>
  )
}

export default CaseStudiesSection
