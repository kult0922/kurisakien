import { CustomerInformation } from '../../molecules/CustomerInformation';
import { PaymentInformation } from '../../molecules/PaymentInformation';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const Wrapper = styled.div({
  textAlign: 'center',
});

export const OrderInformation: React.FC = () => {
  return (
    <Wrapper>
      <CustomerInformation />
      <PaymentInformation />
      <Link to="orderConfirm">注文内容確認</Link>
    </Wrapper>
  );
};
