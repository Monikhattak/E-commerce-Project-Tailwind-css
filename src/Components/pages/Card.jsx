import React, { useState, useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { food_list } from '../../assets/assets';
import Top_list from './Top_list';

function Card() {
  const [slide, setSlide] = useState(0);
  const scrollRef = useRef(null);
  const cardWidth = 300; 
  const cardsPerView = 4; 
  const maxSlide = food_list.length - cardsPerView;

  const nextSlide = () => {
    if (slide >= maxSlide) return;
    setSlide(slide + 1);
    scrollRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
  };

  const prevSlide = () => {
    if (slide <= 0) return;
    setSlide(slide - 1);
    scrollRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
  };

  return (
    <div className='max-w-[1200px] mx-auto'>
      <div className='flex my-3 items-center justify-between'>
      <div className='text-[25px] font-bold'>Top Restaurant Chains In Islamabad</div>
        <div className='flex'>
          <div 
            className={`cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 ${slide === 0 && 'opacity-50 cursor-not-allowed'}`} 
            onClick={prevSlide}
          >
            <FaArrowLeft />
          </div>
          <div 
            className={`cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 ${slide >= maxSlide && 'opacity-50 cursor-not-allowed'}`} 
            onClick={nextSlide}
          >
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div className='overflow-hidden' ref={scrollRef}>
        <div className='flex'>
          {food_list.map(({ id, name, title, description, price, image }) => (
            <div 
              key={id} 
              className='flex-shrink-0 w-[300px] mx-2 text-center bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300'
            >
              <img src={image} alt={name} className='w-full h-64 object-cover' />
              <div className="p-4">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">{name}</h2>
                <p className="text-sm text-gray-500 mb-4">{title}</p>
                <p className="text-gray-700 mb-4">{description}</p>
                <button className="bg-gradient-to-r from-cyan-700 to-gray-500 text-white py-2 px-5 rounded-full hover:from-green-500 hover:to-green-700">
                 ADD Cart  ${price}
                </button>
              </div>
            </div>
          ))}
        </div>
        <hr className="my-20 border-1"/>
      </div>
      <Top_list/>
    </div>
  );
}

export default Card;