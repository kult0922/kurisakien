import Link from 'next/link';
import styled from '@emotion/styled';
import React, { useState } from 'react';
import { Box, BoxProps } from '../../../lib/styled';
import { SectionTitle } from '../../atoms/SectionTitle';
import { itemList } from '../../../constants/store/itemList';
import { ItemCard } from '../../molecules/ItemCard';
import { giftList } from '../../../constants/store/giftList';
import { GiftCard } from '../../molecules/GiftCard';
import { BasicLink } from '../../atoms/BasicLink';
import { routing } from '../../../constants/routing';

interface Props extends BoxProps {
  style?: React.CSSProperties;
}

type Menu = 'normal' | 'gift';

const Wrapper = styled(Box)({
  textAlign: 'center',
});

const ItemLink = styled.a({
  color: '#1b1b1b',
  textDecoration: 'none',
  display: 'inline-block',
});

const Label = styled.label({
  cursor: 'pointer',
  display: 'inline-block',
  padding: '0.5rem 1rem',
  marginRight: '18px',
  borderRadius: '3px',
  transition: 'all .2s',
});

const Input = styled.input({
  display: 'none',
  '&:checked + Label': {
    background: '#67ce9a',
    marginRight: '18px',
  },
});

export const Items: React.FC<Props> = ({ style, ...props }) => {
  const [menu, setMenu] = useState<Menu>('normal');

  return (
    <Wrapper style={style} mt={props.mt} mb={props.mb}>
      <Box mt={10}>
        <SectionTitle>商品一覧</SectionTitle>
      </Box>
      <Box mb={10}>
        <Input
          id="item-1"
          type="radio"
          checked={menu === 'normal'}
          onChange={() => setMenu('normal')}
        />
        <Label htmlFor={'item-1'}>自宅用</Label>
        <Input
          id="item-2"
          type="radio"
          checked={menu === 'gift'}
          onChange={() => setMenu('gift')}
        />
        <Label htmlFor={'item-2'}>贈答用</Label>
      </Box>

      {menu === 'normal'
        ? itemList.map((item, i) => {
            return (
              <Link key={i} href={`/items/${encodeURIComponent(item.id)}`} passHref>
                <ItemLink>
                  <ItemCard item={item} m={8} />
                </ItemLink>
              </Link>
            );
          })
        : Array.from(giftList.keys()).map((giftId) => {
            return (
              <Link key={giftId} href={`/items/gifts/${encodeURIComponent(giftId)}`} passHref>
                <ItemLink>
                  <GiftCard item={giftList.get(giftId)[0]} m={8} />
                </ItemLink>
              </Link>
            );
          })}
      <Box>
        <BasicLink path={routing.docs.fax} text={'Faxで個注文を希望の方はこちらから'}></BasicLink>
      </Box>
    </Wrapper>
  );
};
