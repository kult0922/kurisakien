import { useCallback, useState } from 'react';
import { Customer, PaymentType } from '../../../@types/order';
import { initialCustomer, initialPaymentType } from '../../../constants/store';

export const useOrder = () => {
  const [paymentType, setPaymentType] = useState<PaymentType>(initialPaymentType);
  const [customer, setCustomer] = useState<Customer>(initialCustomer);

  const onChangePaymentType = useCallback((value: PaymentType) => {
    setPaymentType(value);
  }, []);

  const onChangeCutomer = useCallback((value: string, key: string) => {
    setCustomer((prev) => ({ ...prev, [key]: value }));
  }, []);

  return {
    paymentType,
    customer,
    onChangePaymentType,
    onChangeCutomer,
  };
};
