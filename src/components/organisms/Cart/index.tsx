import { Link } from 'react-router-dom';
import { OrderContainer } from '../../../containers/OrderContainer';
import { Item } from '../../molecules/Item';

export const Cart: React.FC = () => {
  const orderContainer = OrderContainer.useContainer();
  const CartList = orderContainer.cartList;
  return (
    <div>
      <br />
      {CartList.map((item, i) => {
        return (
          <div key={i}>
            <Link to={'/merchandise/' + item.id}>
              <div>
                <Item id={item.id} /> <br />
                {item.amount}個
              </div>
            </Link>
          </div>
        );
      })}
      <h2>合計金額</h2>
      {orderContainer.total}円
      <br />
      <button>注文する</button>
    </div>
  );
};
