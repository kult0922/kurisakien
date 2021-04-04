import { itemList, id2index } from '~/data/ItemData';

interface ItemProps {
  id: string;
}

export const Item: React.FC<ItemProps> = (props) => {
  const index = id2index[props.id];
  return (
    <div>
      <img src="http://placehold.jp/24/339933/223322/300x200.png?text=商品画像" alt="mercahndise" />
      <br />
      {itemList[index].name} <br />
      {itemList[index].price}円 <br />
      <br />
    </div>
  );
};
