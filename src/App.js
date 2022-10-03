import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from './components/Navigation';
import Products from './components/Products';
import Checkout from './components/Checkout';
import {CartProvider} from "./context/CartContext";
import { MantineProvider } from '@mantine/core';

function App() {
  return (
      <MantineProvider withGlobalStyles withNormalizeCSS
          theme={{
            // Override any other properties from default theme
            fontFamily: 'Open Sans, sans serif',
            spacing: { xs: 15, sm: 20, md: 25, lg: 30, xl: 40 },
          }}
      >
        <div className="App">
          <CartProvider>
            <BrowserRouter>
              <Navigation />
              <Routes>
                <Route path={'/mentoring/products/'} element={<Products/>} />
                <Route path={'/mentoring/checkout/'} element={<Checkout/>} />
              </Routes>
            </BrowserRouter>
          </CartProvider>
        </div>
      </MantineProvider>
  );
}

export default App;
