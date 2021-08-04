import { itemList } from '../../../constants/store';

interface ItemProps {
  id: string;
}

export const Item: React.FC<ItemProps> = ({ id }) => {
  const item = itemList.find((item) => item.id === id);
  if (!item) return null;
  return (
    <div>
      <img src={item.imagePath} alt="item" />
      <br />
      {item.name} <br />
      {item.price}円 <br />
    </div>
  );
};
