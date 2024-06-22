import React from 'react';

function UniqueProperty({ title, img, location, rating, reviews, remark, price }) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={img} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4 ">
                <h2 className="text-lg font-medium">{title}</h2>
                <p className="text-gray-600 text-sm">{location}</p>
                <span className='mt-2'>
                    <span className="text-white font-bold bg-default rounded-t rounded-r mr-0.5 pl-1">{rating} </span><span className="text-gray-600 text-sm">{remark} -</span><span className='text-gray-600 text-sm'> {reviews} reviews</span>
                </span>
                <div className="text-gray-900 font-bold mt-2 self-end"><span className='text-sm font-normal' >Starting from </span>{price}</div>
            </div>
        </div>
    )
}

export default UniqueProperty;
