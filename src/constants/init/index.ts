import { OrderSchema } from '~/store/organisms/Checkout';
import { z } from 'zod';

export const initialOrder: z.infer<typeof OrderSchema> = {
  postalCode: null,
  address: null,
  firstName: null,
  lastName: null,
  phone: null,
  email: null,
  area: null,
  paymentType: null,
};
