import { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { itemList } from '../../../constants/store';
import { GlobalStore } from '../../../store/Global';
import { TabBar } from '../../molecules/TabBar';
import { Link } from 'react-router-dom';
import { routing } from '../../../constants/routing';

type Props = RouteComponentProps<{ id: string }>;

export const ItemDetail: React.FC<Props> = ({ match }) => {
  const { cart: cartStore } = GlobalStore.useContainer();
  const { addCarts } = cartStore;
  const [itemCount, setItemCount] = useState(1);
  const id = match.params.id;
  const item = itemList.find((item) => item.id === id);
  if (!item) return null;
  return (
    <>
      <TabBar />
      <br />
      <img src={item.imagePath} alt="item" />
      <div>
        {item.name} <br />
        {item.price}円 <br />
        {item.discription}
        <br />
        <select
          defaultValue={1}
          onChange={(event) => {
            setItemCount(Number(event.target.value));
          }}
        >
          {[...Array(10)].map((_, i) => (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
        <Link
          to={routing.cart.root}
          onClick={() => {
            addCarts(id, itemCount);
          }}
        >
          カートに入れる
        </Link>
      </div>
    </>
  );
};
