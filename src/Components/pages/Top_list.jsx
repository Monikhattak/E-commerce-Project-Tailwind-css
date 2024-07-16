import React, { useState, useRef, useEffect } from 'react';
import { top_list } from '../../assets/assets';
import { FaFilter, FaSort, FaUtensils, FaShoppingCart, FaPepperHot, FaHamburger } from 'react-icons/fa';

function TopList() {
  const [isAtTop, setIsAtTop] = useState(false);
  const componentRef = useRef(null);

  const handleScroll = () => {
    if (componentRef.current) {
      const topPosition = componentRef.current.getBoundingClientRect().top;
      setIsAtTop(topPosition <= 0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slideInUp');
        } else {
          entry.target.classList.remove('animate-slideInUp');
        }
      });
    });

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => observer.observe(card));

    return () => {
      cards.forEach(card => observer.unobserve(card));
    };
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto p-6" ref={componentRef}>
      <div className="flex my-3 items-center justify-between">
        <div className="text-3xl font-bold text-[#333]">Top Restaurant Chains Online</div>
      </div>
      <div className={`${isAtTop ? 'fixed top-0 z-[9999] bg-white w-full left-0' : ''} max-w-[1200px] mx-auto flex flex-wrap items-center my-5 gap-3`}>
        <div className="p-3 rounded-md shadow flex items-center">
          <FaFilter className="mr-2" />
          <span>Filter</span>
        </div>
        <div className="p-3 rounded-md shadow flex items-center">
          <FaSort className="mr-2" />
          <span>Sort By</span>
        </div>
        <div className="p-3 rounded-md shadow flex items-center">
          <FaUtensils className="mr-2" />
          <span>Restaurant</span>
        </div>
        <div className="p-3 rounded-md shadow flex items-center">
          <FaShoppingCart className="mr-2" />
          <span>Grocery</span>
        </div>
        <div className="p-3 rounded-md shadow flex items-center">
          <FaPepperHot className="mr-2" />
          <span>Spicy</span>
        </div>
        <div className="p-3 rounded-md shadow flex items-center">
          <FaHamburger className="mr-2" />
          <span>Fast Food</span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {top_list.map(({ id, name, title, description, price, image }) => (
          <div 
            key={id} 
            className="card bg-gradient-to-br from-white to-gray-100 rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300"
          >
            <img src={image} alt={name} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 text-[#111]">{name}</h2>
              <p className="text-gray-600 mb-4">{description}</p>
              <p className="text-gray-500 mb-2 italic">{title}</p>
              <div className="flex items-center justify-between mt-4">
                <p className="text-green-600 font-bold text-lg">${price}</p>
                <button className="bg-gradient-to-r from-cyan-700 to-gray-500 text-white py-2 px-5 rounded-full hover:from-green-500 hover:to-green-700">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="my-20 border-[1px]"/>
    </div>
  );
}

export default TopList;
