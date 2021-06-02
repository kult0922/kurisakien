import { Routing } from './components/routing';
import { CartContainer } from './store/Global/Cart';
import { OrderContainer } from './store/Global/Order';

const App = () => {
  return (
    <CartContainer.Provider>
      <OrderContainer.Provider>
        <Routing />
      </OrderContainer.Provider>
    </CartContainer.Provider>
  );
};

export default App;
