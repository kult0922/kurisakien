import { useCallback, useEffect, useMemo, useState } from 'react';
import { CartItem, Item } from '~/@types/product';

export const useCart = () => {
  const [carts, setCarts] = useState<CartItem[]>([]);

  const addCarts = useCallback(
    (item: Item, count: number) => {
      const isExist = carts.find((elm) => elm.id === item.id);
      if (isExist) {
        setCarts((prev) =>
          prev.map(function (elm) {
            if (elm.id === item.id) {
              elm.count += count;
              return elm;
            } else {
              return elm;
            }
          }),
        );
      } else {
        setCarts((prev) => [...prev, { ...item, count }]);
      }
    },
    [carts],
  );

  const onChangeCartItemCount = useCallback((id: string, count: number) => {
    setCarts((prev) =>
      prev.map(function (elm) {
        if (elm.id === id) {
          elm.count = count;
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
    const prices = carts.map((elem) => elem.count * elem.price);
    return prices.reduce((acc: number, val: number) => acc + val, 0);
  }, [carts]);

  // localstrageに保存されているデータでカートを初期化
  useEffect(() => {
    const localStorageCarts = localStorage.getItem('carts');
    setCarts(localStorageCarts ? JSON.parse(localStorageCarts) : []);
  }, []);

  // localstrageに保存
  useEffect(() => {
    localStorage.setItem('carts', JSON.stringify(carts));
  }, [carts]);

  const clearCart = useCallback(() => {
    setCarts([]);
  }, []);

  return { carts, total, addCarts, onDeleteCartItem, onChangeCartItemCount, clearCart };
};
