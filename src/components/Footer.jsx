import * as Falcons from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
      <footer className=' text-white bg-color pt-30'>
        <div className='container mx-auto  py-5 grid grid-cols-2 max-lg:px-4 max-lg:grid-cols-1  px-26'>
          <div className=' flex flex-col space-y-4 pr-28 max-sm:pr-0 '>
            <div className=''><img src="images/logo-alt.png" alt="" /></div>
            <p className='text-[#ddd] font-bold'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium delectus aut id consequuntur consectetur necessitatibus eum minus qui fugit laudantium! Repellendus vero, consequuntur sed consequatur nisi assumenda obcaecati deserunt cumque amet laboriosam
              <br /><br /> itaque delectus quam esse molestiae quae alias quisquam dignissimos eius molestias atque ipsam corporis quo omnis. Nihil, recusandae!
            </p>
            <div className='space-y-4 py-8'>
              <h2 className='uppercase font-bold text-lg'>follow us on</h2>
              <ul className='flex space-x-3 '>
                <li className='text-lg border-1 rounded-full p-3  icon2 '>
                  <a target='_blank' href="https://www.facebook.com/"><Falcons.FaFacebookF /></a>
                </li>
                <li className='text-lg border-1 rounded-full p-3 icon2 '>
                  <a target='_blank' href="https://www.x.com/"><Falcons.FaTwitter /></a>
                </li>
                <li className='text-lg border-1 rounded-full p-3 icon2'>
                  <a target='_blank' href="https://www.google.com/"><Falcons.FaWifi /></a>
                </li>
                <li className='text-lg border-1 rounded-full p-3 icon2 '>
                  <a target='_blank' href="https://www.google.com/"><Falcons.FaGoogle /></a>
                </li>
              </ul>
            </div>

          </div>
          <div className='maxlg'>
            <div className=' grid grid-cols-2'>
              <div className='space-y-4'>
                <h2 className='uppercase font-bold text-lg'> service</h2>
                <ul className='list space-y-4 text-[#ddd] list-disc px-5'>
                  <li><a href="#">Company history</a></li>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Contact Us</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                </ul>
              </div>

              <div className='space-y-4 pr-25'>

                <h2 className='uppercase font-bold text-lg '>contact info</h2>
                <ul className='space-y-2 text-[#ddd] '>
                  <li>5465 tjaskjnk, akliwdklam Bc, asdsasda</li>
                  <li>+156 54651 3216</li>
                  <li>info@bexar.com</li>
                </ul>

              </div>

            </div>

            <div className='py-15 flex flex-col max-lg:items-center  '>
              <h2 className='uppercase  font-bold text-lg '>subscribe newsletter</h2>
              <span className='flex py-4 mx-auto'> <input type="text" className=' outline-none py-2 pl-5 max-xl:pr-32 max-sm:pr-1.5  pr-68 bg-[#ffffff1a] rounded-l-4xl' /><button className='uppercase rounded-r-4xl px-4 py-4 text-center primarybg-color'>subscribe</button></span>
            </div>
          </div>

        </div>
        <div className='bg-[#1f2630]'>
          <div className='  py-4 flex justify-between  container mx-auto'>
            <p><span className='primary-color'>Bexar</span> @ 2025 All Right Reserved</p>
            <ul className='flex space-x-4'>
              <li>Terms of service</li>
              <li className='border'></li>
              <li>Privacy policy</li>
            </ul>

          </div>
        </div>
      </footer> 
    </>
  )
}

export default Footer
