import React, { useEffect, useState } from 'react';
import { fetchHotelImage } from '../api';

function Hotel({ label, locationName, }) {
    const [imageUrl, setImageUrl] = useState("https://via.placeholder.com/300");

    useEffect(() => {
        async function getImage() {
            const image = await fetchHotelImage(label || locationName);
            setImageUrl(image);
        }
        getImage();
    }, [label, locationName]);

    return (
        <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 h-64">
                    <img src={imageUrl} alt="Apartment" className="rounded-lg w-full h-full object-cover" />
                </div>
                <div className="md:w-2/3 md:ml-4 mt-4 md:mt-0">
                    <h3 className="text-2xl font-bold">{label}</h3>
                    <p className="text-gray-700">{locationName}</p>
                    <div className="flex items-center mt-2">
                        <span className="bg-green-500 text-white px-2 py-1 rounded-lg text-sm">Free airport taxi</span>
                        <span className="bg-blue-500 text-white px-2 py-1 rounded-lg text-sm ml-2">Excellent 8.9</span>
                    </div>
                    <p className="mt-2">Studio Apartment with Air conditioning</p>
                    <p className="text-gray-700">Entire studio, 1 bathroom, 21m 1 full bed</p>
                    <p className="text-green-600 font-bold mt-2">Free cancellation</p>
                    <p className="text-gray-600">You can cancel later, so lock in this great price today!</p>
                    <div className="flex items-center justify-between mt-4">
                        <span className="text-2xl font-bold">$220</span>
                        <span className="text-gray-600">Includes taxes/fees</span>
                        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">See availability</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hotel;
