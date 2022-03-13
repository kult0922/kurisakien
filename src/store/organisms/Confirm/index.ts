import { useCallback, useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';
import { Area, Order, PaymentType } from '~/@types/order';
import { GlobalStore } from '~/store/Global';
import { Email } from '~/domain/entity/Email';
import { backend } from '~/domain/backend';
import { routing } from '~/constants/routing';
import { CartItem } from '~/@types/product';
import axios from 'axios';
import { CardNumberElementComponent } from '@stripe/react-stripe-js';
import { PaymentIntentResult, Stripe, StripeElements } from '@stripe/stripe-js';

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
  return 0;
};

const getPaymentTypeName = (paymentType: PaymentType): string => {
  if (paymentType === 'card') return 'クレジットカード';
  if (paymentType === 'postal') return '郵便振替';
  if (paymentType === 'bank') return '銀行振り込み';
  if (paymentType === 'convenience') return 'コンビニ払い';
  if (paymentType === 'delivery') return '代引き払い';
};

const submittionIsInvalid = (carts: CartItem[], order: Order) => {
  if (carts.length === 0) return true;
  if (!order?.address) return true;
  if (!order?.phone) return true;
  if (!order?.area) return true;
  if (!order?.email) return true;
  if (!order?.firstName) return true;
  if (!order?.lastName) return true;
  if (!order?.postalCode) return true;

  return false;
};

export const useConfirm = () => {
  const { cart: cartStore, order: orderStore } = GlobalStore.useContainer();
  const { carts } = cartStore;
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

  const isOrderReady = useCallback((): boolean => {
    if (submittionIsInvalid(carts, order)) {
      return false;
    }
    return true;
  }, [carts, order]);

  const sendOrderMail = useCallback(async () => {
    await backend()
      .email.createEmail(emailParams)
      .then(() => {
        router.push(routing.checkout.complete);
      })
      .catch(() => {
        router.push(routing.checkout.error);
      });
  }, [router, emailParams]);

  // stripe
  const onStripe = useCallback(
    async (
      cardNumberElement: CardNumberElementComponent,
      stripe: Stripe,
      elements: StripeElements,
    ): Promise<PaymentIntentResult> => {
      const res = await axios.post(process.env.NEXT_PUBLIC_STRIPE_API, { amount: total });
      const secret = await res.data.client_secret;

      const result = await stripe.confirmCardPayment(secret, {
        payment_method: {
          // FYI: payment_method (https://stripe.com/docs/api/payment_methods)
          // card: elements.getElement(CardElement),
          card: elements.getElement(cardNumberElement),
          billing_details: {
            name: order.lastName + order.firstName,
            email: order.email,
            phone: order.phone,
            address: {
              city: order.address,
              postal_code: order.postalCode,
            },
          },
        },
      });

      return result;
    },
    [order.lastName, order.firstName, total],
  );

  const beforeUnloadhandler = (event) => {
    event.returnValue = '入力した内容がリセットされます。よろしいですか？';
  };

  useEffect(() => {
    window.addEventListener('beforeunload', beforeUnloadhandler);
    return () => {
      window.removeEventListener('beforeunload', beforeUnloadhandler);
    };
  }, []);

  return {
    itemSubTotal,
    order,
    postage,
    commission,
    total,
    getPaymentTypeName,
    isOrderReady,
    sendOrderMail,
    onStripe,
  };
};
