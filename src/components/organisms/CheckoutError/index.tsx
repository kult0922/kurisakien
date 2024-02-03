import styled from '@emotion/styled';
import React from 'react';
import { BasicLink } from '~/components/atoms/BasicLink';
import { routing } from '~/constants/routing';
import { Box, BoxProps } from '~/lib/styled';

interface Props extends BoxProps {
  style?: React.CSSProperties;
}

const Wrapper = styled(Box)({
  textAlign: 'center',
});

const RedText = styled(Box)({
  color: 'red',
});

export const CheckoutError: React.FC<Props> = ({ style, ...props }) => {
  return (
    <Wrapper style={style} mt={props.mt} mb={props.mb}>
      <h1>注文エラーが発生しました</h1>
      <RedText>注文手続きは行われませんでした。</RedText>
      <Box mt={30}>以下の原因が考えられます。</Box>
      <Box mt={30}>ブラウザのリロードなどによりお客様の住所情報が消えてしまった。</Box>
      <Box>通信エラーにより注文を送信できなかった。</Box>
      <Box mt={20}>もう一度カートの中身を確認し、再度住所入力をお願いします。</Box>
      <Box mt={20}>
        <BasicLink path={routing.root}>ホームへ戻る</BasicLink>
      </Box>
      <Box>
        <BasicLink path={routing.cart.root}>カートへ戻る</BasicLink>
      </Box>
    </Wrapper>
  );
};
