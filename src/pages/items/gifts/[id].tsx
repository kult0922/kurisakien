import { GiftDetail } from '~/components/organisms/GiftDetail';
import { Header } from '~/components/organisms/Header';
import { giftList } from '~/constants/store/giftList';

const Component: React.FC = () => {
  return (
    <>
      <Header />
      <GiftDetail />
    </>
  );
};

export default Component;

// for SSG
export const getStaticPaths = () => {
  const paths = Array.from(giftList.keys()).map((elem) => ({
    params: { id: elem },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = () => {
  return { props: {} };
};
