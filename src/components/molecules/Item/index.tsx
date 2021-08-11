import { itemList } from '../../../constants/store';
import styled from '@emotion/styled';
import { CSSProperties } from 'react';
import { Box } from '../../../lib/styled';

interface ItemProps {
  id: string;
}

interface ImageProps {
  src: string;
}

type TextProps = {
  margin?: CSSProperties['margin'];
  fontSize: CSSProperties['fontSize'];
};

const Text = styled.div<TextProps>(({ margin, fontSize }) => ({
  margin,
  fontSize,
  paddingBottom: '5px',
}));

const Image = styled.img<ImageProps>(({ src }) => ({
  objectFit: 'cover',
  width: '300px',
  borderRadius: '5px 5px 0 0',
  content: `url(${src})`,
}));

const Wrapper = styled(Box)({
  width: '90%',
  cursor: 'pointer',
  borderRadius: '5px',
  backgroundColor: '#ededed',
});

export const Item: React.FC<ItemProps> = ({ id }) => {
  const item = itemList.find((item) => item.id === id);
  if (!item) return null;
  return (
    <Wrapper m={18}>
      <Image src={item.imagePath}></Image>
      <Text fontSize="1em" margin={5}>
        {item.name}
      </Text>
      <Text fontSize="0.8em">{item.price}円</Text>
    </Wrapper>
  );
};
