import { useState } from 'react';
import styled from '@emotion/styled';
import { GlobalStore } from '../../../store/Global';
import { routing } from '../../../constants/routing';
import { ItemDetailPrice } from '../../atoms/ItemDetailPrice';
import { ItemDetailDescription } from '../../atoms/ItemDetailDescription';
import { Item } from '../../../@types/product';
import { ItemDetailName } from '../../atoms/ItemDetailName';
import { LinkButton } from '../../atoms/LinkButton';

interface Props {
  item: Item;
}

const Wrapper = styled.div({
  display: 'inline-block',
  verticalAlign: 'top',
  textAlign: 'left',
  marginLeft: '20px',
});

export const ItemMenu: React.FC<Props> = ({ item }) => {
  const { cart: cartStore } = GlobalStore.useContainer();
  const { addCarts } = cartStore;
  const [itemCount, setItemCount] = useState(1);
  return (
    <Wrapper>
      <ItemDetailName>{item.name}</ItemDetailName>
      <ItemDetailPrice>{item.price} 円</ItemDetailPrice>
      <ItemDetailDescription>{item.description}</ItemDetailDescription>
      <br />
      数量
      <br />
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
      <br />
      <br />
      <br />
      <LinkButton
        to={routing.cart.root}
        onClick={() => {
          addCarts(item.id, itemCount);
        }}
      >
        カートに入れる
      </LinkButton>
    </Wrapper>
  );
};
