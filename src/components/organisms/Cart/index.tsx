import Link from 'next/link';
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
          <div className="mt-20 flex justify-end">
            <div className="mx-3">
              <Link href={routing.items.root} passHref>
                <Button variant="outline" disabled={carts.length === 0}>
                  買い物を続ける
                </Button>
              </Link>
            </div>
            <div className="mx-3">
              <Link href={routing.checkout.root} passHref>
                <Button disabled={carts.length === 0}>注文に進む</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
