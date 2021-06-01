type PaymentType = 'postal' | 'convenience' | 'bank';

export interface Customer {
  postalCode: string;
  address: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
}

export interface OrderInformation {
  customer: Customer;
  paymentMethod: PaymentMethod;
}
