import React from 'react';
import { FaBed, FaCar, FaPlane, FaTaxi } from 'react-icons/fa';
import Button from './Button';

function Navbar() {
    return (
        <div className="bg-default text-white py-3">
            <nav>
                <div className="container max-w-5xl mx-auto flex justify-between items-center px-4">
                    <div className="flex items-center">
                        <span className="text-2xl font-semibold">Booking.com</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="bg-white text-light font-semibold py-1 px-3 rounded">Register</button>
                        <button className="bg-white text-light font-semibold py-1 px-3 rounded">Signin</button>

                    </div>
                </div>
            </nav>

            <div className="container max-w-5xl mx-auto flex items-center gap-10 mb-3 mt-5 pl-2.5">
                <div className="flex items-center gap-2.5">
                    <FaBed />
                    <span>Stays</span>
                </div>
                <div className="flex items-center gap-2.5">
                    <FaPlane />
                    <span>Flights</span>
                </div>
                <div className="flex items-center gap-2.5">
                    <FaCar />
                    <span>Car rentals</span>
                </div>
                <div className="flex items-center gap-2.5">
                    <FaBed />
                    <span>Attractions</span>
                </div>
                <div className="flex items-center gap-2.5">
                    <FaTaxi />
                    <span>Airport taxis</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
