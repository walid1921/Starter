import React, { useState, useRef, useEffect } from 'react';
import Button from './UI/Button';
import { TbMenu2 } from 'react-icons/tb';
import { IoMdClose } from 'react-icons/io'

const Navbar = () => {
  const [showWindow, setShowWindow] = useState(false)
  const showWindowHandler = () => { setShowWindow(true) }


  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef(null)

  const handleOpen = () => { setIsOpen(!isOpen) }

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='w-full center-between text-white bg-green-800  h-20 container sticky top-0  z-10'>

      <div>
        <span>LOGO</span>
      </div>

      <div>
        <ul className='items-center justify-between gap-10 hidden md:flex z-10'>
          <li className=' hover:text-green-600 font-semibold ease-in duration-150'><a href="#hero">Home</a></li>
          <li className=' hover:text-green-600 font-semibold ease-in duration-150'><a href="#hero">About us</a></li>
          <li className=' hover:text-green-600 font-semibold ease-in duration-150'><a href="#services">Services</a></li>
          <li className=' hover:text-green-600 font-semibold ease-in duration-150'><a href="#work">Work</a></li>
          <li className=' hover:text-green-600 font-semibold ease-in duration-150'><a href="#contact">Contact</a></li>
        </ul>
      </div>

      {/* ======== Menu Button ========= */}
      <div onClick={handleOpen} className='block md:hidden mr-2 z-20 ease-in-out duration-500 cursor-pointer'>{!isOpen ? <TbMenu2 size={30} /> : <IoMdClose size={30} />}</div>


      {/* ======== Mobile Navbar ========= */}
      <div
        className={!isOpen ? 'fixed top-[-100%]' : 'fixed md:hidden right-0 top-0 w-[100%] border-l h-full backdrop-blur-sm bg-white/30 border-l-2 border-bg-white/20 ease-in-out duration-500'} onClick={handleOpen} ref={menuRef}

      >
        <div className='text-center pt-40 font-semibold text-black'>
          <ul >
            <li className='py-4 font-bold text-lg hover:text-blue-400 ease-in duration-150'><a href="#home">Home</a></li>
            <li className='py-4 font-bold text-lg hover:text-blue-400 ease-in duration-150'><a href="#about">About us</a></li>
            <li className='py-4 font-bold text-lg hover:text-blue-400 ease-in duration-150'><a href="#services">Services</a></li>
            <li className='py-4 font-bold text-lg hover:text-blue-400 ease-in duration-150'><a href="#work">Work</a></li>
            <li className='font-bold text-lg pt-4 pb-8 hover:text-blue-400 ease-in duration-150'><a href="#contact">Contact</a></li>
          </ul>

          <div onClick={showWindowHandler} >
            <Button />
          </div>

          

        </div>
      </div>


      

    

    </div>
  );
};

export default Navbar;