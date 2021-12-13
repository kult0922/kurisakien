import { itemList } from '../../constants/store/itemList';
import { ItemCard } from '../../components/molecules/ItemCard';
import { SectionTitle } from '../../components/atoms/SectionTitle';
import { Box } from '../../lib/styled';
import Link from 'next/link';
import styled from '@emotion/styled';
import React, { useState } from 'react';
import { Header } from '../../components/organisms/Header';
import { routing } from '../../constants/routing';
import { GiftCard } from '../../components/molecules/giftCard';
import { giftList } from '../../constants/store/giftList';

const ItemLink = styled.a({
  color: '#1b1b1b',
  textDecoration: 'none',
  display: 'inline-block',
});

const Wrapper = styled.div({
  textAlign: 'center',
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

const Items: React.FC = () => {
  const [menu, setMenu] = useState('normal');
  return (
    <>
      <Header />
      <Wrapper>
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
          <Link href={routing.docs.fax}>Faxで個注文を希望の方はこちらから</Link>
        </Box>
      </Wrapper>
    </>
  );
};

export default Items;
