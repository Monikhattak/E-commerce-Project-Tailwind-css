import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { menu_list } from '../../assets/assets';
import { useState } from "react";

function Category() {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    if (slide >= menu_list.length - 3) return;
    setSlide(slide + 1);
  };

  const prevSlide = () => {
    if (slide <= 0) return;
    setSlide(slide - 1);
  };

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex my-3 items-center justify-between">
        <div className="text-3xl font-bold">What's on Your Mind?</div>
        <div className="flex">
          <button
            className={`cursor-pointer flex justify-center items-center w-10 h-10 bg-[#e2e2e7] rounded-full mx-2 ${
              slide === 0 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            onClick={prevSlide}
            disabled={slide === 0}
          >
            <FaArrowLeft className="text-gray-600" />
          </button>
          <button
            className={`cursor-pointer flex justify-center items-center w-10 h-10 bg-[#e2e2e7] rounded-full mx-2 ${
              slide >= menu_list.length - 3 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            onClick={nextSlide}
            disabled={slide >= menu_list.length - 3}
          >
            <FaArrowRight className="text-gray-600" />
          </button>
        </div>
      </div>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${slide * (100 / 3)}%)` }}
        >
          {menu_list.map((item, index) => (
            <div key={index} className="flex-shrink-0 w-1/3 md:w-[100px] mx-2 text-center">
              <img src={item.menu_image} alt={item.menu_name} className="w-full h-32 md:h-[100px] object-cover rounded-lg" />
              <p className="mt-2">{item.menu_name}</p>
            </div>
          ))}
        </div>
        <hr className="my-8 border-[1px] border-gray-300" />
      </div>
    </div>
  );
}

export default Category;
