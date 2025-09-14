import React from 'react'

const CTAsection = () => {
  return (
    <>
         <section className="relative bg-[#252d39e0] overflow-hidden py-38 flex items-center justify-center">
        <div className="absolute inset-0  bg-[url('/backgroundImages/cta-lg.jpg')] bg-cover bg-center bg-fixed  -z-10"></div>
        <div className="relative z-10 text-white text-center container mx-auto  font-bold space-y-8 ">
          <h2 className='uppercase text-4xl'>bexar give the smart solution for your <br /> business</h2>
          <a href="#" className='btn btn-primary text-sm btn2 uppercase border-none'>get a quote</a>
        </div>
      </section>
 
    </>
  )
}

export default CTAsection
