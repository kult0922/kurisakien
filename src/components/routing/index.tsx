import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Template } from '../layouts';
import { Cart } from '../organisms/Cart';
import { Home } from '../organisms/Home';
import { Checkout } from '../organisms/Checkout';
import { Confirm } from '../organisms/Confirm';
import { Complete } from '../organisms/Complete';
import { ItemDetail } from '../organisms/ItemDetail';
import { Shop } from '../organisms/Items';

export const Routing: React.FC = () => {
  return (
    <BrowserRouter>
      <Template>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/items" exact component={Shop} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/items/:id" component={ItemDetail} />
          <Route path="/checkout" exact component={Checkout} />
          <Route path="/confirm" component={Confirm} />
          <Route path="/complete" component={Complete} />
        </Switch>
      </Template>
    </BrowserRouter>
  );
};
