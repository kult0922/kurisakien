import styled from '@emotion/styled';
import { Box, BoxProps } from '../../../lib/styled';
import { Item } from '../../../@types/product';
import { bp } from '../../../constants/css';

interface Props extends BoxProps {
  item: Item;
}

const Price = styled(Box)({
  fontSize: '12px',
  paddingBottom: '5px',
  [bp.md]: {
    paddingBottom: '2px',
  },
});

const Name = styled(Box)({
  paddingBottom: '5px',
  [bp.md]: {
    paddingBottom: '2px',
  },
  /* はみ出したときに省略するためのcss */
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

const Image = styled.img({
  width: '100%',
  objectFit: 'cover',
  borderRadius: '5px 5px 0 0',
});

const Wrapper = styled(Box)({
  cursor: 'pointer',
  overflow: 'hidden',
  borderRadius: '5px',
  width: '300px',
  backgroundColor: '#ededed',
  [bp.md]: {
    width: '150px',
  },
});

export const GiftCard: React.FC<Props> = ({ item, m, style }) => {
  const { name, imagePaths, price } = item;
  return (
    <Wrapper m={m} style={{ ...style }}>
      <Image src={imagePaths[0]}></Image>
      <Name mt={5}>{name.split(' ')[0]}</Name>
      <Price>{price}円〜</Price>
    </Wrapper>
  );
};
