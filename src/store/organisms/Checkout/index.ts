import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Order } from '../../../@types/order';
import { routing } from '../../../constants/routing';
import { GlobalStore } from '../../Global';

export const useCheckout = () => {
  const { setOrder } = GlobalStore.useContainer().order;
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Order>({
    mode: 'onChange',
    criteriaMode: 'all',
    shouldFocusError: false,
  });

  const onSubmit: SubmitHandler<Order> = useCallback(
    (data) => {
      setOrder(data);
      router.push(routing.checkout.confirm);
    },
    [router, setOrder],
  );

  return { onSubmit, register, handleSubmit, errors };
};
