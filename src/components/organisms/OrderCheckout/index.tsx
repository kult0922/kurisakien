import { CustomerForm } from '../CustomerForm';
import { PaymentForm } from '../PaymentForm';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { OrderContainer } from '../../../store/Global/Order';

const Wrapper = styled.div({
  textAlign: 'center',
});

export const OrderCheckout: React.FC = () => {
  const { paymentType, onChangePaymentType, onChangeCutomer } = OrderContainer.useContainer();

  return (
    <Wrapper>
      <CustomerForm onChangeCutomer={onChangeCutomer} />
      <PaymentForm paymentType={paymentType} onChangePaymentType={onChangePaymentType} />
      <Link to="order-confirm">注文内容確認へ</Link>
    </Wrapper>
  );
};
