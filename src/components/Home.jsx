import React from 'react'
import { BsArrowRightCircleFill } from 'react-icons/bs'
import { Link } from "react-scroll"; // import Link

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f] flex flex-col  items-center">
      {/*=== Container ===*/}
      <div className="max-w-[1000px] px-8 flex flex-col justify-center h-full lg:ml-9">
        <p className='text-[#087D97] text-3xl'> <b>Hi, je suis..</b></p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Saber Aissaoui</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>FullStack Développeur</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          Je suis un développeur FullStack, passionné par le développement web et le développement mobile.
        </p>
        <div>
          <button className='group text-white border-2 text-2xl p-3 my-2 flex items-center hover:bg-[#087D97] hover:text-[#0a192f] hover:font-bold border-gray-100'>
            <Link to="work" smooth={true} duration={500} className=" flex justify-center align-center">
              Mes Projets
              <span className='flex  hover:rotate-90 duration-300'>
                <BsArrowRightCircleFill size={33} className='mx-3 ' />
              </span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home