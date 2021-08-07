import { itemList } from '../../../constants/store';
import { ItemCard } from '../ItemCard';
import { ItemCardText } from '../../atoms/ItemCardText';
import { ItemCardImage } from '../../atoms/ItemCardImage';

interface ItemProps {
  id: string;
}

export const Item: React.FC<ItemProps> = ({ id }) => {
  const item = itemList.find((item) => item.id === id);
  if (!item) return null;
  return (
    <ItemCard>
      <ItemCardImage src={item.imagePath}></ItemCardImage>
      <ItemCardText fontSize="1em">{item.name}</ItemCardText>
      <ItemCardText fontSize="0.8em">{item.price}円</ItemCardText>
    </ItemCard>
  );
};
