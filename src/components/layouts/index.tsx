import styled from '@emotion/styled';
import { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../organisms/Header';

const Wrapper = styled.div({
  textAlign: 'center',
});

type underLineProps = {
  bottom: CSSProperties['bottom'];
};

const StyledLink = styled(Link)<underLineProps>`
  position: relative;
  display: inline-block;
  color: #1b1b1b;
  text-decoration: none;
  width: 60px;
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 10px;
  &:hover {
    cursor: pointer;
    text-decoration: none;
  }
  &::after {
    position: absolute;
    bottom: -4px;
    bottom: ${(props) => props.bottom};
    left: 10%;
    content: '';
    width: 80%;
    height: 2px;
    background: #333;
    transform: scale(0, 1);
    transform-origin: right top;
    transition: transform 0.2s;
  }
  &:hover::after {
    transform-origin: left top;
    transform: scale(1, 1);
  }
`;

export const Template: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Header>栗崎園 </Header>

      <StyledLink bottom="-4px" to="/">
        ホーム
      </StyledLink>
      <StyledLink bottom="-4px" to="/order">
        注文
      </StyledLink>
      <StyledLink bottom="-7px" to="/cart">
        <img src="/shopping-cart.svg" width="18" height="18"></img>
      </StyledLink>

      {children}
    </Wrapper>
  );
};
