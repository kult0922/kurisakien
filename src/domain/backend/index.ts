import { emailImpl } from '../repository/Email';

export const backend = () => {
  return { email: emailImpl };
};
