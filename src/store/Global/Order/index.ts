import { useCallback, useEffect, useState } from 'react';
import { createContainer } from 'unstated-next';
import { CartData } from '../../../@types/product';
import { OrderInformation, Customer, PaymentMethod } from '../../../@types/order';
import { itemList } from '../../../constants/store';

const useOrder = () => {
  const [carts, setCarts] = useState<CartData[]>([]);
  const [total, setTotal] = useState(0);
  const customer: Customer = {
    postalCode: '',
    address: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
  };
  const paymentOption: PaymentMethod = 'postal';
  const [orderInformation, setOrderInformation] = useState<OrderInformation>({
    customer: customer,
    paymentMethod: paymentOption,
  });

  const addCarts = useCallback(
    (id: string, amount: number) => {
      const existCheck = carts.find((item) => item.id === id);
      const cartItem = itemList.find((item) => item.id === id);
      setCarts(
        !existCheck && cartItem
          ? (prev) => [...prev, { ...cartItem, amount }]
          : (prev) => prev.map((item) => (item.id === id ? { ...item, amount } : { ...item })),
      );
    },
    [carts],
  );

  useEffect(() => {
    const prices = carts.map((cart) => cart.amount * cart.price);
    setTotal(
      prices.reduce((accumulator: number, currentValue: number) => accumulator + currentValue, 0),
    );
  }, [carts]);

  return { carts, total, orderInformation, setOrderInformation, addCarts };
};

export const OrderContainer = createContainer(useOrder);
