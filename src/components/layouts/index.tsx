import styled from '@emotion/styled';
import { Header } from '../organisms/Header';

const Wrapper = styled.div({
  textAlign: 'center',
});

export const Template: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Header>栗崎園</Header>
      {children}
    </Wrapper>
  );
};
