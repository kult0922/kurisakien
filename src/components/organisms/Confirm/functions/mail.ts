import { CartData } from '../../../../@types/product';

export const createConfirmEmailBody = (
  firstName: string,
  lastName: string,
  postalCode: string,
  address: string,
  phone: string,
  email: string,
  paymentType: string,
  total: number,
  carts: CartData[],
) => {
  let items = '';
  carts.forEach((item) => {
    items += item.name + ': ';
    items += item.amount + '個';
    items += '<br />';
  });

  const body =
    'ご注文ありがとうございます！' +
    '<br />' +
    '以下の内容でご注文を承りました。' +
    '<br />' +
    '担当者が確認次第、再度メールにてご連絡いたします。' +
    '<br />' +
    'しばらくお待ち下さい。' +
    '<br />' +
    '氏名: ' +
    lastName +
    ' ' +
    firstName +
    '<br />' +
    '郵便番号: ' +
    postalCode +
    ' <br /> ' +
    '住所: ' +
    address +
    '<br />' +
    '電話番号: ' +
    phone +
    '<br />' +
    'メール: ' +
    email +
    '<br />' +
    '支払い方法: ' +
    paymentType +
    '<br />' +
    '＜注文内容＞' +
    '<br />' +
    '<br />' +
    items +
    '<br />' +
    '合計金額: ' +
    total +
    '円';

  return body;
};

export const createOrderEmailBody = (
  firstName: string,
  lastName: string,
  postalCode: string,
  address: string,
  phone: string,
  email: string,
  paymentType: string,
  total: number,
  carts: CartData[],
) => {
  let items = '';
  carts.forEach((item) => {
    items += item.name + ': ';
    items += item.amount + '個';
    items += '<br />';
  });
  const body =
    '氏名: ' +
    lastName +
    ' ' +
    firstName +
    '<br />' +
    '郵便番号: ' +
    postalCode +
    ' <br /> ' +
    '住所: ' +
    address +
    '<br />' +
    '電話番号: ' +
    phone +
    '<br />' +
    'メール: ' +
    email +
    '<br />' +
    '支払い方法: ' +
    paymentType +
    '<br />' +
    '＜注文内容＞' +
    '<br />' +
    '<br />' +
    items +
    '<br />' +
    '合計金額: ' +
    total +
    '円';

  return body;
};
