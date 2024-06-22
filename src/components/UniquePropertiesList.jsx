import React from 'react';
import UniqueProperty from './UniqueProperty';
import { dummyUniqueProperty } from '../dummyData';

function UniquePropertiesList() {
    const data = dummyUniqueProperty;
    return (
        <div className="bg-gray-100 px-8 pt-10">
            <div className="container mx-auto max-w-5xl">
                <h1 className="text-3xl font-medium mb-2">Stay at our top unique properties</h1>
                <p className="text-lg mb-5">From castles and villas to boats and igloos, we've got it all</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-0">
                    {
                        data.map((item) => {
                            return <UniqueProperty key={item.id} {...item}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default UniquePropertiesList;
