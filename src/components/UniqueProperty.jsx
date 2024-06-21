import React from 'react';

function UniqueProperty({ title, img, location, rating, reviews, remark, price }) {
    return (
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={img} alt="Wochenbrunner Chalets" class="w-full h-48 object-cover" />
            <div class="p-4 ">
                <h2 class="text-lg font-medium">{title}</h2>
                <p class="text-gray-600 text-sm">{location}</p>
                <span className='mt-2'>
                    <span class="text-white font-bold bg-default rounded-t rounded-r mr-0.5 pl-1">{rating} </span><span class="text-gray-600 text-sm">{remark} -</span><span className='text-gray-600 text-sm'> {reviews} reviews</span>
                </span>
                <div class="text-gray-900 font-bold mt-2 self-end"><span className='text-sm font-normal' >Starting from </span>{price}</div>
            </div>
        </div>

        /* <h2 class="text-2xl font-bold mb-4">Browse by property type</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="hotels.jpg" alt="Hotels" class="w-full h-48 object-cover" />
                <div class="p-4">
                    <h3 class="text-lg font-bold">Hotels</h3>
                </div>
            </div>
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="apartments.jpg" alt="Apartments" class="w-full h-48 object-cover" />
                <div class="p-4">
                    <h3 class="text-lg font-bold">Apartments</h3>
                </div>
            </div>
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="resorts.jpg" alt="Resorts" class="w-full h-48 object-cover" />
                <div class="p-4">
                    <h3 class="text-lg font-bold">Resorts</h3>
                </div>
            </div>
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="villas.jpg" alt="Villas" class="w-full h-48 object-cover" />
                <div class="p-4">
                    <h3 class="text-lg font-bold">Villas</h3>
                </div>
            </div>
        </div> */
    )
}

export default UniqueProperty;
