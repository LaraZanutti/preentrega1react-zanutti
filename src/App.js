import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <ItemListContainer producto="celular" />
    </div>
  );
}

export default App;
