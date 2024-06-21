import React from 'react'
import PropertyType from './PropertyType'
import { dummyPropertyType } from '../dummyData'

function PropertyTypeList() {
    let dummyData = dummyPropertyType;

    return (
        <div class="bg-gray-100 p-8">
            <div class="container mx-auto max-w-5xl">
                <h2 class="text-2xl font-bold mb-4">Browse by property type</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {
                        dummyData.map((item) => {
                            return <PropertyType {...item}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default PropertyTypeList
