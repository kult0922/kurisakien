import { OrderContainer } from '../../../store/Global/Order';
import { Item } from '../../molecules/Item';

export const Cart: React.FC = () => {
  const { carts, total, addCartList } = OrderContainer.useContainer();
  return (
    <>
      <br />
      {carts.map((item, i) => {
        return (
          <div key={i}>
            <Item id={item.id} /> <br />
            <select
              defaultValue={item.amount}
              onChange={(event) => {
                addCartList(item.id, Number(event.target.value));
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
      <button>注文する</button>
    </>
  );
};
