import { Item } from '~/@types/product';
import { CMSclient } from '~/lib/microCMS/client';

export const CMSfetcher = <T>() => {
  return CMSclient.get({
    endpoint: 'products',
  })
    .then((res) => {
      return res.contents as T;
    })
    .catch((err) => {
      return [] as T;
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
      return {} as Item;
    });
};
