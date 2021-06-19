import { CustomerForm } from '../CustomerForm';
import { PaymentForm } from '../PaymentForm';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { GlobalStore } from '../../../store/Global';
import { routing } from '../../../constants/routing';

const Wrapper = styled.div({
  textAlign: 'center',
});

export const Checkout: React.FC = () => {
  const { order: orderContainer } = GlobalStore.useContainer();
  const { paymentType, onChangePaymentType, onChangeCutomer } = orderContainer;

  return (
    <Wrapper>
      <CustomerForm onChangeCutomer={onChangeCutomer} />
      <PaymentForm paymentType={paymentType} onChangePaymentType={onChangePaymentType} />
      <Link to={routing.checkout.confirm}>注文内容確認へ</Link>
    </Wrapper>
  );
};
