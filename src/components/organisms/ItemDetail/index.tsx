import { useState } from 'react';
import Link from 'next/link';
import { GlobalStore } from '~/store/Global';
import { Item } from '~/@types/product';
import { routing } from '~/constants/routing';
import { Button } from '~/components/ui/button';

import { Card, CardContent } from '~/components/ui/card';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '~/components/ui/carousel';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';

interface Props {
  item?: Item;
}

export const ItemDetail: React.FC<Props> = ({ item }) => {
  const { cart: cartStore } = GlobalStore.useContainer();
  const { addCarts } = cartStore;
  const [itemCount, setItemCount] = useState(1);
  const [api, setApi] = useState<CarouselApi>();

  if (!item) return null;
  const { imagePaths, name, price, amount, description } = item;

  return (
    <div>
      <div>
        <div className="mr-12">
          <Carousel setApi={setApi} className="w-full max-w-xs">
            <CarouselContent>
              {imagePaths.map((imagePath, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-0">
                        <img className="w-full rounded-lg" src={imagePath.url} />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          <div>
            {imagePaths.map((imagePath, idx) => {
              return (
                <div key={idx}>
                  <a href="#!" onClick={() => api.scrollTo(idx)} key={idx}>
                    <img className="rounded-sm" width={80} src={imagePath.url} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <div>{name}</div>
          <div>{price} 円</div>
          <div>{amount}</div>
          <div>{description}</div>
          <div>個数</div>

          <Select
            defaultValue="1"
            onValueChange={(value) => {
              setItemCount(Number(value));
            }}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="個数" />
            </SelectTrigger>
            <SelectContent>
              {[...Array(10)].map((_, i) => (
                <SelectItem key={i + 'num'} value={String(i + 1)}>
                  {i + 1}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <div>
            <Link href={routing.cart.root} passHref>
              <Button
                onClick={() => {
                  addCarts(item, itemCount);
                }}
              >
                カートに入れる
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
