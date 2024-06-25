import React from 'react';
import { dummyExplore } from '../dummyData';
import Explore from './Explore';

function ExploreList() {
    const newData = dummyExplore;
    return (
        <div className='bg-gray-100 px-8'>
            <div className="container max-w-5xl mx-auto py-8">
                <h1 className="text-3xl font-semibold mb-2">Explore India</h1>
                <p className="mb-6">These popular destinations have a lot to offer</p>
                <div className="flex overflow-x-auto space-x-4">
                    {
                        newData.map((item) => {
                          return  <Explore key={item.id} {...item}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ExploreList;
