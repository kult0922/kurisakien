import styled from '@emotion/styled';

export const NextButton = styled.button({
  background: '#67ce9a',
  textAlign: 'center',
  boxSizing: 'border-box',
  display: 'block',
  border: '2px solid #67ce9a',
  color: '#fff',
  fontWeight: 'bold',
  padding: 10,
  lineHeight: '1.4',
  maxWidth: 300,
  width: '100%',
  margin: '0 auto',
  position: 'relative',
  cursor: 'pointer',
  '&::after': {
    content: '""',
    width: 10,
    height: 10,
    display: 'block',
    position: 'absolute',
    top: '50%',
    right: '24px',
    marginTop: '-6px',
    transform: 'rotate(45deg)',
    borderTop: '2px solid #fff',
    borderRight: '2px solid #fff',
    transition: 'right 0.3s',
  },
  '&:hover': {
    background: '#67ce9a',
    color: '#fff',
    '&::after': {
      borderColor: '#fff',
      right: '6px',
    },
  },
  '&:active, &:focus': {
    opacity: '0.8',
  },
});
