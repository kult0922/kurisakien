import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Template } from '../layouts';
import { Cart } from '../organisms/Cart';
import { Home } from '../organisms/Home';
import { ItemDetail } from '../organisms/ItemDetail';
import { Order } from '../organisms/Order';

export const Routing: React.FC = () => {
  return (
    <BrowserRouter>
      <Template>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/order" exact component={Order} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/merchandise/:id" component={ItemDetail} />
        </Switch>
      </Template>
    </BrowserRouter>
  );
};
