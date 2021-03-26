import { BrowserRouter, Route, Link} from 'react-router-dom';

import { Order } from "../page/Order";
import { Cart } from "../page/Cart";
import { Home } from "../page/Home";
import { ItemDetail } from "./ItemDetail";

function MyRoot() {
  return (
      <BrowserRouter>

        <Link to="/">
        <button>
          ホーム
        </button>
        </Link>

        <Link to="/order">
        <button>
          注文
        </button>
        </Link>

        <Link to="/cart">
        <button>
          カート
        </button>
        </Link>

        <div>
          <Route path="/" exact component={Home} />
          <Route path="/order" exact component={Order} />
          <Route path="/cart" component={Cart} />
          <Route path="/merchandise/:id" component={ItemDetail} />
        </div>
      </BrowserRouter>
  );
}

export default MyRoot;
