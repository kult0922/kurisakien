const items = '/items';
const cart = '/cart';
const checkout = '/checkout';
const confirm = '/confirm';
const complete = '/complete';

export const routing = {
  root: '/',
  items: {
    root: items,
    itemId: items + '/:id',
  },
  cart: {
    root: cart,
  },
  checkout: {
    root: checkout,
    error: checkout + '/error',
  },
  confirm: {
    root: confirm,
  },
  complete: {
    root: complete,
  },
};
