import { Routing } from './components/routing';
import { OrderContainer } from './store/Global/Order';

const App = () => {
  return (
    <OrderContainer.Provider>
      <Routing />
    </OrderContainer.Provider>
  );
};

export default App;
