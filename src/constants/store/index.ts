import { Customer, PaymentType } from '../../@types/order';
import { Item } from '../../@types/product';

export const itemList: Item[] = [
  {
    id: 'a01',
    imagePath: 'path1',
    name: '普通煎茶',
    price: 1000,
    discription: '普段使いのお茶です',
  },
  {
    id: 'a02',
    imagePath: 'path2',
    name: '高級煎茶',
    price: 2000,
    discription: 'ちょっと贅沢なお茶です',
  },
  {
    id: 'a03',
    imagePath: 'path3 ',
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

export const OWNER_EMAIL = 'toarushimanookanoue@gmail.com';
export const SEND_EMAIL_API = 'https://us-central1-kurisakienhomepage.cloudfunctions.net/sendEmail';
