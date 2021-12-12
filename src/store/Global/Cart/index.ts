import { useCallback, useEffect, useMemo, useState } from 'react';
import { CartItem, Item } from '../../../@types/product';

export const useCart = () => {
  const [carts, setCarts] = useState<CartItem[]>([]);

  const addCarts = useCallback(
    (item: Item, amount: number) => {
      const isExist = carts.find((elm) => elm.id === item.id);
      if (isExist) {
        setCarts((prev) =>
          prev.map(function (elm) {
            if (elm.id === item.id) {
              elm.amount += amount;
              return elm;
            } else {
              return elm;
            }
          }),
        );
      } else {
        setCarts((prev) => [...prev, { ...item, amount }]);
      }
    },
    [carts],
  );

  const onChangeCartItemAmount = useCallback((id: string, amount: number) => {
    setCarts((prev) =>
      prev.map(function (elm) {
        if (elm.id === id) {
          elm.amount = amount;
          return elm;
        } else {
          return elm;
        }
      }),
    );
  }, []);

  const onDeleteCartItem = useCallback((id: string) => {
    setCarts((prev) => prev.filter((elem) => elem.id !== id));
  }, []);

  const total = useMemo(() => {
    if (!carts.length) return 0;
    const prices = carts.map((elem) => elem.amount * elem.price);
    return prices.reduce((acc: number, val: number) => acc + val, 0);
  }, [carts]);

  // localstrageに保存されているデータでカートを初期化
  useEffect(() => {
    const storedCarts = JSON.parse(localStorage.getItem('carts')) as CartItem[];
    setCarts(storedCarts);
  }, []);

  // localstrageに保存
  useEffect(() => {
    localStorage.setItem('carts', JSON.stringify(carts));
  }, [carts]);

  const clearCart = useCallback(() => {
    setCarts([]);
  }, []);

  return { carts, total, addCarts, onDeleteCartItem, onChangeCartItemAmount, clearCart };
};
