import './App.css';
import React  from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from './components/Navigation/Navigation';
import Products from './components/Products/Products';
import Checkout from './components/Checkout/Checkout';
import {CartProvider} from "./context/CartContext";
import { MantineProvider } from '@mantine/core';
import NotFound from './components/NotFound/NotFound';
import NotFoundList from './components/NotFound/NotFoundList';

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
                <Route path={'/'} element={<Products/>} />
                <Route path={'/mentoring/products/'} element={<Products/>} />
                <Route path={'/mentoring/checkout/'} element={<Checkout/>} />
                <Route path={'/mentoring/tests/'} element={<Checkout/>} />
                <Route path={'/mentoring/*'} element={<NotFoundList/>} />
                <Route path={'*'} element={<NotFound/>} />
              </Routes>
            </BrowserRouter>
          </CartProvider>
        </div>
      </MantineProvider>
  );
}

export default App;
