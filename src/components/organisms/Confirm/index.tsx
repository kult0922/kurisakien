import { useHistory } from 'react-router-dom';
import { CartData } from '../../../@types/product';
import styled from '@emotion/styled';
import { Item } from '../../molecules/Item';
import { GlobalStore } from '../../../store/Global';
import { routing } from '../../../constants/routing';
import { Customer, PaymentType } from '../../../@types/order';
import { SEND_EMAIL_API, OWNER_EMAIL } from '../../../constants/store/index';
import { createConfirmEmailBody, createOrderEmailBody } from './functions/mail';
import axios from 'axios';

const Wrapper = styled.div({
  textAlign: 'center',
});

export const Confirm: React.FC = () => {
  const { cart: cartStore, order: orderStore } = GlobalStore.useContainer();
  const { carts, total } = cartStore;
  const { paymentType, customer } = orderStore;
  const history = useHistory();

  const handleLink = (path: string) => history.push(path);

  const sendEmail = async (
    customer: Customer,
    paymentType: PaymentType,
    carts: CartData[],
    total: number,
  ) => {
    const orderEmailBody = createOrderEmailBody(
      customer.firstName,
      customer.lastName,
      customer.postalCode,
      customer.address,
      customer.phone,
      customer.email,
      paymentType,
      total,
      carts,
    );

    const confirmEmailBody = createConfirmEmailBody(
      customer.firstName,
      customer.lastName,
      customer.postalCode,
      customer.address,
      customer.phone,
      customer.email,
      paymentType,
      total,
      carts,
    );
    // ownerに注文メールを送る
    try {
      const response = await axios.post(SEND_EMAIL_API, {
        emailBody: orderEmailBody,
        destinationEmail: OWNER_EMAIL,
        subject: '注文メール',
      });
      handleLink(routing.complete.root);
      console.log(JSON.stringify(response.data));
    } catch (error) {
      console.error(error);
      handleLink(routing.checkout.error);
    }

    // userに確認メールを送る
    try {
      const response = await axios.post(SEND_EMAIL_API, {
        emailBody: confirmEmailBody,
        destinationEmail: customer.email,
        subject: 'ご注文ありがとうございます',
      });
      console.log(JSON.stringify(response.data));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Wrapper>
      <h1>注文確認</h1>
      {carts.map((item, i) => {
        return (
          <div key={i}>
            <Item id={item.id} />
            {item.amount}個
          </div>
        );
      })}
      <br />
      <br />
      合計金額: {total}円
      <br />
      郵便番号: {customer.postalCode}
      <br />
      住所: {customer.address}
      <br />
      氏名: {customer.lastName} {customer.firstName}
      <br />
      メールアドレス: {customer.email}
      <br />
      電話番号: {customer.phone}
      <br />
      決済方法: {paymentType}
      <br />
      <button onClick={() => sendEmail(customer, paymentType, carts, total)}>注文確定</button>
    </Wrapper>
  );
};
