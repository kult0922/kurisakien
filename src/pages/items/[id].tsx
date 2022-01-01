import { useRouter } from 'next/router';
import { Header } from '~/components/organisms/Header';
import { ItemDetail } from '~/components/organisms/ItemDetail';
import { itemList } from '~/constants/store/itemList';

const Component: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const item = itemList.find((item) => item.id === id);

  return (
    <>
      <Header />
      <ItemDetail item={item} mt={50} mb={50} />
    </>
  );
};

export default Component;

// for SSG
export const getStaticPaths = () => {
  const paths = itemList.map((elem) => ({
    params: { id: elem.id },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = () => {
  return { props: {} };
};
