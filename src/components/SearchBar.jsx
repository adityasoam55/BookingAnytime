import React, { useState } from 'react';
import { FaBed } from 'react-icons/fa';
import { FaCalendarDays, FaPerson } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

function SearchBar() {
    const [destination, setDestination] = useState("");
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState(
        {
            adult: 1,
            children: 0,
            room: 1,
        }
    );

    const navigate = useNavigate();

    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev, [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            };
        });
    }

    const handleSearch = () => {
        navigate("/hotels", { state: { destination, date, options } });
    }
    return (
        <div className='w-full flex justify-center'>
            <div className="h-8 border-4 border-border flex justify-around items-center py-6 space-x-2 bg-white shadow-lg mx-auto w-full max-w-5xl rounded absolute -bottom-6">
                <div className="flex items-center gap-2.5">
                    <FaBed className='text-gray-300' />
                    <input
                        type="text" placeholder='Where are you going?'
                        className='outline-none text-gray-700 border-none'
                        onChange={(e) => setDestination(e.target.value)}
                    />
                </div>
                <div className="flex items-center gap-2.5">
                    <FaCalendarDays className='text-gray-300' />
                    <span
                        onClick={() => {
                            setOpenDate(!openDate);
                        }}
                        className='text-gray-300 cursor-pointer'>{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                    {openDate && <DateRange
                        editableDateInputs={true}
                        onChange={item => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        className='absolute z-20 top-12'
                    />}
                </div>
                <div className="flex items-center gap-2.5">
                    <FaPerson className='text-gray-300' />
                    <span onClick={() => {
                        setOpenOptions(!openOptions);
                    }}
                        className='text-gray-300 cursor-pointer'>{`${options.adult} adult  ${options.children} children  ${options.room} room `}</span>
                    {openOptions && <div
                        className="absolute z-20 top-12 bg-white rounded-sm text-gray-700">
                        <div className="flex justify-between m-2.5 w-48">
                            <span className="optionText">Adult</span>
                            <div className="flex items-center gap-2.5 bg-white text-black">
                                <button
                                    disabled={options.adult <= 1}
                                    className="h-7 w-7 cursor-pointer bg-white text-light border border-light"
                                    onClick={() => handleOption("adult", "d")}
                                >-</button>
                                <span className="optionCounterNumber">{options.adult}</span>
                                <button className="h-7 w-7 cursor-pointer bg-white text-light border border-light" onClick={() => handleOption("adult", "i")}>+</button>
                            </div>
                        </div>
                        <div className="flex justify-between m-2.5 w-48">
                            <span className="optionText">Children</span>
                            <div className="flex items-center gap-2.5 bg-white text-black">
                                <button
                                    disabled={options.children <= 0}
                                    className="h-7 w-7 cursor-pointer bg-white text-light border border-light" onClick={() => handleOption("children", "d")}>-</button>
                                <span className="optionCounterNumber">{options.children}</span>
                                <button className="h-7 w-7 cursor-pointer bg-white text-light border border-light" onClick={() => handleOption("children", "i")}>+</button>
                            </div>
                        </div>
                        <div className="flex justify-between m-2.5 w-48">
                            <span className="optionText">Room</span>
                            <div className="flex items-center gap-2.5 bg-white text-black">
                                <button
                                    disabled={options.room <= 1}
                                    className="h-7 w-7 cursor-pointer bg-white text-light border border-light" onClick={() => handleOption("room", "d")}>-</button>
                                <span className="optionCounterNumber">{options.room}</span>
                                <button className="h-7 w-7 cursor-pointer bg-white text-light border border-light" onClick={() => handleOption("room", "i")}>+</button>
                            </div>
                        </div>
                    </div>}
                </div>
                <div className="headerSearchItem">
                    <button
                        onClick={handleSearch}
                        className='bg-light px-2 py-1.5 rounded-sm '
                    >Search</button>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;
