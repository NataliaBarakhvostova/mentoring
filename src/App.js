import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from './components/Navigation';
import Products from './components/Products';
import Checkout from './components/Checkout';
import {CartProvider} from "./context/CartContext";

function App() {
  return (
    <div className="App">
        <CartProvider>
          <BrowserRouter>
            <Navigation />
            <Routes>
              <Route path={'/'} element={<Products/>} />
              <Route path={'/checkout'} element={<Checkout/>} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
    </div>
  );
}

export default App;
