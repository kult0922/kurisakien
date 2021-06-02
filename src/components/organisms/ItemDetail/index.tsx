import { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { itemList } from '../../../constants/store';
import { CartContainer } from '../../../store/Global/Cart';
import { TabBar } from '../../molecules/TabBar';

type Props = RouteComponentProps<{ id: string }>;

export const ItemDetail: React.FC<Props> = ({ match }) => {
  const { addCarts } = CartContainer.useContainer();
  const [itemCount, setItemCount] = useState(1);
  const id = match.params.id;
  const item = itemList.find((item) => item.id === id);
  if (!item) return null;
  return (
    <>
      <TabBar />
      <br />
      <img src="http://placehold.jp/24/339933/223322/300x200.png?text=商品画像" alt="mercahndise" />
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
        <button
          onClick={() => {
            addCarts(id, itemCount);
          }}
        >
          カートに入れる
        </button>
      </div>
    </>
  );
};
