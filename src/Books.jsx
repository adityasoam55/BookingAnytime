import React from 'react';
import { useCart } from './CartContext';

function Books({ title, edition, category }) {
  const { addToCart } = useCart();

  function handleButtonClick() {
    addToCart({ title, edition, category });
  }

  return (
    <div className='bg-white p-2 rounded-md m-2 max-w-xs'>
      <h3><span className='font-medium'>Book title:- </span>{title}</h3>
      <p className='text-sm'><span className='font-medium'>category:- </span>{category}</p>
      <p className='text-sm'><span className='font-medium'>Edition count:- </span>{edition}</p>
      <div className='w-full flex justify-center items-center py-2'>
        <button className='border border-black bg-tomato-default px-2 rounded-md outline-none text-white'
                onClick={handleButtonClick}>
          Add to cart
        </button>
      </div>
    </div>
  )
}

export default Books;
