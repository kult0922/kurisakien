import styled from '@emotion/styled';
import React from 'react';
import { routing } from '../../../constants/routing';
import { Box, BoxProps } from '../../../lib/styled';
import { BasicLink } from '../../atoms/BasicLink';

interface Props extends BoxProps {
  style?: React.CSSProperties;
}

const Wrapper = styled(Box)({
  textAlign: 'center',
});

export const Complete: React.FC<Props> = ({ style, ...props }) => {
  return (
    <Wrapper style={style} mt={props.mt} mb={props.mb}>
      <h1>ご注文ありがとうございました</h1>
      <Box>ご入力いただきましたメールアドレスに確認メールを送信しました。</Box>
      詳しいお支払い手順につきましては再度メールを送ります。 今しばらくお待ち下さい。
      <Box mt={20}>
        <BasicLink path={routing.root} text={'ホームへ戻る'}></BasicLink>
      </Box>
    </Wrapper>
  );
};
