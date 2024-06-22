import React from 'react';

function TrendingDestination({title, img}) {
  return (
    <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={img} alt={title} className="w-full h-48 object-cover" />
      <div className="w-full h-full absolute bottom-0 left-0 bg-black bg-opacity-20 text-white p-4">
        <h2 className="text-xl font-bold">{title} <span className="fi fi-it"></span></h2>
      </div>
    </div>
  )
}

export default TrendingDestination;
