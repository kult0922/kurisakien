import styled from '@emotion/styled';

export const ItemDetailImage = styled.img<{ src: string }>(({ src }) => ({
  width: '600px',
  content: `url(${src})`,
  display: 'inline-block',
}));
