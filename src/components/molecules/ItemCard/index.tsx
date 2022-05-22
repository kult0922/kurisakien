import styled from '@emotion/styled';
import { Item } from '~/@types/product';
import { bp } from '~/constants/css';
import { Box, BoxProps } from '~/lib/styled';

interface Props extends BoxProps {
  item: Item;
}

const SubInfo = styled(Box)({
  fontSize: '13px',
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
  borderRadius: '5px',
  backgroundColor: '#ededed',
  width: '300px',
  overflow: 'hidden',
  [bp.md]: {
    width: '150px',
  },
});

export const ItemCard: React.FC<Props> = ({ item, m, style }) => {
  const { name, imagePaths, price, amount } = item;
  return (
    <Wrapper m={m} style={{ ...style }}>
      <Image src={imagePaths[0]}></Image>
      <Name mt={5}>{name}</Name>
      <SubInfo>{price} 円</SubInfo>
      <SubInfo>{amount}</SubInfo>
    </Wrapper>
  );
};
