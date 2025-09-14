import React from 'react'

const NewsSection = () => {
  return (
    <>
      <section className='py-38 bg-gray-white bg-[url(")]'>
        <div className='container  mx-auto text-start font-bold py-8 px-26 space-y-4 max-md:px-4 '>
          <span className='primary-color flex space-x-1'><hr className='border-3 rounded w-6' /> <hr className='border-3 rounded w-4' /> <hr className='border-3 rounded w-2' /></span>
          <p className='text-2xl text-gray-500 '>Latest news</p>
          <h2 className='text-4xl font-semibold uppercase'>learn from bexar</h2>
        </div>
        <div className='container mx-auto grid grid-cols-3 px-26 gap-6 max-lg:grid-cols-2 max-md:grid-cols-2 max-md:px-10 max-sm:grid-cols-1 max-sm:px-4'>

          <div className='bg-white shadow-2xl'>
            <div className='relative'>
              <img src="/images/post-1.jpg" className='w-full' alt="" />
              <div className='absolute top-8 left-8 primarybg-color px-2 py-1 text-white'>Article</div>
            </div>
            <div className='p-4 space-y-1'>
              <p className='uppercase'>by <span className='font-bold'>admin</span> on <span className='font-bold'> 1 sep, 2025</span></p>
              <h2 className='uppercase font-bold text-lg'>elite duio amoasiu tempoi labnoe dliokt</h2>
              <span className='primary-color flex space-x-1'><hr className='border-3 rounded w-6' /> <hr className='border-3 rounded w-4' /> <hr className='border-3 rounded w-2' /></span>
              <p className='pt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, tempore temporibus obcaecati sapiente sint enim, iusto doloremque repellendus perspiciatis, inventore nobis ducimus maxime accusantium tenetur? Hic repellendus adipisci nam dolor.</p>
            </div>
          </div>

          <div className='bg-white shadow-2xl'>
            <div className='relative'>
              <img src="/images/post-2.jpg" className='w-full' alt="" />
              <div className='absolute top-8 left-8 primarybg-color px-2 py-1 text-white'>Article</div>
            </div>
            <div className='p-4 space-y-1'>
              <p className='uppercase'>by <span className='font-bold'>admin</span> on <span className='font-bold'> 1 sep, 2025</span></p>
              <h2 className='uppercase font-bold text-lg'>elite duio amoasiu tempoi labnoe dliokt</h2>
              <span className='primary-color flex space-x-1'><hr className='border-3 rounded w-6' /> <hr className='border-3 rounded w-4' /> <hr className='border-3 rounded w-2' /></span>
              <p className='pt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, tempore temporibus obcaecati sapiente sint enim, iusto doloremque repellendus perspiciatis, inventore nobis ducimus maxime accusantium tenetur? Hic repellendus adipisci nam dolor.</p>
            </div>
          </div>


          <div className='bg-white shadow-2xl'>
            <div className='relative'>
              <img src="/images/post-3.jpg" className='w-full' alt="" />
              <div className='absolute top-8 left-8 primarybg-color px-2 py-1 text-white'>Article</div>
            </div>
            <div className='p-4 space-y-1'>
              <p className='uppercase'>by <span className='font-bold'>admin</span> on <span className='font-bold'> 1 sep, 2025</span></p>
              <h2 className='uppercase font-bold text-lg'>elite duio amoasiu tempoi labnoe dliokt</h2>
              <span className='primary-color flex space-x-1'><hr className='border-3 rounded w-6' /> <hr className='border-3 rounded w-4' /> <hr className='border-3 rounded w-2' /></span>
              <p className='pt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, tempore temporibus obcaecati sapiente sint enim, iusto doloremque repellendus perspiciatis, inventore nobis ducimus maxime accusantium tenetur? Hic repellendus adipisci nam dolor.</p>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default NewsSection
