import { CustomerInformation } from '../../molecules/CustomerInformation';
import { PaymentInformation } from '../../molecules/PaymentInformation';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { useOrderInformation } from '../../../store/Organisms/OrderInformation';

const Wrapper = styled.div({
  textAlign: 'center',
});

export const OrderInformationEnter: React.FC = () => {
  const {
    paymentOption,
    onChangePaymentOption,
    updateCustomer,
    onClickConfirmButton,
  } = useOrderInformation();

  return (
    <Wrapper>
      {console.log(paymentOption)}
      <CustomerInformation updateCustomer={updateCustomer} />
      <PaymentInformation
        paymentOption={paymentOption}
        onChangePaymentOption={onChangePaymentOption}
      />
      <Link to="orderConfirm" onClick={onClickConfirmButton}>
        注文内容確認へ
      </Link>
    </Wrapper>
  );
};