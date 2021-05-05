import styled from '@emotion/styled';

export const Input = styled.input<{ width?: number | string }>(({ width = 100 }) => ({
  width,
}));
