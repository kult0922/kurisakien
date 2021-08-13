import { RouteComponentProps } from 'react-router-dom';
import { TabBar } from '../../molecules/TabBar';
import styled from '@emotion/styled';
import { Box } from '../../../lib/styled';
import { newsList } from '../../../constants/news';

type Props = RouteComponentProps<{ id: string }>;

const Title = styled(Box)({
  fontSize: '24px',
});

const Content = styled(Box)({
  whiteSpace: 'pre-wrap',
});

export const NewsDetail: React.FC<Props> = ({ match }) => {
  const id = match.params.id;
  const news = newsList.find((news) => news.id === id);
  if (!news) return null;
  const { title, content } = news;
  return (
    <>
      <TabBar />
      <Box mt={50}>
        <Title>{title}</Title>
        <Content mt={5}>{content}</Content>
      </Box>
    </>
  );
};
