import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import WhoWereAre from './components/WhoWereAre';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/cat/:nombre" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/producto/:id" element={<ItemDetailContainer />} />
            <Route path="/checkout/:id" element={<Checkout />} />
            <Route path="/whoWereAre" element={<WhoWereAre />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
