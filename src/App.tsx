import { Routing } from './components/routing';
import { OrderContainer } from './store/Global/Order';
import { OrderInformationContainer } from './store/Organisms/OrderInformation';

const App = () => {
  return (
    <OrderContainer.Provider>
      <OrderInformationContainer.Provider>
        <Routing />
      </OrderInformationContainer.Provider>
    </OrderContainer.Provider>
  );
};

export default App;
