import styled from '@emotion/styled';

export const ItemCardText = styled.div<{ fontSize: string }>(({ fontSize }) => ({
  fontSize,
  margin: '5px',
  paddingBottom: '5px',
}));
