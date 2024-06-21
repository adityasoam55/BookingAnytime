import React from 'react';

function PropertyType({title, img}) {
    return (
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={img} alt="Hotels" class="w-full h-48 object-cover" />
            <div class="p-4">
                <h3 class="text-md font-bold">{title}</h3>
            </div>
        </div>
    )
}

export default PropertyType;
