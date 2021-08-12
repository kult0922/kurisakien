import styled from '@emotion/styled';
import React from 'react';

export interface BoxProps {
  m?: React.CSSProperties['margin'];
  mt?: React.CSSProperties['marginTop'];
  mr?: React.CSSProperties['marginRight'];
  mb?: React.CSSProperties['marginBottom'];
  ml?: React.CSSProperties['marginLeft'];
  style?: React.CSSProperties;
}

export interface FlexProps {
  display?: React.CSSProperties['display'];
  alignItems?: React.CSSProperties['alignItems'];
  justifyContent?: React.CSSProperties['justifyContent'];
  flexWrap?: React.CSSProperties['flexWrap'];
  m?: React.CSSProperties['margin'];
  mt?: React.CSSProperties['marginTop'];
  mr?: React.CSSProperties['marginRight'];
  mb?: React.CSSProperties['marginBottom'];
  ml?: React.CSSProperties['marginLeft'];
  style?: React.CSSProperties;
}

export const Box = styled.div<BoxProps>(({ m, mt, mr, mb, ml, style }) => ({
  margin: m,
  marginTop: mt,
  marginRight: mr,
  marginBottom: mb,
  marginLeft: ml,
  ...style,
}));

export const Flex = styled.div<FlexProps>(
  ({ display, alignItems, justifyContent, flexWrap, m, mt, mr, mb, ml, style }) => ({
    display: display || 'flex',
    alignItems,
    justifyContent,
    flexWrap,
    margin: m,
    marginTop: mt,
    marginRight: mr,
    marginBottom: mb,
    marginLeft: ml,
    ...style,
  }),
);
