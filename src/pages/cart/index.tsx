import { CartTable } from '../../components/organisms/CartTable';
import { GlobalStore } from '../../store/Global';
import Link from 'next/link';
import { routing } from '../../constants/routing';
import { SectionTitle } from '../../components/atoms/SectionTitle';
import { Box } from '../../lib/styled';
import { Header } from '../../components/organisms/Header';
import styled from '@emotion/styled';

const Wrapper = styled.div({
  textAlign: 'center',
});

const Cart: React.FC = () => {
  const { cart: cartStore } = GlobalStore.useContainer();
  const { carts } = cartStore;
  return (
    <>
      <Header />
      <Wrapper>
        <Box mt={10}>
          <SectionTitle>カートの中身</SectionTitle>
        </Box>
        <Box mt={10}>
          {carts.length ? (
            <div>
              <CartTable editable />
              <Link href={routing.checkout.root}>
                <a>注文に進む</a>
              </Link>
            </div>
          ) : (
            'ショッピングカートに商品は入っていません。'
          )}
        </Box>

        <Link href={routing.items.root}>買い物を続ける</Link>
      </Wrapper>
    </>
  );
};

export default Cart;
