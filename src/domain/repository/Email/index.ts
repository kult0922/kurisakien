import axios from 'axios';
// import { SEND_EMAIL_API } from '~/constants/env';
import { Email } from '~/domain/entity/Email';
import { createOrderText, emailImplConverter } from '~/domain/repository/Email/converter';
import emailjs from '@emailjs/browser';

// setup emailjs
emailjs.init({
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_KEY,
  // Do not allow headless browsers
  blockHeadless: true,
  blockList: {
    // Block the suspended emails
    list: ['foo@emailjs.com', 'bar@emailjs.com'],
    // The variable contains the email address
    watchVariable: 'userEmail',
  },
  limitRate: {
    // Set the limit rate for the application
    id: 'app',
    // Allow 1 request per 10s
    throttle: 10000,
  },
});

const createEmail = async (email: Email): Promise<void> => {
  const templateParams = {
    user_email: email.order.email,
    name: email.order.lastName + ' ' + email.order.firstName,
    postalCode: email.order.postalCode,
    address: email.order.address,
    phone: email.order.phone,
    paymentTypeName: email.paymentTypeName,
    voice: email.order.voice,
    items: createOrderText(email),
    itemSubTotal: email.itemSubTotal,
    postage: email.postage,
    comission: email.commission,
    total: email.total,
  };
  await emailjs.send('', '', templateParams);

  // await Promise.all([createEmailOwner(email), createEmailUser(email)]);
};

export const emailImpl = {
  createEmail,
};

export type EmailUseCase = typeof emailImpl;
