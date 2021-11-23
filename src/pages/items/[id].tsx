import { itemList } from '../../constants/store';
import styled from '@emotion/styled';
import { GlobalStore } from '../../store/Global';
import { useState } from 'react';
import { LinkButton } from '../../components/atoms/LinkButton';
import { Box, Flex } from '../../lib/styled';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Header } from '../../components/organisms/Header';
import { routing } from '../../constants/routing';
import { bp } from '../../constants/css';

const PurchaseWrapper = styled(Box)({
  textAlign: 'left',
});

const Description = styled(Box)({
  whiteSpace: 'pre-wrap',
});

const Name = styled(Box)({
  fontSize: '24px',
});

const Price = styled(Box)({
  color: '#909090',
});

const Amount = styled(Box)({
  color: '#909090',
});

const ItemImage = styled.img({
  width: '45%',
  [bp.md]: {
    width: '100%',
  },
});

const ItemDetail: React.FC = () => {
  const { cart: cartStore } = GlobalStore.useContainer();
  const { addCarts } = cartStore;
  const [itemCount, setItemCount] = useState(1);
  const router = useRouter();
  const { id } = router.query;
  const item = itemList.find((item) => item.id === id);
  if (!item) return null;
  const { imagePath, name, price, amount, description } = item;
  return (
    <>
      <Header />
      <Box mt={50}>
        <Flex justifyContent={'center'} alignItems={'top'} flexWrap={'wrap'}>
          <ItemImage src={imagePath} />
          <PurchaseWrapper ml={30} mt={30}>
            <Name>{name}</Name>
            <Price mt={5}>{price} 円</Price>
            <Amount mt={5}>{amount}</Amount>
            <Description mt={5}>{description}</Description>
            <Box mt={30}>数量</Box>
            <select
              defaultValue={1}
              onChange={(event) => {
                setItemCount(Number(event.target.value));
              }}
            >
              {[...Array(10)].map((_, i) => (
                <option key={i} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
            <Box mt={60}>
              <Link href={routing.cart.root} passHref>
                <LinkButton
                  onClick={() => {
                    addCarts(item.id, itemCount);
                  }}
                >
                  カートに入れる
                </LinkButton>
              </Link>
            </Box>
          </PurchaseWrapper>
        </Flex>
      </Box>
    </>
  );
};

// for SSG
export const getStaticPaths = () => {
  const paths = itemList.map((elem) => ({
    params: { id: elem.id },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = () => {
  return { props: {} };
};

export default ItemDetail;
