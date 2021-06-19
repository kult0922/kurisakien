import { Customer, PaymentType } from '../../../@types/order';
import { CartItem } from '../../../@types/product';

export interface Email {
  customer: Customer;
  paymentType: PaymentType;
  totalAmount: number;
  carts: CartItem[];
}
