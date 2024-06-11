import React from 'react';
import { useCart } from './CartContext';

function CartPage() {
    const { cart } = useCart();

    return (
        <div className='py-5 '>
            <h2 className='text-2xl font-bold mb-4 text-center'>Cart</h2>
            <div>
                {cart.length === 0 ? (
                    <p className='text-center bg-tomato-default text-white text-3xl '>Your cart is empty.</p>
                ) : (
                    <ul className='grid grid-cols-3 max-w-6xl mx-auto'>
                        {cart.map((item, index) => (
                            <li key={index} className='bg-white p-2 rounded-md m-2 max-w-xs'>
                                <h3><span className='font-medium'>Book title:- </span>{item.title}</h3>
                                <p className='text-sm'><span className='font-medium'>category:- </span>{item.category}</p>
                                <p className='text-sm'><span className='font-medium'>Edition count:- </span>{item.edition}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default CartPage;
