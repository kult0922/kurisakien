import styled from '@emotion/styled';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Box, BoxProps, Flex } from '~/lib/styled';
import { GlobalStore } from '~/store/Global';
import { giftList } from '~/constants/store/giftList';
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
import { Label } from '~/components/ui/label';
import { RadioGroup, RadioGroupItem } from '~/components/ui/radio-group';

interface Props extends BoxProps {
  style?: React.CSSProperties;
}

const Wrapper = styled(Box)({});

const PurchaseWrapper = styled(Box)({
  textAlign: 'left',
});

const Description = styled(Box)({
  whiteSpace: 'pre-wrap',
});

const Name = styled(Box)({
  fontSize: '24px',
});

const Price = styled(Box)({
  fontSize: '20px',
});

const Amount = styled(Box)({
  color: '#909090',
});

export const GiftDetail: React.FC<Props> = ({ style, ...props }) => {
  const { cart: cartStore } = GlobalStore.useContainer();
  const { addCarts } = cartStore;
  const [itemCount, setItemCount] = useState(1);
  const [idx, setIdx] = useState(0);
  const router = useRouter();
  const id = router.query.id as string;
  const itemPack = giftList.get(id);
  const [api, setApi] = useState<CarouselApi>();
  if (!itemPack) return null;

  return (
    <Wrapper style={style} mt={props.mt} mb={props.mb}>
      <Flex justifyContent={'center'} alignItems={'top'} flexWrap={'wrap'}>
        <div className="mr-12">
          <Carousel setApi={setApi} className="w-full max-w-xs">
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

        <PurchaseWrapper ml={30} mt={30}>
          <Name>{itemPack[idx].name}</Name>
          <Price mt={5}>{itemPack[idx].price} 円</Price>
          <Amount mt={5}>{itemPack[idx].amount}</Amount>
          <Description mt={5}>{itemPack[idx].description}</Description>
          <Box mt={30}>数量</Box>

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
                <SelectItem value={String(i + 1)}>{i + 1}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Box mt={30} mb={10}>
            茶葉を選択して下さい
          </Box>
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

          <Box mt={60}>
            <Link href={routing.cart.root} passHref>
              <Button
                onClick={() => {
                  addCarts(itemPack[idx], itemCount);
                }}
              >
                カートに入れる
              </Button>
            </Link>
          </Box>
        </PurchaseWrapper>
      </Flex>
    </Wrapper>
  );
};
