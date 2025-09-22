import React from 'react'
import * as Falcons from 'react-icons/fa'
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
const OurTeamSection = () => {
  return (
    <>
        <section className='py-5  bg-gray-white'>
        <div className='container mx-auto flex flex-col items-center justify-end text-center font-bold pt-4 space-y-4 '>
          <span className='primary-color flex space-x-1'><hr className='border-3 rounded w-6' /> <hr className='border-3 rounded w-4' /> <hr className='border-3 rounded w-2' /></span>
          <p className='text-2xl text-gray-500 '>Our Team</p>
          <h2 className='text-4xl font-semibold uppercase'>we are dynamic team and <br />business agency</h2>
        </div>

        <div className='container mx-auto grid grid-cols-3 py-15 px-26 gap-7 max-xl:grid-cols-2 max-md:grid-cols-1'>
          <div className='team-bg-animation relative  group'>
            <img src="/images/team-1.jpg" className='w-full z-10' alt="" />
            <div className='absolute bottom-23 bg-[#86c33ae6] opacity-0  group-hover:opacity-100 transition-all duration-200 ease-in text-white z-10  flex items-center justify-center w-full py-7'>
              <ul className='flex space-x-4 '>
                <li className='text-lg border-1 rounded-full p-3 icon'>
                  <a target='_blank' href="https://www.revenuecpmgate.com/eg8j5pvzgt?key=5026c1f454dea43e509911bd33eadc46"><Falcons.FaFacebookF /></a>
                </li>
                <li className='text-lg border-1 rounded-full p-3 icon '>
                  <a target='_blank' href="https://www.revenuecpmgate.com/eg8j5pvzgt?key=5026c1f454dea43e509911bd33eadc46"><Falcons.FaTwitter /></a>
                </li>
                <li className='text-lg border-1 rounded-full p-3 icon'>
                  <a target='_blank' href="https://www.revenuecpmgate.com/eg8j5pvzgt?key=5026c1f454dea43e509911bd33eadc46"><Falcons.FaWifi /></a>
                </li>
                <li className='text-lg border-1 rounded-full p-3 icon '>
                  <a target='_blank' href="https://www.revenuecpmgate.com/eg8j5pvzgt?key=5026c1f454dea43e509911bd33eadc46"><Falcons.FaGoogle /></a>
                </li>
              </ul>
            </div>
            <div className='text-center py-5 '>
              <h2 className='uppercase text-lg font-bold '>monica heliona</h2>
              <p className='uppercase text-gray-500 '>designer</p>
            </div>
          </div>

          <div className='team-bg-animation relative group'>
            <img src="/images/team-2.jpg" className='w-full z-10' alt="" />
            <div className='absolute bottom-23 bg-[#86c33ae6] opacity-0  group-hover:opacity-100 transition-all duration-200 ease-in text-white z-10  flex items-center justify-center w-full py-7'>
           <ul className='flex space-x-4 '>
                <li className='text-lg border-1 rounded-full p-3 icon'>
                  <a target='_blank' href="https://www.revenuecpmgate.com/eg8j5pvzgt?key=5026c1f454dea43e509911bd33eadc46"><Falcons.FaFacebookF /></a>
                </li>
                <li className='text-lg border-1 rounded-full p-3 icon '>
                  <a target='_blank' href="https://www.revenuecpmgate.com/eg8j5pvzgt?key=5026c1f454dea43e509911bd33eadc46"><Falcons.FaTwitter /></a>
                </li>
                <li className='text-lg border-1 rounded-full p-3 icon'>
                  <a target='_blank' href="https://www.revenuecpmgate.com/eg8j5pvzgt?key=5026c1f454dea43e509911bd33eadc46"><Falcons.FaWifi /></a>
                </li>
                <li className='text-lg border-1 rounded-full p-3 icon '>
                  <a target='_blank' href="https://www.revenuecpmgate.com/eg8j5pvzgt?key=5026c1f454dea43e509911bd33eadc46"><Falcons.FaGoogle /></a>
                </li>
              </ul>
            </div>
            <div className='text-center py-5 '>
              <h2 className='uppercase text-lg font-bold '>monica heliona</h2>
              <p className='uppercase text-gray-500 '>designer</p>
            </div>
          </div>

          <div className='team-bg-animation relative  group'>
            <img src="/images/team-3.jpg" className='w-full z-10' alt="" />
            <div className='absolute bottom-23 bg-[#86c33ae6] opacity-0  group-hover:opacity-100 transition-all duration-200 ease-in text-white z-10  flex items-center justify-center w-full py-7'>
          <ul className='flex space-x-4 '>
                <li className='text-lg border-1 rounded-full p-3 icon'>
                  <a target='_blank' href="https://www.revenuecpmgate.com/eg8j5pvzgt?key=5026c1f454dea43e509911bd33eadc46"><Falcons.FaFacebookF /></a>
                </li>
                <li className='text-lg border-1 rounded-full p-3 icon '>
                  <a target='_blank' href="https://www.revenuecpmgate.com/eg8j5pvzgt?key=5026c1f454dea43e509911bd33eadc46"><Falcons.FaTwitter /></a>
                </li>
                <li className='text-lg border-1 rounded-full p-3 icon'>
                  <a target='_blank' href="https://www.revenuecpmgate.com/eg8j5pvzgt?key=5026c1f454dea43e509911bd33eadc46"><Falcons.FaWifi /></a>
                </li>
                <li className='text-lg border-1 rounded-full p-3 icon '>
                  <a target='_blank' href="https://www.revenuecpmgate.com/eg8j5pvzgt?key=5026c1f454dea43e509911bd33eadc46"><Falcons.FaGoogle /></a>
                </li>
              </ul>
            </div>
            <div className='text-center py-5 '>
              <h2 className='uppercase text-lg font-bold '>monica heliona</h2>
              <p className='uppercase text-gray-500 '>designer</p>
            </div>
          </div>
        </div>

      </section> 
    </>
  )
}

export default OurTeamSection
