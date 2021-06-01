import { useCallback, useState } from 'react';
import { Customer, PaymentType } from '../../../@types/order';
// import { OrderContainer } from '../../Global/Order';

export const useOrderInformation = () => {
  const [paymentOption, setPaymentOption] = useState<PaymentType>('postal');
  const [customer, setCustomer] = useState<Customer>({
    postalCode: '',
    address: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
  });
  const [paymentType, setPaymentType] = useState<PaymentType>('postal');

  const updateCustomer = useCallback(
    (updatedCustomer: Customer): void => setCustomer(updatedCustomer),
    [],
  );

  const onChangePaymentOption = useCallback((value: PaymentType) => {
    setPaymentOption(value);
  }, []);

  const updatePaymentType = useCallback(
    (updatedPaymentMethod: PaymentType): void => setPaymentType(updatedPaymentMethod),
    [],
  );

  // 「注文確認へ」を押したらオーダー情報をstoreにセットする
  const onClickConfirmButton = useCallback(() => {
    console.log('hello');
  }, []);

  return {
    customer,
    paymentType,
    paymentOption,
    updateCustomer,
    onChangePaymentOption,
    updatePaymentType,
    onClickConfirmButton,
  };
};
