
import * as Falcons from 'react-icons/fa'
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
const HeroSectionCards = () => {
  return (
    <>
          <section className='flex justify-center '>
        <div className='container mt-[-97px] z-1 gap-8 mx-auto  px-27  grid  grid-cols-4 max-md:grid-cols-1 max-sm:px-12 max-lg:grid-cols-2 max-sm:grid-cols-1'>
          <div className=' card-hover bg-white shadow-2xl group flex justify-center items-center'>
            <div className='flex flex-col py-13 space-y-6 justify-center items-center font-bold'>
              <div className='border-2 water-wave'>
                <div className='water-wave2 flex items-center justify-center'><MdIcons.MdDiamond className='group-hover:text-white text-6xl  text-lime-500' /></div>
              </div>
              <div className='text-center group-hover:text-white space-y-4 px-4'>
                <h2>BUSINESS SOLUTION</h2>
                <p className='text-[#818385] font-medium group-hover:text-white'>Lorem ipsum sectetur, adipisicing elit. Error, aut.</p>
              </div>
            </div>
          </div>

          <div className=' card-hover bg-white shadow-2xl group flex justify-center items-center'>
            <div className='flex flex-col py-13 space-y-6 justify-center items-center font-bold'>
              <div className='border-2 water-wave'>
                <div className='water-wave2 flex items-center justify-center'><Falcons.FaChartBar className=' group-hover:text-white text-5xl text-lime-500' /></div>
              </div>
              <div className='text-center group-hover:text-white space-y-4 px-4'>
                <h2>BUSINESS SOLUTION</h2>
                <p className='text-[#818385] font-medium group-hover:text-white'>Lorem ipsum sectetur, adipisicing elit. Error, aut.</p>
              </div>
            </div>
          </div>

          <div className=' card-hover group bg-white shadow-2xl  flex justify-center items-center'>
            <div className='flex flex-col py-13 space-y-6 justify-center items-center font-bold'>
              <div className='border-2 water-wave'>
                <div className='water-wave2 flex items-center justify-center'><IoIcons.IoIosBulb className='group-hover:text-white text-6xl  text-lime-500' /></div>
              </div>
              <div className='text-center group-hover:text-white space-y-4  px-4'>
                <h2>BUSINESS SOLUTION</h2>
                <p className='text-[#818385] font-medium group-hover:text-white'>Lorem ipsum sectetur, adipisicing elit. Error, aut.</p>
              </div>
            </div>
          </div>

          <div className=' card-hover group bg-white shadow-2xl flex justify-center items-center'>
            <div className='flex flex-col py-13 space-y-6 justify-center items-center font-bold'>
              <div className='border-2 water-wave'>
                <div className='water-wave2 flex items-center justify-center'><IoIcons.IoMdSpeedometer className=' text-6xl group-hover:text-white text-lime-500' /></div>
              </div>
              <div className='text-center group-hover:text-white space-y-4 px-4'>
                <h2>BUSINESS SOLUTION</h2>
                <p className='text-[#818385] font-medium group-hover:text-white'>Lorem ipsum sectetur, adipisicing elit. Error, aut.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
 
    </>
  )
}
export default HeroSectionCards
