import React from 'react';
import { Link } from 'react-router-dom';
import { ImBooks } from "react-icons/im";


function NavBar() {
    return (
        <div className='flex justify-between items-center text-center bg-tomato-default w-full py-3 px-4'>
            <span className='font-medium'>Personal-Bookshelf</span>
            <div className=' flex justify-center gap-5 font-medium max-md:text-sm'>
                <Link  className="hover:underline underline-offset-8" to="/">Home</Link>
            </div>
            <div className='relative flex justify-center'>
                <Link to="/cartpage" className='text-3xl'><ImBooks /></Link>
            </div>
        </div>
    )
}

export default NavBar
