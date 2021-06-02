import { useCallback, useState } from 'react';
import { createContainer } from 'unstated-next';
import { Customer, PaymentType } from '../../../@types/order';
import { initialCustomer, initialPaymentType } from '../../../constants/store';

const useOrder = () => {
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

export const OrderContainer = createContainer(useOrder);
