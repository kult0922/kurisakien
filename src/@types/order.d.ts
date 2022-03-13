type PaymentType = 'postal' | 'convenience' | 'bank' | 'delivery' | 'card';
type Area = 'shizuoka' | 'near' | 'middle' | 'far';

export interface Order {
  postalCode: string;
  address: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  area: Area;
  paymentType: PaymentType;
}
