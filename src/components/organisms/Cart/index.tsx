import { TabBar } from '../../molecules/TabBar';
import { CartTable } from '../CartTable';
import { GlobalStore } from '../../../store/Global';
import { Link } from 'react-router-dom';
import { routing } from '../../../constants/routing';

export const Cart: React.FC = () => {
  const { cart: cartStore } = GlobalStore.useContainer();
  const { carts } = cartStore;
  return (
    <>
      <TabBar />
      <br />
      <br />
      <h2>カートの中身</h2>
      <br />
      {carts.length ? <CartTable changeItemAmount /> : 'ショッピングカートに商品は入っていません。'}
      <br />
      {carts.length ? <Link to={routing.checkout.root}>注文に進む</Link> : null}
      <br />
      <Link to={routing.items.root}>買い物を続ける</Link>
    </>
  );
};
