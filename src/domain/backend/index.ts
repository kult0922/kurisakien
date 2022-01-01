import { emailImpl } from '~/domain/repository/Email';

export const backend = () => {
  return { email: emailImpl };
};
