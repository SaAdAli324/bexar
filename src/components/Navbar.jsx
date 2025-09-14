import { useState } from 'react'

import * as Falcons from 'react-icons/fa'
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
import { Link } from 'react-router-dom';
const Navbar = () => {

const [showSearchBar, setShowSearchBar] = useState(false)
  const [showNavBar, setNavBar] = useState(false)
  return (
    <>
        <header className=' '>
        <div className=' flex bg-[#272d39] text-white justify-center '>
          <div className='container mx-auto flex-wrap max-lg:justify-center max-md:justify-center max-md:p-0 px-28 flex justify-between p-2'>
            <div className='  flex justify-center items-center  '>
              <span className='text-sm'>Connect With Us:</span>
              <ul className='flex space-x-2 '>
                <li className='text-sm icon-hover '>
                  <a target='_blank' href="https://www.facebook.com/"><Falcons.FaFacebookF /></a>

                </li>
                <li className='text-sm icon-hover '>
                  <a target='_blank' href="https://www.x.com/"><Falcons.FaTwitter /></a>

                </li>
                <li className='text-sm icon-hover'>
                  <a target='_blank' href="https://www.google.com/"><Falcons.FaWifi /></a>

                </li>
                <li className='text-sm icon-hover'>
                  <a target='_blank' href="https://www.google.com/"><Falcons.FaGoogle /></a>

                </li>
                <li className='text-sm icon-hover'>
                  <a target='_blank' href="https://www.vime.com/"><Falcons.FaVimeoV /></a>

                </li>
              </ul>
            </div>
            <div className=' flex justify-center font space-x-4 px-10 items-center'>
              <a href="https://www.info@bexar.com/" target='_blank' className='border-r-1 text-sm text-hover border-gray-400 px-4'>info@bexar.com</a>
              <a href="#" className='text-hover text-sm'>Call Us Now: <span className='primary-textColor'>123 456 798</span> </a>
            </div>
          </div>
        </div>
        <nav className=' '>
          {showSearchBar ? (
            <div id='searchBar' className='container mx-auto justify-between items-center px-27 transition-forNav '>
              <input type="text" placeholder='Type & Hit Enter..' className=' py-9 w-[85%]  text-3xl outline-none' />
              <span onClick={() => setShowSearchBar(false)} className='font-extrabold text-2xl cursor-pointer'>x</span>
            </div>
          ) :
            (


              <div id='navContent' className='container max-sm:px-7  max-xl:flex-col max-xl:space-y-3 justify-between flex  mx-auto  px-27 py-7 transition-forNav'>
                <div className='flex max-xl:justify-between  justify-center items-center '>
                  <img src="images/logo.png" alt="" />
                  <div><IoIcons.IoMdMenu onClick={() => setNavBar(!showNavBar)} className='text-3xl  justify-self-end hidden max-xl:flex' /></div>
                </div>

                <div className={`max-xl:space-x-2 max-xl:px-0 transition-all duration-500 ease-in-out  xl:flex items-center space-x-8 max-xl:flex-col max-xl:space-y-4px-11  ${showNavBar ? "max-h-full" : "hidden"}`}>
                  <ul className='flex max-xl:space-x-4 max-xl:flex-col max-xl:items-center max-xl:text-lg max-xl:space-y-4 space-x-8 font-bold  text-sm'>
                    <li><Link to="/" className='text-hover '>HOME</Link></li>
                    <li><Link to="/about" className='text-hover'>ABOUT US</Link></li>
                    <li><Link to="/blog" className='text-hover'>BLOG</Link></li>
                    <li><Link to="/contact" className='text-hover'>CONTACT</Link></li>
                    <li><Link to="/pages" className='text-hover'>PAGES</Link></li>
                    <li><Link to="shortcode" className='text-hover'>SHORT CODE</Link></li>

                  </ul>
                  <div className='flex max-xl:space-x-3 max-xl:flex-col max-xl:space-y-4 space-x-6 justify-center items-center'>
                    <a href="#"><Falcons.FaSearch className='' onClick={() => setShowSearchBar(true)} /></a>
                    <Link to="/about" className='btn btn-primary text-sm btn2 '>GET STARTED</Link>
                  </div>
                </div>

              </div>

            )}
        </nav>
      </header>
    </>
  )
}

export default Navbar
