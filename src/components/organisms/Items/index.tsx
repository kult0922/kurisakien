import { ItemLink } from '../../atoms/ItemLink';
import { itemList } from '../../../constants/store';
import { ItemCard } from '../../molecules/ItemCard';
import { TabBar } from '../../molecules/TabBar';
import { SectionTitle } from '../../atoms/SectionTitle';
import { Box } from '../../../lib/styled';

export const Items: React.FC = () => {
  return (
    <>
      <TabBar />
      <Box mt={10}>
        <SectionTitle>商品一覧</SectionTitle>
      </Box>
      {itemList.map((item, i) => {
        return (
          <ItemLink to={'/items/' + item.id} key={i}>
            <ItemCard item={item} m={10} width={300} />
          </ItemLink>
        );
      })}
    </>
  );
};
