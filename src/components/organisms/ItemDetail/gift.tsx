import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { GlobalStore } from '~/store/Global';
import { giftList } from '~/constants/store/giftList';
import { routing } from '~/constants/routing';
import { Button } from '~/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';
import { Label } from '~/components/ui/label';
import { RadioGroup, RadioGroupItem } from '~/components/ui/radio-group';
import { ItemCarousel } from './ItemCarousel';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';

export const GiftDetail: React.FC = () => {
  const { cart: cartStore } = GlobalStore.useContainer();
  const { addCarts } = cartStore;
  const [itemCount, setItemCount] = useState(1);
  const [idx, setIdx] = useState(0);
  const router = useRouter();
  const id = router.query.id as string;
  const itemPack = giftList.get(id);
  if (!itemPack) return null;
  const { name, imagePaths, price, amount, description } = itemPack[idx];

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex justify-center">
          <ItemCarousel imagePaths={imagePaths} />
        </div>
        <Card className="sm:w-[600px] w-[350px] mt-4">
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
            <div className="my-3">茶葉を選択して下さい</div>
            <RadioGroup
              defaultValue="0"
              onValueChange={(v) => {
                setIdx(Number(v));
              }}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="0" id="r1" />
                <Label htmlFor="r1">高級煎茶 {itemPack[0].price}円</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="1" id="r2" />
                <Label htmlFor="r2">特上煎茶 {itemPack[1].price}円</Label>
              </div>
            </RadioGroup>
            <div className="mt-5 flex justify-end">
              <Link href={routing.cart.root} passHref>
                <Button
                  onClick={() => {
                    addCarts(itemPack[idx], itemCount);
                  }}
                >
                  カートに入れる
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};
