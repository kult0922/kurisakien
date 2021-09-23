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

  const isValid = useCallback(
    (key: string) => {
      if (key == 'postalCode') {
        if (customer.postalCode.length == 0) return false;
        const ptn = new RegExp('^[0-9]{3}-?[0-9]{4}$');
        if (!ptn.test(customer.postalCode)) return false;
      }

      if (key == 'address') {
        if (customer.address.length == 0) return false;
      }

      if (key == 'firstName') {
        if (customer.firstName.length == 0) return false;
      }

      if (key == 'lastName') {
        if (customer.lastName.length == 0) return false;
      }

      if (key == 'phone') {
        if (customer.phone.length == 0) return false;
        const ptn = new RegExp('^[0-9]{2,4}-?[0-9]{2,4}-?[0-9]{3,4}$');
        if (!ptn.test(customer.phone)) return false;
      }

      if (key == 'email') {
        if (customer.email.length == 0) return false;
        const ptn = new RegExp('^.+@.+\\..+$');
        if (!ptn.test(customer.email)) return false;
      }

      return true;
    },
    [customer],
  );

  return {
    paymentType,
    customer,
    isValid,
    onChangePaymentType,
    onChangeCutomer,
  };
};
