import { useCallback, useEffect, useMemo, useState } from 'react';
import { CartItem } from '../../../@types/product';
import { itemList } from '../../../constants/store';

export const useCart = () => {
  const [carts, setCarts] = useState<CartItem[]>([]);

  const addCarts = useCallback(
    (id: string, amount: number) => {
      const existCheck = carts.find((elem) => elem.id === id);
      const cartItem = itemList.find((elem) => elem.id === id);
      setCarts(
        !existCheck && cartItem
          ? (prev) => [...prev, { ...cartItem, amount }]
          : (prev) => prev.map((elem) => (elem.id === id ? { ...elem, amount } : { ...elem })),
      );
    },
    [carts],
  );

  const onDeleteCartItem = useCallback((id: string) => {
    setCarts((prev) => prev.filter((elem) => elem.id !== id));
  }, []);

  const total = useMemo(() => {
    if (!carts.length) return 0;
    const prices = carts.map((elem) => elem.amount * elem.price);
    return prices.reduce((acc: number, val: number) => acc + val, 0);
  }, [carts]);

  useEffect(() => {
    localStorage.setItem('carts', JSON.stringify(carts));
  }, [carts]);

  return { carts, total, addCarts, onDeleteCartItem };
};
