import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { menu_list } from '../../assets/assets';
import { useState } from "react";

function Category() {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    if (slide == menu_list.length - 8) return false; 
    setSlide(slide + 3);
  };

  const prevSlide = () => {
    if (slide == 0) return false;
    setSlide(slide - 3);
  };

  return (
    <div className='max-w-[1200px] mx-auto'>
      <div className='flex my-3 items-center justify-between'>
        <div className='text-[25px] font-bold'>What's on Your Mind?</div>
        <div className='flex'>
          <div 
            className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2' 
            onClick={prevSlide}
          >
            <FaArrowLeft />
          </div>
          <div 
            className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2' 
            onClick={nextSlide}
          >
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div className='overflow-hidden'>
        <div 
          className='flex transition-transform duration-300' 
          style={{ transform: `translateX(-${slide * 100}px)` }} 
        >
          {menu_list.map((item, index) => (
            <div 
              key={index} 
              className='flex-shrink-0 w-[100px] mx-2 text-center'
            >
              <img src={item.menu_image} alt={item.menu_name} className='w-full object-cover rounded-lg' />
              <p className='mt-2'>{item.menu_name}</p>
            </div>
            
          ))}
          
        </div>
        <hr className="my-20 border[1px]"/>
      </div>
      
    </div>
  );
}

export default Category;
