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

export const GiftCard: React.FC<Props> = ({ item, width, m, style }) => {
  const { name, imagePath, price } = item;
  return (
    <Wrapper m={m} style={{ width, ...style }}>
      <Image src={imagePath}></Image>
      <Name mt={5}>{name.split(' ')[0]}</Name>
      <Price>{price}円〜</Price>
    </Wrapper>
  );
};
