import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const LinkButton = styled(Link)({
  color: '#f0f0f0',
  padding: '10px 30px 10px 30px',
  backgroundColor: '#e53a36',
  textDecoration: 'none',
  '&:hover': {
    backgroundColor: '#f55a56',
  },
});
