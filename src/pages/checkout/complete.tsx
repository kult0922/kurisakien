import Link from 'next/link';
import styled from '@emotion/styled';
import { routing } from '../../constants/routing';

const Wrapper = styled.div({
  textAlign: 'center',
});

const Complete: React.FC = () => {
  return (
    <Wrapper>
      <h1>ご注文ありがとうございました</h1>
      <Link href={routing.root}>
        <a>ホームへ戻る</a>
      </Link>
    </Wrapper>
  );
};

export default Complete;
