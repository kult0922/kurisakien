import styled from '@emotion/styled';
import { News } from '~/@types/news';
import { Box } from '~/lib/styled';

interface Props {
  news?: News;
  style?: React.CSSProperties;
}

const Wrapper = styled.div({
  textAlign: 'center',
});

const Title = styled(Box)({
  fontSize: '24px',
});

const Content = styled(Box)({
  whiteSpace: 'pre-wrap',
  textAlign: 'center',
});

export const NewsContent: React.FC<Props> = ({ news, style }) => {
  if (!news) return null;
  const { title, content } = news;

  return (
    <Wrapper style={style}>
      <Box mt={50}>
        <Title>{title}</Title>
        <Content mr={'auto'} ml={'auto'} style={{ width: '70%' }}>
          {content}
        </Content>
      </Box>
    </Wrapper>
  );
};
