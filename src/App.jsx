import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import { ProductProvider } from "./context/product/ProductContext";
import Card from "./pages/Card";

const App = () => {
  return (
    <Router>
      <ProductProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/card/:param" element={<Card />} />
        </Routes>
        <Footer />
      </ProductProvider>
    </Router>
  );
};

export default App;
