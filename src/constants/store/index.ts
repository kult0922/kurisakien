import { Order } from '../../@types/order';
import { Item } from '../../@types/product';

export const itemList: Item[] = [
  {
    id: 'a01',
    imagePath: 'http://placehold.jp/24/339933/223322/600x600.png?text=普通煎茶',
    name: '普通煎茶',
    price: 1000,
    description: `
普段使いのお茶です
２行目
３行目
４行目
`,
  },
  {
    id: 'a02',
    imagePath: 'http://placehold.jp/24/339933/223322/600x600.png?text=高級煎茶',
    name: '高級煎茶',
    price: 2000,
    description: 'ちょっと贅沢なお茶です\n２行目\n３行目',
  },
  {
    id: 'a03',
    imagePath: 'http://placehold.jp/24/339933/223322/600x600.png?text=紅茶',
    name: '春野の紅茶',
    price: 500,
    description: '国産のマイルドな紅茶です',
  },
  {
    id: 'a04',
    imagePath: 'http://placehold.jp/24/339933/223322/600x600.png?text=普通煎茶',
    name: 'サンプル１',
    price: 1000,
    description: 'this is sample',
  },
  {
    id: 'a05',
    imagePath: 'http://placehold.jp/24/339933/223322/600x600.png?text=普通煎茶',
    name: 'サンプル２',
    price: 1000,
    description: 'this is sample',
  },
  {
    id: 'a06',
    imagePath: 'http://placehold.jp/24/339933/223322/600x600.png?text=普通煎茶',
    name: 'サンプル３',
    price: 1000,
    description: 'this is sample',
  },
  {
    id: 'a07',
    imagePath: 'http://placehold.jp/24/339933/223322/600x600.png?text=普通煎茶',
    name: 'サンプル４',
    price: 1000,
    description: 'this is sample',
  },
  {
    id: 'a08',
    imagePath: 'http://placehold.jp/24/339933/223322/600x600.png?text=普通煎茶',
    name: 'サンプル５',
    price: 1000,
    description: 'this is sample',
  },
  {
    id: 'a09',
    imagePath: 'http://placehold.jp/24/339933/223322/600x600.png?text=普通煎茶',
    name: 'サンプル６',
    price: 1000,
    description: 'this is sample',
  },
  {
    id: 'a10',
    imagePath: 'http://placehold.jp/24/339933/223322/600x600.png?text=普通煎茶',
    name: 'サンプル７',
    price: 1000,
    description: 'this is sample',
  },
  {
    id: 'a11',
    imagePath: 'http://placehold.jp/24/339933/223322/600x600.png?text=普通煎茶',
    name: 'サンプル８',
    price: 1000,
    description: 'this is sample',
  },
  {
    id: 'a12',
    imagePath: 'http://placehold.jp/24/339933/223322/600x600.png?text=普通煎茶',
    name: 'サンプル９',
    price: 1000,
    description: 'this is sample',
  },
  {
    id: 'a13',
    imagePath: 'http://placehold.jp/24/339933/223322/600x600.png?text=普通煎茶',
    name: 'サンプル１０',
    price: 1000,
    description: 'this is sample',
  },
  {
    id: 'a14',
    imagePath: 'http://placehold.jp/24/339933/223322/600x600.png?text=普通煎茶',
    name: 'サンプル１１',
    price: 1000,
    description: 'this is sample',
  },
  {
    id: 'a15',
    imagePath: 'http://placehold.jp/24/339933/223322/600x600.png?text=普通煎茶',
    name: 'サンプル１２',
    price: 1000,
    description: 'this is sample',
  },
];

export const initialOrder: Order = {
  postalCode: '',
  address: '',
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  paymentType: 'postal',
};
