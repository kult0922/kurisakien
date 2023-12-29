import { Item } from '~/@types/product';
import { CMSclient } from '~/lib/microCMS/client';

export const getProducts = async () => {
  return CMSclient.get({
    endpoint: 'products/',
  })
    .then((res) => {
      console.log(res);
      return res.contents as Item[];
    })
    .catch((err) => {
      return [] as Item[];
    });
};

export const getProduct = async (id: string) => {
  return CMSclient.get({
    endpoint: `products/${id}`,
  })
    .then((res) => {
      console.log('detail res', res);
      return res as Item;
    })
    .catch((err) => {
      return {} as Item;
    });
};
