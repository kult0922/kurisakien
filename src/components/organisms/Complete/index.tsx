import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { routing } from '../../../constants/routing';

const Wrapper = styled.div({
  textAlign: 'center',
});

export const Complete: React.FC = () => {
  return (
    <Wrapper>
      <h1>ご注文ありがとうございました</h1>
      <Link to={routing.root}>ホームへ戻る</Link>
    </Wrapper>
  );
};
