import './App.css';
import MyRoot from './components/MyRoot';
import { OrderContainer } from './containers/OrderContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">栗﨑園</header>
      <OrderContainer.Provider>
        <MyRoot />
      </OrderContainer.Provider>
    </div>
  );
}

export default App;
