import styled from '@emotion/styled';
import { useConfirm } from '../../../store/organisms/Confirm';
import { CartTable } from '../CartTable';

const Wrapper = styled.div({
  textAlign: 'center',
});

export const Confirm: React.FC = () => {
  const { paymentType, customer, onClickConfirmButton } = useConfirm();

  return (
    <Wrapper>
      <h1>注文確認</h1>
      <CartTable changeItemAmount={false} />
      <br />
      <br />
      郵便番号: {customer.postalCode}
      <br />
      住所: {customer.address}
      <br />
      氏名: {customer.lastName} {customer.firstName}
      <br />
      メールアドレス: {customer.email}
      <br />
      電話番号: {customer.phone}
      <br />
      決済方法: {paymentType}
      <br />
      <button onClick={onClickConfirmButton}>注文確定</button>
    </Wrapper>
  );
};
