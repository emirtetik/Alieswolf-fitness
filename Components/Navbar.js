import Image from 'next/image'
import React,{useState} from 'react'
import Link from 'next/link'
import { HiMenuAlt3 } from "react-icons/hi";
import {IoMdCloseCircleOutline} from "react-icons/io"
import {TfiYoutube} from "react-icons/tfi"
function Navbar() {
  const [open,setOpen] = useState(false);

  const handleNav = () => {
      setOpen(!open)
  };
  return (
    <div className='fixed w-full h-20 shadow-xl z-[100]'>
        <div className="flex items-center justify-between w-full h-full px-2 2xl:px-16 ">
            <Image src="/images/work.jpg" alt="/" width={125} height={50} />

        <div onClick={handleNav} className="cursor-pointer">
        <HiMenuAlt3 size={50} />
        </div>
        </div>

 <div className={open ? 'fixed w-full h-screen bg-purple/25' : ''} >
  <div className={
    open ? 'fixed  right-20 top-20  sm:w-[25%] md:w-[25%] py-10    bg-metal p-10 ease-in duration-700 ' 
    : 'fixed  right-[-100%] top-20   bg-metal p-10 ease-in  duration-700 ' 
    } >


     <div>
        <div className='flex justify-between w-full '>
            <Image src="/images/work.jpg" alt='/'  width={87} height={35}  />
        </div>
       <div className='my-4 text-base border-b border-gray-30 '>
        <p className='w-[85%] md:w-[90%] py-4'>let!s buıldıng alıeswolf fıtnes</p>
       </div>
     </div>

     <div className='flex flex-col py-4'>
        <ul className='uppercase border-b '>
            <Link href="/">
            <li className='py-4 text-lg '>home</li>
            </Link>
            <Link href="/">
            <li className='py-4 text-lg'>about</li>
            </Link>
            <Link href="/">
            <li className='py-4 text-lg'>project</li>
            </Link>
            <Link href="/">
            <li className='py-4 text-lg'>contact</li>
            </Link>
        </ul>
        <div className='pt-10'>
            <p className='uppercase tracking-widest text-[pink] text-lg'>lets connect</p>
        </div>
        
        <div className='flex pl-10 gap-x-0.5  items-center justify-between my-4 sm:w-[80%]'>
        <div className='p-3 duration-500 ease-linear rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105'>
        <TfiYoutube/>
            
            </div>
            <div className='p-3 duration-500 ease-linear rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105'>
        <TfiYoutube/>
            
            </div>
            <div className='p-3 duration-500 ease-linear rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105'>
        <TfiYoutube/>
            
            </div>
            <div className='p-3 duration-500 ease-linear rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105'>
        <TfiYoutube/>
            
            </div>
        </div>
     </div>

  </div>

 </div>
    </div>
  )
}

export default Navbar