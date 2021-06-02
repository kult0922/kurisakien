import { useCallback, useEffect, useState } from 'react';
import { CartData } from '../../../@types/product';
import { itemList } from '../../../constants/store';

export const useCart = () => {
  const [carts, setCarts] = useState<CartData[]>([]);
  const [total, setTotal] = useState(0);

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

  return { carts, total, addCarts };
};
