import React, { useState } from 'react';
import logo_img from '../assets/logo.png';
import { PiCaretDownBold } from "react-icons/pi";

function Navber() {
    const [togle, settogle] = useState(false);
     
    const showSideMenu = () => {
        settogle(!togle);
    }
    const hidesideMenu =()=>{
        settogle(false)
    }

    return (
        <>
            <div className='Black-overlay w-full h-full fixed duration-500'onClick={hidesideMenu} style={{
                opacity: togle ? 1 : 0,
                visibility: togle ? "visible" : "hidden"
            }}>
                <div onClick={(e) =>{
                    e.stopPropagation();
                 
                } } 
                className='w-[500px] bg-white h-full absolute duration-[400ms]' style={{
                    left:togle ? "0%" :'-100%'
                }}></div>
            </div>
            <header className='p-[15px] shadow-xl'>
                <div className='max-w-[1200px] mx-auto border border-red-500 flex items-center'>
                    <div className='w-[120px]'>
                        <img src={logo_img} alt="logo" className='w-full' />
                    </div>
                    <div className=''>
                        <span className='font-bold border-b-[3px] border-black'>PESHAWAR</span>  LAHOR, ISLAMABAD
                        <button className='ml-[20px] rounded-full text-white px-4 py-2 bg-red-500 hover:bg-red-700'>
                            <PiCaretDownBold onClick={showSideMenu} className='cursor-pointer' />
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navber;
