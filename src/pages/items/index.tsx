import { Header } from '~/components/organisms/Header';
import { Items } from '~/components/organisms/Items';

const Component: React.FC = () => {
  return (
    <>
      <Header />
      <Items mb={50} />
    </>
  );
};

export default Component;
