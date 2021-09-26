type PaymentType = 'postal' | 'convenience' | 'bank';

export interface Order {
  postalCode: string;
  address: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  paymentType: PaymentType;
}
