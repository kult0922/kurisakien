import styled from '@emotion/styled';
import { Box } from '../../../lib/styled';
import { useConfirm } from '../../../store/organisms/Confirm';
import { CartTable } from '../CartTable';
import { useState } from 'react';

const Wrapper = styled.div({
  textAlign: 'center',
});

export const Confirm: React.FC = () => {
  const { paymentType, customer, onClickConfirmButton } = useConfirm();
  const [disabled, setDisabled] = useState(false);

  return (
    <Wrapper>
      <h1>注文確認</h1>
      <CartTable editable={false} />
      <Box>郵便番号: {customer.postalCode}</Box>
      <Box>住所: {customer.address}</Box>
      <Box>
        氏名: {customer.lastName} {customer.firstName}
      </Box>
      <Box>メールアドレス: {customer.email}</Box>
      <Box>電話番号: {customer.phone}</Box>
      <Box>決済方法: {paymentType}</Box>
      <button onClick={onClickConfirmButton}>注文確定</button>
    </Wrapper>
  );
};
