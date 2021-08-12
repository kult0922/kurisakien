import { itemList } from '../../../constants/store';
import styled from '@emotion/styled';
import { Box } from '../../../lib/styled';

interface Props {
  id: string;
  width?: React.CSSProperties['width'];
  m?: React.CSSProperties['margin'];
}

const Price = styled(Box)({
  fontSize: '0.8rem',
  paddingBottom: '5px',
});

const Description = styled(Box)({
  fontSize: '0.8rem',
  paddingBottom: '5px',
});

const Image = styled.img({
  objectFit: 'cover',
  borderRadius: '5px 5px 0 0',
});

const Wrapper = styled(Box)({
  cursor: 'pointer',
  borderRadius: '5px',
  backgroundColor: '#ededed',
});

export const Item: React.FC<Props> = ({ id, width, m }) => {
  const item = itemList.find((item) => item.id === id);
  if (!item) return null;
  return (
    <Wrapper m={m}>
      <Image src={item.imagePath} width={width}></Image>
      <Description mt={5}>{item.name}</Description>
      <Price>{item.price}円</Price>
    </Wrapper>
  );
};
