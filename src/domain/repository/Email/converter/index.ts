import { OWNER_EMAIL } from '../../../../constants/env';
import { Email } from '../../../entity/Email';

const createOrderText = (email: Email) => {
  let items = '';
  email.carts.forEach((cartItem) => {
    items += cartItem.name + ': ';
    items += cartItem.amount + '個';
    items += '<br />';
  });

  const { order, totalAmount } = email;

  const body = `氏名: ${order.lastName} ${order.firstName}<br />
                郵便番号: ${order.postalCode}<br />
                住所: ${order.address}<br />
                電話番号: ${order.phone}<br />
                メール: ${order.email}<br />
                支払い方法: ${order.paymentType}<br /><br />
                ＜注文内容＞<br />
                ${items}
                合計金額: ${totalAmount}
                円
                `;
  return body;
};

const createOwnerEmailBody = (email: Email) => {
  const orderText = createOrderText(email);
  const preface = `注文がありました<br />`;

  return preface + orderText;
};

const createUserEmailBody = (email: Email) => {
  const orderText = createOrderText(email);

  const preface = `ご注文ありがとうございます！<br />
                   以下の内容でご注文を承りました。<br />
                   担当者が確認次第、再度メールにてご連絡いたします。<br />
                   しばらくお待ち下さい。<br /><br />`;

  return preface + orderText;
};

interface CreateEmailRequestParameter {
  emailBody: string;
  destinationEmail: string;
  subject: string;
}

const createOwnerParameter = (email: Email): CreateEmailRequestParameter => {
  const params: CreateEmailRequestParameter = {
    emailBody: createOwnerEmailBody(email),
    destinationEmail: OWNER_EMAIL,
    subject: '注文メール',
  };
  return params;
};
const createUserParameter = (email: Email): CreateEmailRequestParameter => {
  const params: CreateEmailRequestParameter = {
    emailBody: createUserEmailBody(email),
    destinationEmail: email.order.email,
    subject: 'ご注文ありがとうございます',
  };
  return params;
};

export const emailImplConverter = { createOwnerParameter, createUserParameter };
