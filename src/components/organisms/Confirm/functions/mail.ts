import { CartItem } from '../../../../@types/product';

const createOrderText = (
  firstName: string,
  lastName: string,
  postalCode: string,
  address: string,
  phone: string,
  email: string,
  paymentType: string,
  total: number,
  cartItems: CartItem[],
) => {
  let items = '';
  cartItems.forEach((cartItem) => {
    items += cartItem.name + ': ';
    items += cartItem.amount + '個';
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

export const createConfirmEmailBody = (
  firstName: string,
  lastName: string,
  postalCode: string,
  address: string,
  phone: string,
  email: string,
  paymentType: string,
  total: number,
  cartItems: CartItem[],
) => {
  const orderText = createOrderText(
    firstName,
    lastName,
    postalCode,
    address,
    phone,
    email,
    paymentType,
    total,
    cartItems,
  );

  const preface: string =
    'ご注文ありがとうございます！' +
    '<br />' +
    '以下の内容でご注文を承りました。' +
    '<br />' +
    '担当者が確認次第、再度メールにてご連絡いたします。' +
    '<br />' +
    'しばらくお待ち下さい。' +
    '<br /><br />';

  return preface + orderText;
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
  cartItems: CartItem[],
) => {
  const orderText = createOrderText(
    firstName,
    lastName,
    postalCode,
    address,
    phone,
    email,
    paymentType,
    total,
    cartItems,
  );
  const preface = '注文がありました' + '<br />';

  return preface + orderText;
};
