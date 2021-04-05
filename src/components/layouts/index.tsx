import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Header } from '../organisms/Header';

const Wrapper = styled.div({
  textAlign: 'center',
});

export const Template: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Header>栗崎園</Header>
      <Link to="/">
        <button>ホーム</button>
      </Link>
      <Link to="/order">
        <button>注文</button>
      </Link>
      <Link to="/cart">
        <button>カート</button>
      </Link>
      {children}
    </Wrapper>
  );
};
