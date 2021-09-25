import styled from '@emotion/styled';
import { useConfirm } from '../../../store/organisms/Confirm';
import { CartTable } from '../CartTable';

const Wrapper = styled.div({
  textAlign: 'center',
});

export const Confirm: React.FC = () => {
  const { order, onClickConfirmButton } = useConfirm();

  return (
    <Wrapper>
      <h1>注文確認</h1>
      <CartTable editable={false} />
      <br />
      <br />
      郵便番号: {order.postalCode}
      <br />
      住所: {order.address}
      <br />
      氏名: {order.lastName} {order.firstName}
      <br />
      メールアドレス: {order.email}
      <br />
      電話番号: {order.phone}
      <br />
      決済方法: {order.paymentType}
      <br />
      <button onClick={onClickConfirmButton}>注文確定</button>
    </Wrapper>
  );
};
