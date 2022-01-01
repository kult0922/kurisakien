import { useEffect } from 'react';
import { GlobalStore } from '~/store/Global';
export const useComplete = () => {
  const { cart: cartStore } = GlobalStore.useContainer();
  const { clearCart } = cartStore;
  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return {};
};
