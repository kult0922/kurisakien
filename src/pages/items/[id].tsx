import { GetStaticPropsResult } from 'next';
import { Item } from '~/@types/product';
import { Header } from '~/components/organisms/Header';
import { ItemDetail } from '~/components/organisms/ItemDetail';
import { getProducts, getProduct } from '~/domain/repository/Products/getProducts';

type Props = {
  item: Item;
};

const Component: React.FC<Props> = ({ item }) => {
  return (
    <>
      <Header />
      <ItemDetail item={item} />
    </>
  );
};

export default Component;

// for SSG
export const getStaticPaths = async () => {
  const itemList = await getProducts();
  if (!itemList) return { paths: [], fallback: false };
  const paths = itemList.map((elem) => ({
    params: { id: elem.id },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }): Promise<GetStaticPropsResult<Props>> => {
  const id = params.id;
  const item = await getProduct(id);
  return { props: { item } };
};
