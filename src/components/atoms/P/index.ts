import styled from '@emotion/styled';
import React from 'react';

interface Props {
  m?: React.CSSProperties['margin'];
  mt?: React.CSSProperties['marginTop'];
  mr?: React.CSSProperties['marginRight'];
  mb?: React.CSSProperties['marginBottom'];
  ml?: React.CSSProperties['marginLeft'];
  style?: React.CSSProperties;
}

export const P = styled.p<Props>(({ m = '0px', mt, mr, mb, ml, style }) => ({
  margin: m,
  marginTop: mt,
  marginRight: mr,
  marginBottom: mb,
  marginLeft: ml,
  ...style,
}));
