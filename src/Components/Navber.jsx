import React, { useState } from 'react';
import logo_img from '../assets/logo.png';
import { PiCaretDownBold } from "react-icons/pi";
import { BiSearch } from "react-icons/bi";
import { RiDiscountPercentFill } from "react-icons/ri";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { FcBusinessman } from "react-icons/fc";
import { IoCartOutline } from "react-icons/io5";
function Navber() {
    const [togle, settogle] = useState(false);
     
    const showSideMenu = () => {
        settogle(!togle);
    }
    const hidesideMenu =()=>{
        settogle(false)
    }
    const link =[
        {
            icon:   <BiSearch />,
            name:"Search"
        },
        {
            icon:   <RiDiscountPercentFill />,
            name:"Offer",
            sup: "New"
        },
        {
            icon:  <IoIosHelpCircleOutline />,
            name:"Help"
        },
        {
            icon:    <FcBusinessman />,
            name:"SignIn"
        },
        {
            icon:    <IoCartOutline />,
            name:"Cart"
        }
    ]

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
            <header className='p-[8px] shadow-xl tex-[#686b78] sticky top-0  bg-white z-[9999] '>
                <div className='max-w-[1200px] mx-auto border\ flex items-center'>
                    <div className='w-[120px]'>
                        <img src={logo_img} alt="logo" className='w-full' />
                    </div>
                    <div className=''>
                        <span className='font-bold border-b-[3px] border-black'>PESHAWAR</span>  LAHOR, ISLAMABAD
                        <button className='ml-[20px] rounded-full text-white px-4 py-2 bg-red-500 hover:bg-red-700'>
                            <PiCaretDownBold onClick={showSideMenu} className='cursor-pointer' />
                        </button>
                    </div>
                    <nav className=' flex list-none gap-10  ml-auto text-[18px] font-semibold'>
                       {
                        link.map(
                            (link,index)=>{
                               return <li key={index}  className='flex cursor-pointer hover:text-[#e78544] items-center gap-2'>
                               {link.icon}
                               {link.name}
                               <sup> {link.sup}</sup>
                                </li>

                            }
                        )
                       } 
                   
        
                </nav>
                </div>
           
            </header>
        </>
    )
}

export default Navber;
