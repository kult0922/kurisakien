import { Routing } from './components/routing';
import { GlobalStore } from './store/Global';

const App = () => {
  return (
    <GlobalStore.Provider>
      <Routing />
    </GlobalStore.Provider>
  );
};

export default App;
