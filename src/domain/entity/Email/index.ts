import { Order } from '~/@types/order';
import { CartItem } from '~/@types/product';

export interface Email {
  order: Order;
  paymentTypeName: string;
  postage: number;
  commission: number;
  itemSubTotal: number;
  total: number;
  carts: CartItem[];
}
