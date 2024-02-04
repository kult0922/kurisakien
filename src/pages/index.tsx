import { Footer } from '~/components/organisms/Footer';
import { Header } from '~/components/organisms/Header';
import { Home } from '~/components/organisms/Home';

const Component: React.FC = () => {
  return (
    <>
      <div className="mb-10">
        <Header />
      </div>
      <Home />
      <div className="mt-10">
        <Footer />
      </div>
    </>
  );
};

export default Component;
