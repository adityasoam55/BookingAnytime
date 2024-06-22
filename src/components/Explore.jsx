import React from 'react';

function Explore({title, img, properties}) {
    return (
        <div className="flex-none bg-white rounded-lg shadow-lg overflow-hidden w-48 mb-2">
            <img src={img} alt={title} className="w-full h-28 object-cover" />
            <div className="p-4">
                <h2 className="text-lg font-bold">{title}</h2>
                <p className="text-sm text-gray-500">{properties}</p>
            </div>
        </div>
    )
}

export default Explore;
