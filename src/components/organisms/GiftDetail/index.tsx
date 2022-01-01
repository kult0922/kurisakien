import styled from '@emotion/styled';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Box, BoxProps, Flex } from '~/lib/styled';
import { bp } from '~/constants/css';
import { GlobalStore } from '~/store/Global';
import { giftList } from '~/constants/store/giftList';
import { routing } from '~/constants/routing';
import { LinkButton } from '~/components/atoms/LinkButton';

interface Props extends BoxProps {
  style?: React.CSSProperties;
}

const Wrapper = styled(Box)({});

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
  fontSize: '20px',
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

export const GiftDetail: React.FC<Props> = ({ style, ...props }) => {
  const { cart: cartStore } = GlobalStore.useContainer();
  const { addCarts } = cartStore;
  const [itemCount, setItemCount] = useState(1);
  const [idx, setIdx] = useState(0);
  const router = useRouter();
  const id = router.query.id as string;
  const itemPack = giftList.get(id);
  if (!itemPack) return null;

  return (
    <Wrapper style={style} mt={props.mt} mb={props.mb}>
      <Flex justifyContent={'center'} alignItems={'top'} flexWrap={'wrap'}>
        <ItemImage src={itemPack[idx].imagePaths[0]} />
        <PurchaseWrapper ml={30} mt={30}>
          <Name>{itemPack[idx].name}</Name>
          <Price mt={5}>{itemPack[idx].price} 円</Price>
          <Amount mt={5}>{itemPack[idx].amount}</Amount>
          <Description mt={5}>{itemPack[idx].description}</Description>
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

          <Box mt={30} mb={10}>
            茶葉を選択して下さい
          </Box>
          <div>
            <input type="radio" value="cat" onChange={() => setIdx(0)} checked={idx === 0} />
            高級煎茶 {itemPack[0].price}円
          </div>
          <div>
            <input
              type="radio"
              value="dog"
              onChange={() => {
                setIdx(1);
              }}
              checked={idx === 1}
            />
            特上煎茶 {itemPack[1].price}円
          </div>

          <Box mt={60}>
            <Link href={routing.cart.root} passHref>
              <LinkButton
                onClick={() => {
                  addCarts(itemPack[idx], itemCount);
                }}
              >
                カートに入れる
              </LinkButton>
            </Link>
          </Box>
        </PurchaseWrapper>
      </Flex>
    </Wrapper>
  );
};
