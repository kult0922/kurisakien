import { useCallback, useState } from 'react';
import { Customer, PaymentType } from '../../../@types/order';
// import { OrderContainer } from '../../Global/Order';

export const useOrderInformation = () => {
  // const { setOrderInformation } = OrderContainer.useContainer();

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
  const [paymentType, setPaymentType] = useState<PaymentType>('postal');

  // ユーザー情報と決済方法を更新するための関数
  const updateCustomer = useCallback(
    (updatedCustomer: Customer): void => setCustomer(updatedCustomer),
    [],
  );

  const updatePaymentType = useCallback(
    (updatedPaymentMethod: PaymentType): void => setPaymentType(updatedPaymentMethod),
    [],
  );

  // 「注文確認へ」を押したらオーダー情報をstoreにセットする
  /*
  const OrderCheckButtonClicked = () => {
    const orderInformation: OrderInformation = {
      customer: customer,
      paymentMethod: paymentMethod,
    };
    setOrderInformation(orderInformation);
  };
  */

  return { customer, paymentType, updateCustomer, updatePaymentType };
};
