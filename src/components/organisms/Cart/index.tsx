import { Link } from 'react-router-dom';
import { OrderContainer } from '../../../store/Global/Order';
import { Item } from '../../molecules/Item';

export const Cart: React.FC = () => {
  const { cartList, total } = OrderContainer.useContainer();
  return (
    <div>
      <br />
      {cartList.map((item, i) => {
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
      {total}円
      <br />
      <button>注文する</button>
    </div>
  );
};
