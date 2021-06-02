import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Template } from '../layouts';
import { Cart } from '../organisms/Cart';
import { Home } from '../organisms/Home';
import { OrderCheckout } from '../organisms/OrderCheckout';
import { OrderConfirm } from '../organisms/OrderConfirm';
import { ItemDetail } from '../organisms/ItemDetail';
import { Shop } from '../organisms/Shop';

export const Routing: React.FC = () => {
  return (
    <BrowserRouter>
      <Template>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/merchandise/:id" component={ItemDetail} />
          <Route path="/order-checkout" exact component={OrderCheckout} />
          <Route path="/order-confirm" component={OrderConfirm} />
        </Switch>
      </Template>
    </BrowserRouter>
  );
};
