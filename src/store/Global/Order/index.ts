import { useState } from 'react';
import { Order } from '~/@types/order';
import { initialOrder } from '~/constants/init';

export const useOrder = () => {
  const [order, setOrder] = useState<Order>(initialOrder);

  return {
    order,
    setOrder,
  };
};
