import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { newsList } from '../../../constants/news';
import { Box, Flex } from '../../../lib/styled';
import { TabBar } from '../../molecules/TabBar';

const NewsLink = styled(Link)({
  color: '#1b1b1b',
});

const NewsDate = styled(Box)({
  color: '#909090',
});

const Section = styled(Box)({
  fontSize: '28px',
  textAlign: 'center',
});

const Wrapper = styled.div({
  width: '80%',
  margin: 'auto',
});

export const Home: React.FC = () => {
  return (
    <>
      <Wrapper>
        <TabBar />
        <h1>小さな茶農家ですが、自然の力をかりて、美味しい茶作りに励んでいます．</h1>
        <img
          src="http://placehold.jp/24/cc9999/993333/1200x400.png?text=メイン画像"
          alt="栗崎園"
          width="100%"
        />
        <Box mt={10}>
          <Flex justifyContent={'center'} flexWrap={'wrap'}>
            <Section mr={80}>News</Section>
            <Box>
              {newsList.map((news, i) => {
                return (
                  <Flex flexWrap={'wrap'} key={i}>
                    <NewsDate mr={40}>{news.date}</NewsDate>
                    <Box>
                      <NewsLink to={'/news/' + news.id}>{news.title}</NewsLink>
                    </Box>
                  </Flex>
                );
              })}
            </Box>
          </Flex>
        </Box>
      </Wrapper>
    </>
  );
};
