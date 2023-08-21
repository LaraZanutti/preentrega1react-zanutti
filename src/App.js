import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/cat/:nombre" element={<ItemListContainer />} />
          <Route path="/carrito" element={<p>carrito</p>} />
          <Route path="/producto/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<p>404</p>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
