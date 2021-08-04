import { Customer, PaymentType } from '../../@types/order';
import { Item } from '../../@types/product';

export const itemList: Item[] = [
  {
    id: 'a01',
    imagePath: 'http://placehold.jp/24/339933/223322/300x200.png?text=普通煎茶',
    name: '普通煎茶',
    price: 1000,
    discription: '普段使いのお茶です',
  },
  {
    id: 'a02',
    imagePath: 'http://placehold.jp/24/339933/223322/300x200.png?text=高級煎茶',
    name: '高級煎茶',
    price: 2000,
    discription: 'ちょっと贅沢なお茶です',
  },
  {
    id: 'a03',
    imagePath: 'http://placehold.jp/24/339933/223322/300x200.png?text=紅茶',
    name: '春野の紅茶',
    price: 500,
    discription: '国産のマイルドな紅茶です',
  },
];

export const initialCustomer: Customer = {
  postalCode: '',
  address: '',
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
};

export const initialPaymentType: PaymentType = 'postal';
