import styled from '@emotion/styled';
import { Box } from '../../lib/styled';
import { newsList } from '../../constants/news';
import { useRouter } from 'next/router';
import { Header } from '../../components/organisms/Header';

const Title = styled(Box)({
  fontSize: '24px',
});

const Content = styled(Box)({
  whiteSpace: 'pre-wrap',
  textAlign: 'center',
});

const Wrapper = styled.div({
  textAlign: 'center',
});

const News = () => {
  const router = useRouter();
  const { id } = router.query;
  const news = newsList.find((news) => news.id === id);
  if (!news) return null;
  const { title, content } = news;
  return (
    <>
      <Header />
      <Wrapper>
        <Box mt={50}>
          <Title>{title}</Title>
          <Content mr={'auto'} ml={'auto'} style={{ width: '70%' }}>
            {content}
          </Content>
        </Box>
      </Wrapper>
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

export default News;
