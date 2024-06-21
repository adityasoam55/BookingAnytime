import React from 'react';
import Button from './Button';
import SearchBar from './SearchBar';

function Header() {
    return (
        <div className='relative'>
            <section className="bg-cover bg-center h-96" >
                <div className="h-full flex flex-col justify-center items-center text-center text-white">
                    <div className='w-full h-full -z-10 relative'>
                        <img className="w-full h-full object-cover" src="https://r-xx.bstatic.com/xdata/images/xphoto/2880x868/346457038.jpeg?k=7cac75d50b046a991ab7993e9cac89d451d4cc371f108d0fe89d84ba1fc85f19&o=" alt="two people enjoying the day view" />
                    </div>
                    <div className='absolute w-full max-w-5xl '>
                        <div className='flex flex-col place-items-start text-left gap-3'>
                            <h1 className="text-5xl font-bold">The perfect home base <br /> for your special trip</h1>
                            <p className="text-2xl font-medium mt-2">Discover dreamy holiday homes all over the world</p>
                            <Button className={"bg-default"}>Find yours</Button>
                        </div>
                    </div>
                </div>
            </section>
            <SearchBar />
        </div>
    )
}

export default Header;
