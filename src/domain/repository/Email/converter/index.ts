import { Email } from '~/domain/entity/Email';

export const createOrderText = (email: Email) => {
  let items = '';
  email.carts.forEach((cartItem) => {
    items += cartItem.name + ' ';
    items += cartItem.amount + ': ';
    items += cartItem.count + '個';
    items += '<br />';
  });

  return items;
};
