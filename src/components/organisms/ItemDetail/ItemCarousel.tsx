import { useState } from 'react';

import { Card, CardContent } from '~/components/ui/card';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '~/components/ui/carousel';

interface Props {
  imagePaths: {
    url: string;
  }[];
}

export const ItemCarousel: React.FC<Props> = ({ imagePaths }) => {
  const [api, setApi] = useState<CarouselApi>();

  return (
    <div className="flex flex-col items-center">
      <Carousel setApi={setApi} className="sm:w-[500px] w-[260px]">
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

      <div className="flex">
        {imagePaths.map((imagePath, idx) => {
          return (
            <div key={idx}>
              <a href="#!" onClick={() => api.scrollTo(idx)} key={idx}>
                <img className="rounded-lg p-1" width={80} src={imagePath.url} />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};
