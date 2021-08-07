import styled from '@emotion/styled';

export const ItemCardImage = styled.img<{ src: string }>(({ src }) => ({
  objectFit: 'cover',
  width: '300px',
  borderRadius: '5px 5px 0 0',
  content: `url(${src})`,
}));
