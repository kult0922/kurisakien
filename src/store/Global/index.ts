import { createContainer } from 'unstated-next';
import { useCart } from './Cart';
import { useOrder } from './Order';

export const useGlobal = () => {
  const cart = useCart();
  const order = useOrder();

  return { cart, order };
};

export const GlobalStore = createContainer(useGlobal);
