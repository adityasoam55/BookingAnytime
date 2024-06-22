import React from 'react';

function PropertyType({title, img}) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={img} alt="Hotels" className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-md font-bold">{title}</h3>
            </div>
        </div>
    )
}

export default PropertyType;
