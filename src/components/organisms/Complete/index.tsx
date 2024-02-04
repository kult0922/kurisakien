import styled from '@emotion/styled';
import React, { useEffect } from 'react';
import { BasicLink } from '~/components/atoms/BasicLink';
import { routing } from '~/constants/routing';
import { Box, BoxProps } from '~/lib/styled';
import { GlobalStore } from '~/store/Global';

interface Props extends BoxProps {
  style?: React.CSSProperties;
}

const Wrapper = styled(Box)({
  textAlign: 'center',
});

export const Complete: React.FC<Props> = ({ style, ...props }) => {
  const { clearCart } = GlobalStore.useContainer().cart;
  useEffect(() => {
    clearCart();
  }, [clearCart]);
  return (
    <Wrapper style={style} mt={props.mt} mb={props.mb}>
      <h1>ご注文ありがとうございました</h1>
      <Box>ご入力いただきましたメールアドレスに確認メールを送信しました。</Box>
      詳しいお支払い手順につきましては再度メールを送ります。 今しばらくお待ち下さい。
      <Box mt={20}>
        <BasicLink path={routing.root}>ホームへ戻る</BasicLink>
      </Box>
    </Wrapper>
  );
};
