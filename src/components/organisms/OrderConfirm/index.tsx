import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { Item } from '../../molecules/Item';
import { GlobalStore } from '../../../store/Global';

const Wrapper = styled.div({
  textAlign: 'center',
});

export const OrderConfirm: React.FC = () => {
  const { cart: cartStore, order: orderStore } = GlobalStore.useContainer();
  const { carts, total } = cartStore;
  const { paymentType, customer } = orderStore;

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
      <Link to="order-complete">注文確定</Link>
    </Wrapper>
  );
};
