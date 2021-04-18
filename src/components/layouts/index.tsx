import styled from '@emotion/styled';
import { Header } from '../organisms/Header';
import { Tab } from '../atoms/Tab';

const Wrapper = styled.div({
  textAlign: 'center',
});

export const Template: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Header>栗崎園</Header>
      <Tab to="/">ホーム</Tab>
      <Tab to="/order">注文</Tab>
      <Tab bottom="-7px" to="/cart">
        <img src="/shopping-cart.svg" width="18" height="18"></img>
      </Tab>
      {children}
    </Wrapper>
  );
};
