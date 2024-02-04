import Link from 'next/link';
import React, { useState } from 'react';
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

type Menu = 'normal' | 'gift';

export const Items: React.FC = () => {
  const [menu, setMenu] = useState<Menu>('normal');

  const { data } = useSWR<Item[]>('products', getProducts);

  if (!data) return <></>;

  return (
    <div>
      <div>
        <SectionTitle text="商品一覧" />
      </div>
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
                <ItemCard item={item} />
              </Link>
            );
          })
        : Array.from(giftList.keys()).map((giftId) => {
            return (
              <Link key={giftId} href={`/items/gifts/${encodeURIComponent(giftId)}`} passHref>
                <GiftCard item={giftList.get(giftId)[0]} />
              </Link>
            );
          })}
      <div>
        <BasicLink path={routing.docs.fax}>Faxでの注文を希望の方はこちらから</BasicLink>
      </div>
      ※ パッケージ、包装は予告なく変わる場合がございますのでご了承ください。
    </div>
  );
};
