import { useCallback, useState } from 'react';
import { Customer, PaymentType } from '../../../@types/order';
import { initialCustomer } from '../../../constants/store';

export const useOrderInformation = () => {
  const [paymentOption, setPaymentOption] = useState<PaymentType>('postal');
  const [customer, setCustomer] = useState<Customer>(initialCustomer);

  const onChangePaymentOption = useCallback((value: PaymentType) => {
    setPaymentOption(value);
  }, []);

  const onChangeCutomer = useCallback((value: string, key: string) => {
    setCustomer((prev) => ({ ...prev, [key]: value }));
  }, []);

  const onClickConfirmButton = useCallback(() => {
    console.log(paymentOption, customer);
  }, [paymentOption, customer]);

  return {
    paymentOption,
    onChangePaymentOption,
    onClickConfirmButton,
    onChangeCutomer,
  };
};
