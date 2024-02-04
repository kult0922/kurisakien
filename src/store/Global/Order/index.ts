import { useState } from 'react';
import { z } from 'zod';
import { initialOrder } from '~/constants/init';
import { OrderSchema } from '~/store/organisms/Checkout';

export const useOrder = () => {
  const [order, setOrder] = useState<z.infer<typeof OrderSchema>>(initialOrder);

  return {
    order,
    setOrder,
  };
};
