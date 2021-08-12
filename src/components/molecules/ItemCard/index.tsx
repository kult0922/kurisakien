import styled from '@emotion/styled';
import { Box, BoxProps } from '../../../lib/styled';
import { Item } from '../../../@types/product';

interface Props extends BoxProps {
  item: Item;
  width: string | number;
}

const Price = styled(Box)({
  fontSize: '12px',
  paddingBottom: '5px',
});

const Name = styled(Box)({
  paddingBottom: '5px',
});

const Image = styled.img({
  width: '100%',
  objectFit: 'cover',
  borderRadius: '5px 5px 0 0',
});

const Wrapper = styled(Box)({
  cursor: 'pointer',
  borderRadius: '5px',
  backgroundColor: '#ededed',
});

export const ItemCard: React.FC<Props> = ({ item, width, m, style }) => {
  return (
    <Wrapper m={m} style={{ width, ...style }}>
      <Image src={item.imagePath}></Image>
      <Name mt={5}>{item.name}</Name>
      <Price>{item.price}円</Price>
    </Wrapper>
  );
};
