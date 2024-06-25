import React, { useState } from 'react';
import Hotel from './Hotel';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';

function HotelList() {
  const [openDate, setOpenDate] = useState(false);
  const location = useLocation();
  const { destination, date, options, hotels, locations } = location.state;

  return (
    <div className='bg-gray-100'>
      <div className="container max-w-5xl mx-auto p-4">
        <div className="flex flex-col lg:flex-row lg:space-x-4">
          {/* <!-- Search Section --> */}
          <div className='flex-0 bg-border p-2.5 rounded-md sticky top-2.5 h-max '>
            <h1 className='font-bold text-gray-700'>Search</h1>
            <div>
              <label className='text-sm'>Destination:-</label>
              <input className='h-8 border-none p-1 outline-none' placeholder={destination} type="text" />
            </div>
            <div className='flex flex-col gap-1 mb-2.5'>
              <label>Chech-in date</label>
              <span onClick={() => setOpenDate(!openDate)}
                className='h-8 bg-white p-1 flex items-center justify-center cursor-pointer'>{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
              {openDate && <DateRange
                onChange={(item) => setDate([item.selection])}
                minDate={new Date()}
                ranges={date}
              />}
            </div>
            <div className='p-2.5'>
              <label >Options</label>
              <div className='flex justify-between mb-2.5 text-gray-700 text-sm mt-2'>
                <span>Min price <small>per night</small></span>
                <input className="w-12 pl-2 outline-none" type="number" />
              </div>
              <div className='flex justify-between mb-2.5 text-gray-700 text-sm'>
                <span>Max price <small>per night</small></span>
                <input className="w-12 pl-2 outline-none" type="number" />
              </div>
              <div className='flex justify-between mb-2.5 text-gray-700 text-sm'>
                <span>Adult</span>
                <input className="w-12 pl-2 outline-none" type="number" min={1} placeholder={options.adult} />
              </div>
              <div className='flex justify-between mb-2.5 text-gray-700 text-sm'>
                <span>Children</span>
                <input className="w-12 pl-2 outline-none" type="number" min={0} placeholder={options.children} />
              </div>
              <div className='flex justify-between mb-2.5 text-gray-700 text-sm'>
                <span>Room</span>
                <input className="w-12 pl-2 outline-none" type="number" min={0} placeholder={options.room} />
              </div>
            </div>
            <button className='p-2.5 bg-light text-white border-none w-full font-medium cursor-pointer'>Search</button>
          </div>

          {/* search results */}
          <div className="flex-grow mt-4 lg:mt-0">

            {/* Locations */}
            <div className='flex flex-wrap justify-evenly'>
              {
                locations.map((item) => {
                  return (
                    <div key={item.id} className='mb-2'>
                      <div className="items-center bg-white border rounded-lg shadow-lg p-2">
                        <div>
                          <h2 className="text-sm font-medium mb-2">{item.fullName}</h2>
                          <p className="text-gray-600 mt-2 text-xs">{item.hotelsCount} properties</p>
                        </div>
                      </div>
                    </div>
                  );
                })
              }
            </div>

            {/* Hotels */}
            {
              hotels.map(function (item) {
                return <Hotel key={item.id} {...item} />
              })
            }
          </div>
        </div>
      </div>

    </div>
  )
}

export default HotelList;
