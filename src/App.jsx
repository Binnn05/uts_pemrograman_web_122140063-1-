import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import './App.css';

const App = () => {
  return (
    <div>
      <nav className="navbar">
        <h1 className="logo">Toko 63</h1>
        <h3 className="tagline">Selamat Datang di Toko 63</h3>
        <div className="nav-links">
          <Link to="/" className="nav-link">Beranda</Link>
          <Link to="/cart" className="nav-link">Keranjang</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<div>404 - Tidak Ditemukan</div>} />
      </Routes>
    </div>
  );
};

export default App;
