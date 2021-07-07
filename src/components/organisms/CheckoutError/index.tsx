import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { routing } from '../../../constants/routing';

const Wrapper = styled.div({
  textAlign: 'center',
});

export const CheckoutError: React.FC = () => {
  return (
    <Wrapper>
      <h1>注文中にエラーが発生しました</h1>
      お手数をおかけしますが、もう一度最初からやり直してください。
      <br />
      <br />
      <Link to={routing.root}>ホームへ戻る</Link>
    </Wrapper>
  );
};
