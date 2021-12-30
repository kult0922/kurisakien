const items = '/items';
// const gifts = '/items/gifts';
const news = '/news';
const cart = '/cart';
const checkout = '/checkout';
const docs = '/docs';

export const routing = {
  root: '/',
  items: {
    root: items,
    id: items + '/[id]',
    gifts: {
      id: items + '/gifts/[id]',
    },
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
  docs: {
    privacy: docs + '/privacy',
    low: docs + '/low',
    fax: docs + '/fax',
  },
};
