import { createContainer } from 'unstated-next';
import { useCart } from '~/store/Global/Cart';
import { useOrder } from '~/store/Global/Order';

export const useGlobal = () => {
  const cart = useCart();
  const order = useOrder();

  return { cart, order };
};

export const GlobalStore = createContainer(useGlobal);
