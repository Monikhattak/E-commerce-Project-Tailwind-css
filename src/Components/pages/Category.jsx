import React, { useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { menu_list } from '../../assets/assets';

function Category() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left'
        ? scrollLeft - clientWidth
        : scrollLeft + clientWidth;

      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className='max-w-[1200px] mx-auto'>
      <div className='flex my-3 items-center justify-between'>
        <div className='text-[25px] font-bold'>What's on Your Mind?</div>
        <div className='flex'>
          <div 
            className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2' 
            onClick={() => scroll('left')}
          >
            <FaArrowLeft />
          </div>
          <div 
            className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2' 
            onClick={() => scroll('right')}
          >
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div 
        className='flex overflow-x-auto scrollbar-hide snap-x snap-mandatory' 
        ref={scrollRef}
      >
        {menu_list.map((item, index) => (
          <div key={index} className='flex-shrink-0 w-[100px] mx-2 text-center snap-start'>
            <img src={item.menu_image} alt={item.menu_name} className='w-full  object-cover rounded-lg' />
            <p className='mt-2'>{item.menu_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
