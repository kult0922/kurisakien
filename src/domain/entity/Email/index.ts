import { Order } from '../../../@types/order';
import { CartItem } from '../../../@types/product';

export interface Email {
  order: Order;
  totalAmount: number;
  carts: CartItem[];
}
