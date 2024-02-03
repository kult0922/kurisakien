import Link from 'next/link';
import styled from '@emotion/styled';
import React, { useState } from 'react';
import { Box, BoxProps } from '~/lib/styled';
import { SectionTitle } from '~/components/atoms/SectionTitle';
import { ItemCard } from '~/components/molecules/ItemCard';
import { giftList } from '~/constants/store/giftList';
import { GiftCard } from '~/components/molecules/GiftCard';
import { BasicLink } from '~/components/atoms/BasicLink';
import { routing } from '~/constants/routing';
import { getProducts } from '~/domain/repository/Products/getProducts';
import useSWR from 'swr';
import { Item } from '~/@types/product';
import { Tabs, TabsList, TabsTrigger } from '~/components/ui/tabs';

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

  const { data } = useSWR<Item[]>('products', getProducts);

  if (!data) return <></>;

  return (
    <Wrapper style={style} mt={props.mt} mb={props.mb}>
      <Box mt={10}>
        <SectionTitle text="商品一覧" />
      </Box>
      <Tabs defaultValue={'normal'}>
        <TabsList>
          <TabsTrigger onClick={() => setMenu('normal')} value={'normal'}>
            自宅用
          </TabsTrigger>
          <TabsTrigger onClick={() => setMenu('gift')} value={'gift'}>
            贈答用
          </TabsTrigger>
        </TabsList>
      </Tabs>
      {menu === 'normal'
        ? data.map((item, i) => {
            return (
              <Link key={i} href={`/items/${encodeURIComponent(item.id)}`} passHref>
                <ItemLink>
                  <ItemCard item={item} />
                </ItemLink>
              </Link>
            );
          })
        : Array.from(giftList.keys()).map((giftId) => {
            return (
              <Link key={giftId} href={`/items/gifts/${encodeURIComponent(giftId)}`} passHref>
                <ItemLink>
                  <GiftCard item={giftList.get(giftId)[0]} />
                </ItemLink>
              </Link>
            );
          })}
      <Box mb={20}>
        <BasicLink path={routing.docs.fax} text={'Faxでの注文を希望の方はこちらから'}></BasicLink>
      </Box>
      ※ パッケージ、包装は予告なく変わる場合がございますのでご了承ください。
    </Wrapper>
  );
};
