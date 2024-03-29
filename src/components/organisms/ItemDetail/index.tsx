import { useState } from 'react';
import Link from 'next/link';
import { GlobalStore } from '~/store/Global';
import { Item } from '~/@types/product';
import { routing } from '~/constants/routing';
import { Button } from '~/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';
import { ItemCarousel } from './ItemCarousel';

interface Props {
  item?: Item;
}

export const ItemDetail: React.FC<Props> = ({ item }) => {
  const { cart: cartStore } = GlobalStore.useContainer();
  const { addCarts } = cartStore;
  const [itemCount, setItemCount] = useState(1);

  if (!item) return null;
  const { imagePaths, name, price, amount, description } = item;

  return (
    <div>
      <div className="flex justify-center">
        <ItemCarousel imagePaths={imagePaths} />
      </div>

      <div className="flex justify-center mt-3">
        <Card className="sm:w-[600px] w-[350px]">
          <CardHeader>
            <CardTitle>{name}</CardTitle>
            <CardDescription>
              <div>{price} 円</div>
              <div>{amount}</div>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-3">{description}</div>
            個数
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
            <div className="mt-5 flex justify-end">
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
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
