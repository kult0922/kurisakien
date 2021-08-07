import { ItemLink } from '../../atoms/ItemLink';
import { itemList } from '../../../constants/store';
import { Item } from '../../molecules/Item';
import { TabBar } from '../../molecules/TabBar';
import { SectionTitle } from '../../atoms/SectionTitle';

export const Items: React.FC = () => {
  return (
    <>
      <TabBar />
      <br />
      <SectionTitle>商品一覧</SectionTitle>
      <br />
      {itemList.map((item, i) => {
        return (
          <ItemLink to={'/items/' + item.id} key={i}>
            <Item id={item.id} />
          </ItemLink>
        );
      })}
    </>
  );
};
