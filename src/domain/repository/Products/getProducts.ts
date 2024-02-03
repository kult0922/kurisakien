import { Item } from '~/@types/product';
import { CMSclient } from '~/lib/microCMS/client';

export const getProducts = () => {
  return CMSclient.get({
    endpoint: 'products',
    queries: { limit: 100 },
  })
    .then((res) => {
      return res.contents as Item[];
    })
    .catch((err) => {
      console.log(err);
      return [];
    });
};

export const getProduct = async (id: string) => {
  return CMSclient.get({
    endpoint: `products/${id}`,
  })
    .then((res) => {
      return res as Item;
    })
    .catch((err) => {
      console.log(err);
      return {} as Item;
    });
};
