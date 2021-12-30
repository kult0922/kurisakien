import Link from 'next/link';
import { Tab } from '~/components/atoms/Tab';
import { ShoppingCart } from '~/components/Icons/ShoppingCart';
import { routing } from '~/constants/routing';
import { useRouter } from 'next/router';

export const TabBar: React.FC = () => {
  const router = useRouter();
  const page = '/' + router.pathname.split('/')[1];

  return (
    <>
      <Link href={routing.root} passHref>
        <Tab isSelect={page === routing.root}>ホーム</Tab>
      </Link>
      <Link href={routing.items.root} passHref>
        <Tab isSelect={page === routing.items.root}>注文</Tab>
      </Link>
      <Link href={routing.cart.root} passHref>
        <Tab bottom="-4px" isSelect={page == routing.cart.root}>
          <ShoppingCart width={18} height={18} />
        </Tab>
      </Link>
    </>
  );
};
