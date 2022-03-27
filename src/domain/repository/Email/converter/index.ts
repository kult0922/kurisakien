import { OWNER_EMAIL } from '~/constants/env';
import { Email } from '~/domain/entity/Email';

const createOrderText = (email: Email) => {
  let items = '';
  email.carts.forEach((cartItem) => {
    items += cartItem.name + ': ';
    items += cartItem.amount + '個';
    items += '<br />';
  });

  const { order, postage, paymentTypeName, commission, itemSubTotal, total } = email;

  const body = `氏名: ${order.lastName} ${order.firstName}<br />
                郵便番号: ${order.postalCode}<br />
                住所: ${order.address}<br />
                電話番号: ${order.phone}<br />
                メール: ${order.email}<br />
                支払い方法: ${paymentTypeName}<br />
                ご意見、ご要望:<br />
                ${order.voice.replace(/\r?\n/g, '<br />')}<br /><br />
                ＜注文内容＞<br />
                ${items}
                商品小計: ${itemSubTotal}円<br />
                送料: ${postage}円<br />
                手数料: ${commission}円<br />
                合計: ${total}円<br />
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

  const preface = `ご注文ありがとうございます。<br />
                   以下の内容でご注文を承りました。<br /><br />
                   担当者が確認次第、お支払い方法についての詳細メールをお送りします。<br />
                   しばらくお待ち下さい。<br /><br />`;

  const footer = `<br />========================<br />
                  栗崎園<br />
                  〒437-0604<br />
                  静岡県浜松市天竜区春野町宮川537<br />`;

  return preface + orderText + footer;
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
