import { createClient } from 'microcms-js-sdk';

export const CMSclient = createClient({
  serviceDomain: 'kurisakien-product',
  apiKey: process.env.NEXT_PUBLIC_CMS_API_KEY,
});
