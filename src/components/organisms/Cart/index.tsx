import { CartContainer } from '../../../store/Global/Cart';
import { Item } from '../../molecules/Item';
import { Link } from 'react-router-dom';
import { TabBar } from '../../molecules/TabBar';

export const Cart: React.FC = () => {
  const { carts, total, addCarts } = CartContainer.useContainer();
  return (
    <>
      <TabBar />
      <br />
      {carts.map((item, i) => {
        return (
          <div key={i}>
            <Item id={item.id} /> <br />
            <select
              defaultValue={item.amount}
              onChange={(event) => {
                addCarts(item.id, Number(event.target.value));
              }}
            >
              {[...Array(10)].map((_, i) => (
                <option key={i} value={i + 1}>
                  {i + 1}個
                </option>
              ))}
            </select>
          </div>
        );
      })}
      <h2>合計金額</h2>
      {total}円
      <br />
      <Link to="order-checkout">注文に進む</Link>
    </>
  );
};
