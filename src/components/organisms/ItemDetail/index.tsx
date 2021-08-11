import { RouteComponentProps } from 'react-router-dom';
import { itemList } from '../../../constants/store';
import { TabBar } from '../../molecules/TabBar';
import styled from '@emotion/styled';
import { GlobalStore } from '../../../store/Global';
import { CSSProperties, useState } from 'react';
import { LinkButton } from '../../atoms/LinkButton';
import { routing } from '../../../constants/routing';
import { Item } from '../../../@types/product';
import { Box, BoxProps } from '../../../lib/styled';

type Props = RouteComponentProps<{ id: string }>;

interface MenuProps {
  item: Item;
}

interface ImageProps {
  src: string;
  margin?: CSSProperties['margin'];
}

const Image = styled.img<ImageProps>(({ src, margin }) => ({
  margin,
  width: '600px',
  content: `url(${src})`,
  display: 'inline-block',
}));

const ItemMenuWrapper = styled.div({
  display: 'inline-block',
  verticalAlign: 'top',
  textAlign: 'left',
  marginLeft: '20px',
});

const Description = styled.p<BoxProps>({
  paddingBottom: '5px',
  whiteSpace: 'pre-wrap',
});

const Name = styled.div({
  fontSize: '1.5em',
});

const Price = styled.div<BoxProps>({
  display: 'inline-block',
  color: '#909090',
  paddingBottom: '5px',
});

const ItemMenu: React.FC<MenuProps> = ({ item }) => {
  const { cart: cartStore } = GlobalStore.useContainer();
  const { addCarts } = cartStore;
  const [itemCount, setItemCount] = useState(1);
  return (
    <ItemMenuWrapper>
      <Name>{item.name}</Name>
      <Price m={5}>{item.price} 円</Price>
      <Description m={5}>{item.description}</Description>
      <div>数量</div>
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
      <Box m={'50px 0px 0px'}>
        <LinkButton
          to={routing.cart.root}
          onClick={() => {
            addCarts(item.id, itemCount);
          }}
        >
          カートに入れる
        </LinkButton>
      </Box>
    </ItemMenuWrapper>
  );
};

export const ItemDetail: React.FC<Props> = ({ match }) => {
  const id = match.params.id;
  const item = itemList.find((item) => item.id === id);
  if (!item) return null;
  return (
    <>
      <TabBar />
      <Box m={'50px 0px 0px'}>
        <Image src={item.imagePath} />
        <ItemMenu item={item} />
      </Box>
    </>
  );
};
