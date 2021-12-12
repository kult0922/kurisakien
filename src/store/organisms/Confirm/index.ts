import { useCallback } from 'react';
import { routing } from '../../../constants/routing';
import { backend } from '../../../domain/backend';
import { useRouter } from 'next/router';
import { Area, PaymentType } from '../../../@types/order';
import { GlobalStore } from '../../Global';

const getPostage = (itemsPrice: number, area: Area): number => {
  if (itemsPrice >= 10000) return 0;

  if (itemsPrice >= 5000) {
    if (area === 'shizuoka') return 300;
    if (area === 'near') return 400;
    if (area === 'middle') return 500;
    if (area === 'far') return 600;
  } else {
    if (area === 'shizuoka') return 650;
    if (area === 'near') return 750;
    if (area === 'middle') return 950;
    if (area === 'far') return 1200;
  }
};

const getCommission = (paymentType: PaymentType): number => {
  if (paymentType === 'postal') return 0;
  if (paymentType === 'bank') return 0;
  if (paymentType === 'convenience') return 200;
  if (paymentType === 'delivery') return 450;
};

export const useConfirm = () => {
  const { cart: cartStore, order: orderStore } = GlobalStore.useContainer();
  const { carts, clearCart } = cartStore;
  const itemSubTotal = cartStore.total;
  const { order } = orderStore;
  const router = useRouter();
  const postage = getPostage(itemSubTotal, order.area);
  const commission = getCommission(order.paymentType);

  const getPaymentTypeName = useCallback((paymentType: PaymentType): string => {
    if (paymentType === 'postal') return '郵便振替';
    if (paymentType === 'bank') return '銀行振り込み';
    if (paymentType === 'convenience') return 'コンビニ払い';
    if (paymentType === 'delivery') return '代引き払い';
  }, []);

  const onClickConfirmButton = useCallback(async () => {
    await backend()
      .email.createEmail({
        order,
        paymentTypeName: getPaymentTypeName(order.paymentType),
        postage,
        commission,
        itemSubTotal: itemSubTotal,
        total: itemSubTotal + commission + postage,
        carts,
      })
      .then(() => {
        router.push(routing.checkout.complete);
        // 注文確定後にlocal strageのカートデータを削除
        clearCart();
      })
      .catch(() => {
        router.push(routing.checkout.error);
      });
  }, [order, itemSubTotal, carts, router, commission, postage, clearCart, getPaymentTypeName]);

  return {
    carts,
    itemSubTotal,
    order,
    postage,
    commission,
    getPaymentTypeName,
    onClickConfirmButton,
  };
};
