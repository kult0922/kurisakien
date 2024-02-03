import Link from 'next/link';
import { ShoppingCart } from '~/components/Icons/ShoppingCart';
import { routing } from '~/constants/routing';
import { useRouter } from 'next/router';
import { Tabs, TabsList, TabsTrigger } from '~/components/ui/tabs';

export const TabBar: React.FC = () => {
  const { pathname } = useRouter();

  return (
    <>
      <Tabs defaultValue={pathname} className="w-[200px]">
        <TabsList>
          <Link href={routing.root} passHref>
            <TabsTrigger value={routing.root}>ホーム</TabsTrigger>
          </Link>
          <Link href={routing.items.root} passHref>
            <TabsTrigger value={routing.items.root}>注文</TabsTrigger>
          </Link>
          <Link href={routing.cart.root} passHref>
            <TabsTrigger value={routing.cart.root}>
              <ShoppingCart width={18} height={18} />
            </TabsTrigger>
          </Link>
        </TabsList>
      </Tabs>
    </>
  );
};
