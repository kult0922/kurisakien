import { useCallback } from 'react';
import { useHistory } from 'react-router';
import { routing } from '../../../constants/routing';
import { backend } from '../../../domain/backend';
import { GlobalStore } from '../../Global';

export const useConfirm = () => {
  const { cart: cartStore, order: orderStore } = GlobalStore.useContainer();
  const { carts, total } = cartStore;
  const { paymentType, customer } = orderStore;
  const history = useHistory();

  const onClickConfirmButton = useCallback(async () => {
    await backend()
      .email.createEmail({ customer, paymentType, totalAmount: total, carts })
      .then(() => {
        history.push(routing.checkout.complete);
      })
      .catch(() => {
        history.push(routing.checkout.error);
      });
  }, [carts, customer, paymentType, total, history]);

  return { carts, total, paymentType, customer, onClickConfirmButton };
};
