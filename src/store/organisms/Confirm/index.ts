import { useCallback } from 'react';
import { routing } from '../../../constants/routing';
import { backend } from '../../../domain/backend';
import { useRouter } from 'next/router';
import { GlobalStore } from '../../Global';

export const useConfirm = () => {
  const { cart: cartStore, order: orderStore } = GlobalStore.useContainer();
  const { carts, total } = cartStore;
  const { order } = orderStore;
  const router = useRouter();

  const onClickConfirmButton = useCallback(async () => {
    await backend()
      .email.createEmail({ order, totalAmount: total, carts })
      .then(() => {
        router.push(routing.checkout.complete);
      })
      .catch(() => {
        router.push(routing.checkout.error);
      });
  }, [carts, order, total, router]);

  return { carts, total, order, onClickConfirmButton };
};
