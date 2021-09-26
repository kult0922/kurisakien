import { RouteComponentProps } from 'react-router-dom';
import { itemList } from '../../../constants/store';
import styled from '@emotion/styled';
import { GlobalStore } from '../../../store/Global';
import { useState } from 'react';
import { LinkButton } from '../../atoms/LinkButton';
import { routing } from '../../../constants/routing';
import { Box, Flex } from '../../../lib/styled';

type Props = RouteComponentProps<{ id: string }>;

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

export const ItemDetail: React.FC<Props> = ({ match }) => {
  const { cart: cartStore } = GlobalStore.useContainer();
  const { addCarts } = cartStore;
  const [itemCount, setItemCount] = useState(1);
  const id = match.params.id;
  const item = itemList.find((item) => item.id === id);
  if (!item) return null;
  const { imagePath, name, price, description } = item;
  return (
    <>
      <Box mt={50}>
        <Flex justifyContent={'center'} alignItems={'top'} flexWrap={'wrap'}>
          <Box style={{ width: '50%' }}>
            <img src={imagePath} width="100%"></img>
          </Box>
          <PurchaseWrapper ml={30} mt={30}>
            <Name>{name}</Name>
            <Price mt={5}>{price} 円</Price>
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
              <LinkButton
                to={routing.cart.root}
                onClick={() => {
                  addCarts(item.id, itemCount);
                }}
              >
                カートに入れる
              </LinkButton>
            </Box>
          </PurchaseWrapper>
        </Flex>
      </Box>
    </>
  );
};
