import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { Item } from '../../molecules/Item';
import { OrderContainer } from '../../../store/Global/Order';

const Wrapper = styled.div({
  textAlign: 'center',
});

export const OrderConfirm: React.FC = () => {
  const { carts, total, orderInformation } = OrderContainer.useContainer();
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
      郵便番号: {orderInformation.customer.postalCode}
      <br />
      住所: {orderInformation.customer.address}
      <br />
      氏名: {orderInformation.customer.lastName} {orderInformation.customer.firstName}
      <br />
      メールアドレス: {orderInformation.customer.email}
      <br />
      電話番号: {orderInformation.customer.phone}
      <br />
      決済方法: {orderInformation.paymentMethod}
      <br />
      <Link to="orderComplete">注文確定</Link>
    </Wrapper>
  );
};
