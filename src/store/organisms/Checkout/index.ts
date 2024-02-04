import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { routing } from '~/constants/routing';
import { GlobalStore } from '~/store/Global';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

export const PaymentTypeSchema = z.enum(['card', 'postal', 'convenience', 'bank', 'delivery'], {
  required_error: '必須項目です',
});
export const AreaSchema = z.enum(['shizuoka', 'near', 'middle', 'far'], {
  required_error: '必須項目です',
});

export const OrderSchema = z.object({
  postalCode: z.string({ required_error: '必須項目です' }).regex(/^[0-9]{3}-?[0-9]{4}$/, {
    message: '半角数字、ハイフン付きで入力してください（例: 123-4567）',
  }),
  address: z.string({ required_error: '必須項目です' }).min(1, { message: '必須項目です' }),
  area: AreaSchema,
  lastName: z.string({ required_error: '必須項目です' }).min(1, { message: '必須項目です' }),
  firstName: z.string({ required_error: '必須項目です' }).min(1, { message: '必須項目です' }),
  phone: z
    .string({ required_error: '必須項目です' })
    .regex(/^[0-9]{2,4}-?[0-9]{2,4}-?[0-9]{3,4}$/, {
      message: '半角数字、ハイフン付きで入力してください（例: 123-456-7890）',
    }),
  email: z
    .string({ required_error: '必須項目です' })
    .email({ message: 'メールアドレスを正しく入力してください' }),
  voice: z.string().optional(),
  paymentType: PaymentTypeSchema,
});
[];

export const useCheckout = () => {
  const { setOrder } = GlobalStore.useContainer().order;
  const router = useRouter();

  const form = useForm<z.infer<typeof OrderSchema>>({
    resolver: zodResolver(OrderSchema),
    mode: 'onChange',
    criteriaMode: 'all',
    shouldFocusError: false,
  });

  const onSubmit = useCallback(
    (values: z.infer<typeof OrderSchema>) => {
      setOrder(values);
      router.push(routing.checkout.confirm);
    },
    [router, setOrder],
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

  return { onSubmit, form };
};
