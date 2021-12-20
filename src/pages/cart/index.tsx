import { CartTable } from '../../components/organisms/CartTable';
import { GlobalStore } from '../../store/Global';
import { routing } from '../../constants/routing';
import { SectionTitle } from '../../components/atoms/SectionTitle';
import { Box } from '../../lib/styled';
import { Header } from '../../components/organisms/Header';
import { BasicLink } from '../../components/atoms/BasicLink';
import styled from '@emotion/styled';
import Link from 'next/link';

const Wrapper = styled.div({
  textAlign: 'center',
});

const Button = styled.a({
  background: '#67ce9a',
  textAlign: 'center',
  boxSizing: 'border-box',
  display: 'block',
  border: '2px solid #67ce9a',
  color: '#fff',
  fontWeight: 'bold',
  padding: '0.5em 2em 0.5em 1em',
  lineHeight: '1.4',
  maxWidth: '300px',
  width: '100%',
  margin: '0 auto',
  position: 'relative',
  '&::after': {
    content: '""',
    width: '10px',
    height: '10px',
    display: 'block',
    position: 'absolute',
    top: '50%',
    right: '24px',
    marginTop: '-6px',
    transform: 'rotate(45deg)',
    borderTop: '2px solid #fff',
    borderRight: '2px solid #fff',
    transition: 'right 0.3s',
  },
  '&:hover': {
    background: '#67ce9a',
    color: '#fff',
    '&::after': {
      borderColor: '#fff',
      right: '6px',
    },
  },
  '&:active, &:focus': {
    opacity: '0.8',
  },
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
            <Box>
              <CartTable editable showTotal />
              <Box mt={20}>
                <Link href={routing.checkout.root} passHref>
                  <Button>注文に進む</Button>
                </Link>
              </Box>
            </Box>
          ) : (
            'ショッピングカートに商品は入っていません。'
          )}
        </Box>
        <Box mt={20}>
          <BasicLink path={routing.items.root} text={'買い物を続ける'}></BasicLink>
        </Box>
      </Wrapper>
    </>
  );
};

export default Cart;
