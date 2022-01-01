import { useCallback, useMemo } from 'react';
import { useRouter } from 'next/router';
import { Area, PaymentType } from '~/@types/order';
import { GlobalStore } from '~/store/Global';
import { Email } from '~/domain/entity/Email';
import { backend } from '~/domain/backend';
import { routing } from '~/constants/routing';

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

const getPaymentTypeName = (paymentType: PaymentType): string => {
  if (paymentType === 'postal') return '郵便振替';
  if (paymentType === 'bank') return '銀行振り込み';
  if (paymentType === 'convenience') return 'コンビニ払い';
  if (paymentType === 'delivery') return '代引き払い';
};

export const useConfirm = () => {
  const { cart: cartStore, order: orderStore } = GlobalStore.useContainer();
  const { carts, clearCart } = cartStore;
  const itemSubTotal = cartStore.total;
  const { order } = orderStore;
  const router = useRouter();
  const postage = getPostage(itemSubTotal, order.area);
  const commission = getCommission(order.paymentType);

  const total = useMemo(() => {
    return itemSubTotal + postage + commission;
  }, [itemSubTotal, postage, commission]);

  const emailParams: Email = useMemo(() => {
    return {
      order,
      paymentTypeName: getPaymentTypeName(order.paymentType),
      postage,
      commission,
      itemSubTotal,
      total,
      carts,
    };
  }, [order, itemSubTotal, postage, commission, carts, total]);

  const onClickConfirmButton = useCallback(async () => {
    await backend()
      .email.createEmail(emailParams)
      .then(() => {
        router.push(routing.checkout.complete);
        clearCart();
      })
      .catch(() => {
        router.push(routing.checkout.error);
      });
  }, [emailParams, router, clearCart]);

  return {
    itemSubTotal,
    order,
    postage,
    commission,
    total,
    getPaymentTypeName,
    onClickConfirmButton,
  };
};
