import styled from '@emotion/styled';
import { useState } from 'react';
import { Box } from '../../../lib/styled';
import { useConfirm } from '../../../store/organisms/Confirm';
import { CartTable } from '../CartTable';

const Wrapper = styled.div({
  textAlign: 'center',
});

export const Confirm: React.FC = () => {
  const { order, onClickConfirmButton } = useConfirm();
  const [disabled, setDisabled] = useState(false);

  return (
    <Wrapper>
      <h1>注文確認</h1>
      <CartTable editable={false} />
      <Box>郵便番号: {order.postalCode}</Box>
      <Box>住所: {order.address}</Box>
      <Box>
        氏名: {order.lastName} {order.firstName}
      </Box>
      <Box>メールアドレス: {order.email}</Box>
      <Box>電話番号: {order.phone}</Box>
      <Box>決済方法: {order.paymentType}</Box>
      <button
        disabled={disabled}
        onClick={async () => {
          setDisabled(true);
          await onClickConfirmButton();
        }}
      >
        注文確定
      </button>
    </Wrapper>
  );
};
