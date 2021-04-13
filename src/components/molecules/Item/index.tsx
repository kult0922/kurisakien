import { itemList } from '../../../constants/store';

interface ItemProps {
  id: string;
}

export const Item: React.FC<ItemProps> = ({ id }) => {
  const item = itemList.find((item) => item.id === id);
  if (!item) return null;
  return (
    <div>
      <img src="http://placehold.jp/24/339933/223322/300x200.png?text=商品画像" alt="mercahndise" />
      <br />
      {item.name} <br />
      {item.price}円 <br />
      <br />
    </div>
  );
};
