const items = '/items';
const cart = '/cart';
const checkout = '/checkout';

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
    confirm: checkout + '/confirm',
    complete: checkout + '/complete',
    error: checkout + '/error',
  },
};
