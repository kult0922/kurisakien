import Link from 'next/link';
import React, { useState } from 'react';
import { SectionTitle } from '~/components/atoms/SectionTitle';
import { ItemCard } from '~/components/molecules/ItemCard';
import { giftList } from '~/constants/store/giftList';
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
      <div className="grid place-content-center my-4">
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
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] place-content-center place-items-center">
        {menu === 'normal'
          ? data.map((item) => {
              return (
                <Link key={item.id} href={`/items/${encodeURIComponent(item.id)}`}>
                  <div>
                    <ItemCard
                      name={item.name}
                      price={item.price}
                      amount={item.amount}
                      imagePath={item.imagePaths[0].url}
                    />
                  </div>
                </Link>
              );
            })
          : Array.from(giftList.keys()).map((giftId) => {
              return (
                <Link key={giftId} href={`/items/gifts/${encodeURIComponent(giftId)}`} passHref>
                  <div>
                    <ItemCard
                      name={giftList.get(giftId)[0].name}
                      price={giftList.get(giftId)[0].price}
                      amount={giftList.get(giftId)[0].amount}
                      imagePath={giftList.get(giftId)[0].imagePaths[0].url}
                    />
                  </div>
                </Link>
              );
            })}
      </div>
      <div>
        <BasicLink path={routing.docs.fax}>Faxでの注文を希望の方はこちらから</BasicLink>
      </div>
      ※ パッケージ、包装は予告なく変わる場合がございますのでご了承ください。
    </div>
  );
};
