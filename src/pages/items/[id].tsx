import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Item } from '~/@types/product';
import { Header } from '~/components/organisms/Header';
import { ItemDetail } from '~/components/organisms/ItemDetail';
// import { itemList } from '~/constants/store/itemList';
import { getProducts, getProduct } from '~/domain/repository/Products/getProducts';

const Component: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [item, setItem] = useState<Item>();

  useEffect(() => {
    const f = async () => {
      const item = await getProduct(id as string);
      setItem(item);
      console.log('setItem', item);
    };

    f();
  }, [id]);

  // const item = itemList.find((item) => item.id === id);

  return (
    <>
      <Header />
      <ItemDetail item={item} mt={50} mb={50} />
    </>
  );
};

export default Component;

// for SSG
export const getStaticPaths = async () => {
  const il = await getProducts();
  console.log(il);
  const paths = il.map((elem) => ({
    params: { id: elem.id },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = () => {
  return { props: {} };
};
