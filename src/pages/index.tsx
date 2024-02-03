import { Footer } from '~/components/organisms/Footer';
import { Header } from '~/components/organisms/Header';
import { Home } from '~/components/organisms/Home';

const Component: React.FC = () => {
  return (
    <>
      <Header />
      <Home />
      <div className="mt-10">
        <Footer />
      </div>
    </>
  );
};

export default Component;
