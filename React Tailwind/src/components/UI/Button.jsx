import React from 'react';
import { BsFillSendFill } from 'react-icons/bs'

const Button = () => {
  return (
    <div className='center'>
      <a href="#contact"><button className='text-white text-sm font-semibold border border-[#fff] tracking-wide bg-[#0a2540] rounded-full py-2 px-4 cursor-pointer transition-all ease-in duration-150 hover:opacity-75 center gap-2'>
        <BsFillSendFill /> <p>Let's Talk</p>
      </button></a>

    </div>
  );
};

export default Button;

