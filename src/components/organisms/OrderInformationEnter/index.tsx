import { CustomerInformation } from '../../molecules/CustomerInformation';
import { PaymentInformation } from '../../molecules/PaymentInformation';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { Customer, OrderInformation, PaymentMethod } from '../../../@types/order';
import { useState } from 'react';
import { OrderContainer } from '../../../store/Global/Order';

const Wrapper = styled.div({
  textAlign: 'center',
});

export const OrderInformationEnter: React.FC = () => {
  const { setOrderInformation } = OrderContainer.useContainer();
  // ユーザー情報
  const [customer, setCustomer] = useState<Customer>({
    postalCode: '',
    address: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
  });
  // ユーザーが選択した決済方法
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('postal');

  // ユーザー情報と決済方法を更新するための関数
  const updateCustomer = (updatedCustomer: Customer): void => setCustomer(updatedCustomer);
  const updatePaymentMethod = (updatedPaymentMethod: PaymentMethod): void =>
    setPaymentMethod(updatedPaymentMethod);

  // 「注文確認へ」を押したらオーダー情報をstoreにセットする
  const OrderCheckButtonClicked = () => {
    const orderInformation: OrderInformation = {
      customer: customer,
      paymentMethod: paymentMethod,
    };
    setOrderInformation(orderInformation);
  };

  return (
    <Wrapper>
      <CustomerInformation updateCustomer={updateCustomer} />
      <PaymentInformation updatePaymentMethod={updatePaymentMethod} />
      <Link to="orderConfirm" onClick={OrderCheckButtonClicked}>
        注文内容確認へ
      </Link>
    </Wrapper>
  );
};
