import React from 'react';
import './App.css';

import { OrderContainer } from "./containers/OrderContainer";
import MyRoot from "./components/MyRoot"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        栗﨑園

      </header>
      <OrderContainer.Provider>
        <MyRoot />
      </OrderContainer.Provider>
    </div>
  );
}

export default App;
