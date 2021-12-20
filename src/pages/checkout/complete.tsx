import styled from '@emotion/styled';
import { routing } from '../../constants/routing';
import { Box } from '../../lib/styled';
import { BasicLink } from '../../components/atoms/BasicLink';

const Wrapper = styled.div({
  textAlign: 'center',
});

const Complete: React.FC = () => {
  return (
    <Wrapper>
      <h1>ご注文ありがとうございました</h1>
      <Box>ご入力いただきましたメールアドレスに確認メールを送信しました。</Box>
      詳しいお支払い手順につきましては再度メールを送ります。 今しばらくお待ち下さい。
      <Box mt={20}>
        <BasicLink path={routing.root} text={'ホームへ戻る'}></BasicLink>
      </Box>
    </Wrapper>
  );
};

export default Complete;
