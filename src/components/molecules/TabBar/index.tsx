import { Tab } from '../../atoms/Tab';
import { ShoppingCart } from '../../Icons/ShoppingCart';
import Link from 'next/link';
import { routing } from '../../../constants/routing';

export const TabBar: React.FC = () => {
  return (
    <>
      <Link href={routing.root} passHref>
        <Tab>ホーム</Tab>
      </Link>
      <Link href={routing.items.root} passHref>
        <Tab>注文</Tab>
      </Link>
      <Link href={routing.cart.root} passHref>
        <Tab bottom="-7px">
          <ShoppingCart width={18} height={18} />
        </Tab>
      </Link>
    </>
  );
};
