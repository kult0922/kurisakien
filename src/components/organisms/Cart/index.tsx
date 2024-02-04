import Link from 'next/link';
import { BasicLink } from '~/components/atoms/BasicLink';
import { SectionTitle } from '~/components/atoms/SectionTitle';
import { CartTable } from '~/components/molecules/CartTable';
import { Button } from '~/components/ui/button';
import { routing } from '~/constants/routing';
import { GlobalStore } from '~/store/Global';

export const Cart: React.FC = () => {
  const { carts } = GlobalStore.useContainer().cart;
  return (
    <>
      <div>
        <SectionTitle text="カートの中身" />
      </div>
      <div className="mt-10">
        <div>
          <CartTable editable showTotal />
          <div className="mt-20">
            <Link href={routing.checkout.root} passHref>
              <Button disabled={carts.length === 0}>注文に進む</Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <BasicLink path={routing.items.root}>買い物を続ける</BasicLink>
      </div>
    </>
  );
};
