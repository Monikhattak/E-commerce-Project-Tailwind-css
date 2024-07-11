import React from 'react';
import { food_list } from '../../assets/assets';

function Card() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Our Delicious Menu</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {food_list.map(({ id, name, title, description, price, image }) => (
          <div 
            key={id} 
            className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            <img src={image} alt={name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2 text-gray-800">{name}</h2>
              <p className="text-sm text-gray-500 mb-4">{title}</p>
              <p className="text-gray-700 mb-4">{description}</p>
              <p className="text-lg font-semibold text-gray-900 mb-4">${price}</p>
              <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
