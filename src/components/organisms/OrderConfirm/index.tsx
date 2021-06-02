import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { Item } from '../../molecules/Item';
import { OrderContainer } from '../../../store/Global/Order';
import { OrderInformationContainer } from '../../../store/Organisms/OrderInformation';

const Wrapper = styled.div({
  textAlign: 'center',
});

export const OrderConfirm: React.FC = () => {
  const { carts, total } = OrderContainer.useContainer();
  const { paymentOption, customer } = OrderInformationContainer.useContainer();

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
      決済方法: {paymentOption}
      <br />
      <Link to="orderComplete">注文確定</Link>
    </Wrapper>
  );
};
