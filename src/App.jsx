import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import CartPage from './CartPage';
import BooksListPage from './BooksListPage';
import { CartProvider } from './CartContext';

function App() {
  return (
    <CartProvider>
      <div className='min-h-screen bg-gray-100 overflow-scroll'>
        <NavBar />
        <div className='grow'>
          <Routes>
            <Route path="/cartpage/" element={<CartPage />} />
            <Route path="/" element={<BooksListPage />} />
          </Routes>
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
