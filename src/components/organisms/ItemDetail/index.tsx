import { RouteComponentProps } from 'react-router-dom';
import { itemList } from '../../../constants/store';
import { TabBar } from '../../molecules/TabBar';
import { ItemMenu } from '../ItemMenu';
import { ItemDetailImage } from '../../atoms/ItemDetailImage';

type Props = RouteComponentProps<{ id: string }>;

export const ItemDetail: React.FC<Props> = ({ match }) => {
  const id = match.params.id;
  const item = itemList.find((item) => item.id === id);
  if (!item) return null;
  return (
    <>
      <TabBar />
      <br />
      <br />
      <ItemDetailImage src={item.imagePath} />
      <ItemMenu item={item} />
    </>
  );
};
