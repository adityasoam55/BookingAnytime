import React from 'react';
import Books from './Books';

function BookList({ products }) {
  return (
    <div className='grid grid-cols-3 max-w-6xl mx-auto'>
    {
      products.map(function (item) {
        return (

          <Books
            key={item.key}
            // id={item.edition_key}
            title={item.title}
            edition={item.edition_count}
            category={item.type}
          />

        );
      })
    }
  </div>
  )
}

export default BookList;
