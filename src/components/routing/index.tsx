import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Template } from '../layouts';
import { Cart } from '../organisms/Cart';
import { Home } from '../organisms/Home';
import { Checkout } from '../organisms/Checkout';
import { CheckoutError } from '../organisms/CheckoutError';
import { Confirm } from '../organisms/Confirm';
import { Complete } from '../organisms/Complete';
import { ItemDetail } from '../organisms/ItemDetail';
import { Items } from '../organisms/Items';
import { routing } from '../../constants/routing';

export const Routing: React.FC = () => {
  return (
    <BrowserRouter>
      <Template>
        <Switch>
          <Route path={routing.root} exact component={Home} />
          <Route path={routing.items.root} exact component={Items} />
          <Route path={routing.items.itemId} component={ItemDetail} />
          <Route path={routing.cart.root} exact component={Cart} />
          <Route path={routing.checkout.root} exact component={Checkout} />
          <Route path={routing.checkout.error} exact component={CheckoutError} />
          <Route path={routing.checkout.confirm} component={Confirm} />
          <Route path={routing.checkout.complete} component={Complete} />
        </Switch>
      </Template>
    </BrowserRouter>
  );
};
