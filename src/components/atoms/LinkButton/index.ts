import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { MarginProps } from '../../../@types/emotion';

export const LinkButton = styled(Link)<MarginProps>(({ margin }) => ({
  margin,
  color: '#f0f0f0',
  padding: '10px 30px 10px 30px',
  backgroundColor: '#e53a36',
  textDecoration: 'none',
  '&:hover': {
    backgroundColor: '#f55a56',
  },
}));
