import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import UniquePropertiesList from './components/UniquePropertiesList';
import PropertyTypeList from './components/PropertyTypeList';
import TrendingDestinationList from './components/TrendingDestinationList';
import ExploreList from './components/ExploreList';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <UniquePropertiesList />
      <PropertyTypeList />
      <TrendingDestinationList />
      <ExploreList />
      {/* <Routes >
        <Route path="/" element={<Test />} />
      </Routes> */}
    </div>
  );
}

export default App;
