import styled from '@emotion/styled';
import { useState } from 'react';
import Link from 'next/link';
import { Box, BoxProps, Flex } from '../../../lib/styled';
import { bp } from '../../../constants/css';
import { GlobalStore } from '../../../store/Global';
import { LinkButton } from '../../atoms/LinkButton';
import { routing } from '../../../constants/routing';
import { Item } from '../../../@types/product';

interface Props extends BoxProps {
  item?: Item;
  style?: React.CSSProperties;
}

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

const FocusImage = styled.img({
  width: '600px',
  [bp.md]: {
    width: '100%',
  },
});

const ThumbnailImage = styled.img<{ border: string }>(({ border = 'none' }) => ({
  width: '100px',
  color: '#8ab252',
  boxSizing: 'border-box',
  border: border,
  borderWidth: '4px',
  [bp.md]: {
    width: '80px',
  },
}));

export const ItemDetail: React.FC<Props> = ({ item, style, ...props }) => {
  const { cart: cartStore } = GlobalStore.useContainer();
  const { addCarts } = cartStore;
  const [itemCount, setItemCount] = useState(1);
  const [focusIdx, setFocusIdx] = useState(0);

  if (!item) return null;
  const { imagePaths, name, price, amount, description } = item;

  return (
    <Box mt={props.mt} mb={props.mb} style={style}>
      <Flex justifyContent={'center'} alignItems={'top'} flexWrap={'wrap'}>
        <div>
          <div>
            <FocusImage src={imagePaths[focusIdx]} />
          </div>

          <Flex justifyContent={'center'} alignItems={'top'} flexWrap={'wrap'}>
            {imagePaths.map((imagePath, idx) => {
              return (
                <Box key={idx} mt={8} mr={6} ml={6}>
                  <a href="#!" onClick={() => setFocusIdx(idx)} key={idx}>
                    {focusIdx === idx ? (
                      <ThumbnailImage border={'solid'} src={imagePath} />
                    ) : (
                      <ThumbnailImage border={'none'} src={imagePath} />
                    )}
                  </a>
                </Box>
              );
            })}
          </Flex>
        </div>

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
                  addCarts(item, itemCount);
                }}
              >
                カートに入れる
              </LinkButton>
            </Link>
          </Box>
        </PurchaseWrapper>
      </Flex>
    </Box>
  );
};
