import { useCallback, useState } from 'react';
import { createContainer } from 'unstated-next';
import { Customer, PaymentType } from '../../../@types/order';
import { initialCustomer } from '../../../constants/store';

const useOrderInformation = () => {
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
    customer,
    onChangePaymentOption,
    onClickConfirmButton,
    onChangeCutomer,
  };
};

export const OrderInformationContainer = createContainer(useOrderInformation);
