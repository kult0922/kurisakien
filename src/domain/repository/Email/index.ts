import { Email } from '~/domain/entity/Email';
import { createOrderText } from '~/domain/repository/Email/converter';
import emailjs from '@emailjs/browser';

// setup emailjs
emailjs.init({
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_KEY,
  // Do not allow headless browsers
  blockHeadless: false,
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

const sendEmail = async (email: Email): Promise<void> => {
  const templateParams = {
    user_email: email.order.email, // 返信用 email
    email: email.order.email,
    name: email.order.lastName + ' ' + email.order.firstName,
    postalCode: email.order.postalCode,
    address: email.order.address,
    phone: email.order.phone,
    paymentTypeName: email.paymentTypeName,
    voice: email.order.voice,
    items: createOrderText(email),
    itemSubTotal: email.itemSubTotal,
    postage: email.postage,
    commission: email.commission,
    total: email.total,
  };

  await emailjs.send('service_vf4d5jl', 'template_5lwzq1k', templateParams);
};

export const emailImpl = {
  sendEmail,
};

export type EmailUseCase = typeof emailImpl;
