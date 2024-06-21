import React from 'react';
import UniqueProperty from './UniqueProperty';
import { dummyUniqueProperty } from '../dummyData';

function UniquePropertiesList() {
    const data = dummyUniqueProperty;
    return (
        <div class="bg-gray-100 p-8">
            <div class="container mx-auto max-w-5xl">
                <h1 class="text-3xl font-medium mb-4">Stay at our top unique properties</h1>
                <p class="text-lg mb-5">From castles and villas to boats and igloos, we've got it all</p>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {
                        data.map((item) => {
                            return <UniqueProperty {...item}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default UniquePropertiesList;
