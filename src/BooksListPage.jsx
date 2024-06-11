import React, { useEffect, useState } from 'react';
import { getBookList } from './api';
import BookList from './BookList';

function BooksListPage() {
    const [productList, setProductList] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(function () {
        const xyz = getBookList();

        xyz.then(function (products) {
            setProductList(products);
        })
    }, [])

    let newData = productList.filter(function (item) {
        const title = item.title.toLowerCase();

        return title.indexOf(query) != -1;
    })


    function handleSearch(e) {
        console.log("handle search running");
        const newQuery = e.target.value.toLowerCase();
        setQuery(newQuery);
    }

    return (
        <div>
            <div className='flex justify-center gap-3 py-2'>
                <label htmlFor="search" className='font-medium'>Search by book name:</label>
                <input className='border border-black rounded-sm pl-3 outline-none'
                    type="text"
                    placeholder='search'
                    value={query}
                    id="search"
                    onChange={handleSearch}
                />
            </div>
            <BookList products={newData} />
        </div>
    )
}

export default BooksListPage;
