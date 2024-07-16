import React from 'react'
import {popularCities} from '../../assets/assets'

function ProductList() {
  return (
    <div className="max-w-[1200px] mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">We Deliver To These Popular Cities</h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {popularCities.map(({ id, name }) => (
          <li key={id} className="p-4 bg-white shadow rounded-lg text-center">
            {name}
          </li>
        ))}
      </ul>
      <hr className="  bg-red-500 my-20 border[5px]"/>
    </div>
  )
}

export default ProductList
