import { CartItem } from '~/@types/product';
import { z } from 'zod';
import { OrderSchema } from '~/store/organisms/Checkout';

export interface Email {
  order: z.infer<typeof OrderSchema>;
  paymentTypeName: string;
  postage: number;
  commission: number;
  itemSubTotal: number;
  total: number;
  carts: CartItem[];
}
