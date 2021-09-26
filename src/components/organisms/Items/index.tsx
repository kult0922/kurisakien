import { itemList } from '../../../constants/store';
import { ItemCard } from '../../molecules/ItemCard';
import { SectionTitle } from '../../atoms/SectionTitle';
import { Box } from '../../../lib/styled';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const ItemLink = styled(Link)({
  color: '#1b1b1b',
  textDecoration: 'none',
  display: 'inline-block',
});

export const Items: React.FC = () => {
  return (
    <>
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
