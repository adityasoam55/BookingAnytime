import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="flex flex-col items-center">
            <div className="bg-blue-800 text-white text-center py-10 w-full">
                <h2 className="text-2xl font-bold">Save time, save money!</h2>
                <p>Sign up and we'll send</p>
                <div className="mt-4 flex justify-center">
                    <input type="email" placeholder="Your Email" className="px-4 py-2 rounded-l-md outline-none text-gray-700" />
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md">Sign Up</button>
                </div>
            </div>

            {/* <!-- Links Section --> */}
            <div className="bg-white text-blue-700 py-10 w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                <div>
                    <ul>
                        <li><a href="#" >Regions</a></li>
                        <li><a href="#">Countries</a></li>
                        <li><a href="#">Cities</a></li>
                        <li><a href="#">Districts</a></li>
                        <li><a href="#">Airports</a></li>
                        <li><a href="#">Hotels</a></li>
                        <li><a href="#">Places of interest</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><Link to="/" >Home</Link></li>
                        <li><a href="#">Apartments</a></li>
                        <li><a href="#">Resorts</a></li>
                        <li><a href="#">Villas</a></li>
                        <li><a href="#">B&Bs</a></li>
                        <li><a href="#">Guest Houses</a></li>
                        <li><a href="#">Places of interest</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><a href="#" >Unique places to stay</a></li>
                        <li><a href="#">All destinations</a></li>
                        <li><a href="#">All flight destinations</a></li>
                        <li><a href="#">All holiday destinations</a></li>
                        <li><a href="#">Reviews</a></li>
                        <li><a href="#">Discover monthly stays</a></li>
                        <li><a href="#">Places of interest</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><a href="#" >Car hire</a></li>
                        <li><a href="#">Flight finder</a></li>
                        <li><a href="#">Restaurant reservations</a></li>
                        <li><a href="#">Booking.com for Travel Agents</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;
