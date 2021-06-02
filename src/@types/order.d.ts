type PaymentType = 'postal' | 'convenience' | 'bank';

export interface Customer {
  postalCode: string;
  address: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
}

export interface Order {
  customer: Customer;
  paymentMethod: PaymentMethod;
}
