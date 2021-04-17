import { useState } from 'react';
import { createContainer } from 'unstated-next';
import { CartData } from '../../../@types/product';
import { itemList } from '../../../constants/store';

const useOrder = () => {
  const [cartList, setCart] = useState<CartData[]>([]);
  const [itemCount, setItemCount] = useState(1);
  const [total, setTotal] = useState(0);

  const addCartList = (id: string) => {
    const existCheck = cartList.find((item) => item.id === id);
    if (!existCheck) {
      setCart((prev) => [...prev, { id, amount: itemCount }]);
    } else {
      setCart((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, amount: item.amount + itemCount } : { ...item },
        ),
      );
    }
    const item = itemList.find((item) => item.id === id);
    if (item) {
      const itemPrice = itemCount * item.price;
      setTotal((prev) => prev + itemPrice);
      setItemCount(1);
    }
  };

  const onChangeItemCount = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setItemCount(Number(e.target.value));
  };

  return { cartList, total, addCartList, onChangeItemCount };
};

export const OrderContainer = createContainer(useOrder);
