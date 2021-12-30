import { newsList } from '../../constants/news';
import { useRouter } from 'next/router';
import { Header } from '../../components/organisms/Header';
import { NewsContent } from '../../components/organisms/News';

const Component = () => {
  const router = useRouter();
  const { id } = router.query;
  const news = newsList.find((news) => news.id === id);

  return (
    <>
      <Header />
      <NewsContent news={news} />
    </>
  );
};

// for SSG
export const getStaticPaths = () => {
  const paths = newsList.map((elem) => ({
    params: { id: elem.id },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = () => {
  return { props: {} };
};

export default Component;
