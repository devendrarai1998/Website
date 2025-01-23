// import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';  // Importing the Navbar component
import Home from "./pages/Home";
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import ProductDetail from './pages/ProductDetail';  // Importing ProductDetail page

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />  {/* Navbar will be visible on every page. */}

      {/* Page content starts below the Navbar */}
      <div className="mt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product />} />
          {/* Dynamic route for individual product detail pages */}
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;


