import { Item } from '~/components/Item';
import { Link } from 'react-router-dom';
import { OrderContainer } from '~/containers/OrderContainer';

export const Cart: React.FC<Array<string>> = () => {
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
