import styled from '@emotion/styled';
import { useState } from 'react';
import Link from 'next/link';
import { GlobalStore } from '~/store/Global';
import { Box, BoxProps, Flex } from '~/lib/styled';
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

interface Props extends BoxProps {
  item?: Item;
  style?: React.CSSProperties;
}

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

export const ItemDetail: React.FC<Props> = ({ item, style, ...props }) => {
  const { cart: cartStore } = GlobalStore.useContainer();
  const { addCarts } = cartStore;
  const [itemCount, setItemCount] = useState(1);
  const [api, setApi] = useState<CarouselApi>();

  if (!item) return null;
  const { imagePaths, name, price, amount, description } = item;

  return (
    <Box mt={props.mt} mb={props.mb} style={style}>
      <Flex justifyContent={'center'} alignItems={'top'} flexWrap={'wrap'}>
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

          <Flex justifyContent={'center'} alignItems={'top'} flexWrap={'wrap'}>
            {imagePaths.map((imagePath, idx) => {
              return (
                <Box key={idx} mt={8} mr={6} ml={6}>
                  <a href="#!" onClick={() => api.scrollTo(idx)} key={idx}>
                    <img className="rounded-sm" width={80} src={imagePath.url} />
                  </a>
                </Box>
              );
            })}
          </Flex>
        </div>

        <PurchaseWrapper ml={30} mt={30}>
          <Name>{name}</Name>
          <Price mt={5}>{price} 円</Price>
          <Amount mt={5}>{amount}</Amount>
          <Description mt={5}>{description}</Description>
          <Box mt={30}>個数</Box>

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

          <Box mt={60}>
            <Link href={routing.cart.root} passHref>
              <Button
                onClick={() => {
                  addCarts(item, itemCount);
                }}
              >
                カートに入れる
              </Button>
            </Link>
          </Box>
        </PurchaseWrapper>
      </Flex>
    </Box>
  );
};
