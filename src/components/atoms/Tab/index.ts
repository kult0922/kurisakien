import styled from '@emotion/styled';

export const Tab = styled.a<{ bottom?: number | string; isSelect?: boolean }>(
  ({ bottom = -4, isSelect = false }) => ({
    textAlign: 'center',
    position: 'relative',
    display: 'inline-block',
    color: '#1b1b1b',
    textDecoration: 'none',
    width: 60,
    padding: '10px 20px 0 20px',
    '&:after': {
      position: 'absolute',
      bottom,
      left: '10%',
      content: "''",
      width: '80%',
      height: '2px',
      background: '#333',
      transform: isSelect ? 'scale(1, 1)' : 'scale(0, 1)',
      transformOrigin: 'right top',
      transition: 'transform 0.2s',
    },
    '&:hover:after': {
      transformOrigin: 'left top',
      transform: 'scale(1, 1)',
    },
  }),
);
