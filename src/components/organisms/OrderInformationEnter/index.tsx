import { CustomerInformation } from '../../molecules/CustomerInformation';
import { PaymentInformation } from '../../molecules/PaymentInformation';
// import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { useOrderInformation } from '../../../store/Organisms/OrderInformation';

const Wrapper = styled.div({
  textAlign: 'center',
});

export const OrderInformationEnter: React.FC = () => {
  const { customer, paymentType, updateCustomer, updatePaymentType } = useOrderInformation();

  return (
    <Wrapper>
      <div>
        {customer.address}
        {paymentType}
      </div>
      <CustomerInformation updateCustomer={updateCustomer} />
      <PaymentInformation updatePaymentType={updatePaymentType} />
      {/* <Link to="orderConfirm" onClick={OrderCheckButtonClicked}>
          注文内容確認へ
      </Link> */}
    </Wrapper>
  );
};
