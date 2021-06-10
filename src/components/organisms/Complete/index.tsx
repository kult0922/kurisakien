import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { Item } from '../../molecules/Item';
import { GlobalStore } from '../../../store/Global';
import { routing } from '../../../constants/routing';

const Wrapper = styled.div({
  textAlign: 'center',
});

export const Complete: React.FC = () => {
  const { cart: cartStore } = GlobalStore.useContainer();
  const { carts } = cartStore;

  return (
    <Wrapper>
      <h1>ご注文ありがとうございました</h1>
      {carts.map((item, i) => {
        return (
          <div key={i}>
            <Item id={item.id} />
            {item.amount}個
          </div>
        );
      })}
      <br />
      <Link to={routing.root}>ホームへ戻る</Link>
    </Wrapper>
  );
};
