import { TabBar } from '../../molecules/TabBar';
import { CartTable } from '../CartTable';
import { GlobalStore } from '../../../store/Global';
import { Link } from 'react-router-dom';
import { routing } from '../../../constants/routing';
import { SectionTitle } from '../../atoms/SectionTitle';
import { Box } from '../../../lib/styled';

export const Cart: React.FC = () => {
  const { cart: cartStore } = GlobalStore.useContainer();
  const { carts } = cartStore;
  return (
    <>
      <TabBar />
      <Box mt={10}>
        <SectionTitle>カートの中身</SectionTitle>
      </Box>
      <Box mt={10}>
        {carts.length ? (
          <div>
            <CartTable editable />
            <Link to={routing.checkout.root}>注文に進む</Link>
          </div>
        ) : (
          'ショッピングカートに商品は入っていません。'
        )}
      </Box>

      <Link to={routing.items.root}>買い物を続ける</Link>
    </>
  );
};
