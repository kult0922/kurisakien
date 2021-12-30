import { Cart } from '~/components/organisms/Cart';
import { Header } from '~/components/organisms/Header';

const Component: React.FC = () => {
  return (
    <>
      <Header />
      <Cart mb={50} />
    </>
  );
};

export default Component;
