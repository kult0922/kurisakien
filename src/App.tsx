import './App.css';
// import MyRoot from './components/MyRoot';
// import { Header } from './components/organisms/Header';
import { Routing } from './components/routing';
import { OrderContainer } from './containers/OrderContainer';

const App = () => {
  return (
    // <div className="App">
    //   {/* <header className="App-header">栗﨑園</header> */}
    //   <Header>栗﨑園</Header>
    //   <OrderContainer.Provider>
    //     <MyRoot />
    //   </OrderContainer.Provider>
    // </div>
    <OrderContainer.Provider>
      <Routing />
    </OrderContainer.Provider>
  );
};

export default App;
