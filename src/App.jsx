import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Test from './Test';
import Navbar from './components/Navbar';
import Header from './components/Header';
import UniquePropertiesList from './components/UniquePropertiesList';
import PropertyTypeList from './components/PropertyTypeList';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <UniquePropertiesList />
      <PropertyTypeList />
      {/* <Routes >
        <Route path="/" element={<Test />} />
      </Routes> */}
    </div>
  );
}

export default App;
