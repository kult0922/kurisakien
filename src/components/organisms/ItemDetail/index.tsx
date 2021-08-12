import { RouteComponentProps } from 'react-router-dom';
import { itemList } from '../../../constants/store';
import { TabBar } from '../../molecules/TabBar';
import styled from '@emotion/styled';
import { GlobalStore } from '../../../store/Global';
import { useState } from 'react';
import { LinkButton } from '../../atoms/LinkButton';
import { routing } from '../../../constants/routing';
import { Box, Flex } from '../../../lib/styled';

type Props = RouteComponentProps<{ id: string }>;

const Wrapper = styled(Flex)({
  verticalAlign: 'top',
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
  return (
    <>
      <TabBar />
      <Box mt={50}>
        <Flex display={'inline-block'}>
          <img src={item.imagePath}></img>
        </Flex>
        <Wrapper display={'inline-block'} ml={20}>
          <Name>{item.name}</Name>
          <Price mt={5}>{item.price} 円</Price>
          <Description mt={5}>{item.description}</Description>
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
        </Wrapper>
      </Box>
    </>
  );
};
