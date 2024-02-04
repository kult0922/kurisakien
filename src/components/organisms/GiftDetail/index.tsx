import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { GlobalStore } from '~/store/Global';
import { giftList } from '~/constants/store/giftList';
import { routing } from '~/constants/routing';
import { Button } from '~/components/ui/button';
import { Card, CardContent } from '~/components/ui/card';
import {
  Carousel,
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
import { Label } from '~/components/ui/label';
import { RadioGroup, RadioGroupItem } from '~/components/ui/radio-group';

export const GiftDetail: React.FC = () => {
  const { cart: cartStore } = GlobalStore.useContainer();
  const { addCarts } = cartStore;
  const [itemCount, setItemCount] = useState(1);
  const [idx, setIdx] = useState(0);
  const router = useRouter();
  const id = router.query.id as string;
  const itemPack = giftList.get(id);
  if (!itemPack) return null;

  return (
    <>
      <div>
        <div className="mr-12">
          <Carousel className="w-full max-w-xs">
            <CarouselContent>
              {itemPack[idx].imagePaths.map((imagePath, index) => (
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
        </div>

        <div>
          <div>{itemPack[idx].name}</div>
          <div>{itemPack[idx].price} 円</div>
          <div>{itemPack[idx].amount}</div>
          <div>{itemPack[idx].description}</div>
          <div>数量</div>

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

          <div>茶葉を選択して下さい</div>
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

          <div>
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
        </div>
      </div>
    </>
  );
};
