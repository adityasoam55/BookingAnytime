import React from 'react';
import UniquePropertiesList from './UniquePropertiesList';
import PropertyTypeList from './PropertyTypeList';
import TrendingDestinationList from './TrendingDestinationList';
import ExploreList from './ExploreList';
import Header from './Header';

function Home() {
    return (
        <div>
            <Header />
            <UniquePropertiesList />
            <PropertyTypeList />
            <TrendingDestinationList />
            <ExploreList />
        </div>
    );
}

export default Home;
