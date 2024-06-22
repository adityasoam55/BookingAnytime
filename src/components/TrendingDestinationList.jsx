import React from 'react'
import { dummyTrendingDestination } from '../dummyData'
import TrendingDestination from './TrendingDestination';

function TrendingDestinationList() {
    const dummyData = dummyTrendingDestination;
    return (
        <div className='bg-gray-100 px-8'>
            <div className="w-full container max-w-5xl mx-auto p">
                <h1 className="text-3xl font-semibold mb-2">Trending destinations</h1>
                <p className="mb-6">Travellers searching for Italy also booked these</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        dummyData.map((item) => {
                            return <TrendingDestination key={item.id} {...item} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default TrendingDestinationList;
