const items = '/items';
const news = '/news';
const cart = '/cart';
const checkout = '/checkout';

export const routing = {
  root: '/',
  items: {
    root: items,
    id: items + '/[id]',
  },
  news: {
    root: news,
    id: news + '/[id]',
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
