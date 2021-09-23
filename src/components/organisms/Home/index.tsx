import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { newsList } from '../../../constants/news';
import { Box, Flex } from '../../../lib/styled';
import { MainImage } from './MainImage';
import { P } from '../../atoms/P';

const NewsLink = styled(Link)({
  color: '#1b1b1b',
});

const NewsDate = styled(Box)({
  color: '#909090',
});

const NewsTitle = styled(Box)({
  fontSize: '24px',
  textAlign: 'center',
});

const Paragrapgh = styled(Box)({
  textAlign: 'left',
});

const Section = styled(Box)({
  fontSize: '32px',
  textAlign: 'left',
});

const SmallSection = styled(Box)({
  fontSize: '14px',
  textAlign: 'left',
  color: '#909090',
});

const SubSection = styled(Box)({
  fontSize: '24px',
  textAlign: 'left',
});

const ContentWrapper = styled.div({
  width: '90%',
  margin: 'auto',
});

export const Home: React.FC = () => {
  return (
    <>
      <Box mt={30}>
        <MainImage />
      </Box>
      <ContentWrapper>
        <Box mt={40}>
          <Flex justifyContent={'center'} flexWrap={'wrap'}>
            <NewsTitle mr={80}>News</NewsTitle>
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
        <Section mt={100}>About</Section>
        <SmallSection mt={20}>栗崎園のお茶</SmallSection>

        <Box mt={100}>
          <Flex justifyContent={'space-between'} alignItems={'center'} flexWrap={'wrap'}>
            <Box>
              <SubSection>豊かな自然の中で</SubSection>
              <Paragrapgh mt={30}>
                <P>とにかくね、僕はね、広いライ麦畑やなんかがあってさ、</P>
                <P>
                  そこで小さな子供たちがみんなでなんかのゲームをしてるところが目に見えるんだよ。
                </P>
                <P mt={20}>何千かっていう子供たちがいるんだ そしてあたりには誰もいない。</P>
                <P>誰もって大人はだよ。僕の他にはね。 で、僕はあぶない崖のふちに立っているんだ。</P>
              </Paragrapgh>
            </Box>
            <Box style={{ width: '40%' }}>
              <img
                src="http://placehold.jp/24/99cc99/993333/500x500.png?text=image"
                width="100%"
                alt="栗崎園"
              />
            </Box>
          </Flex>
        </Box>
        <Section mt={100}>Feature</Section>
        <SmallSection mt={20}>特徴</SmallSection>

        <Box mt={100}>
          <Flex justifyContent={'space-between'} alignItems={'center'} flexWrap={'wrap'}>
            <Box>
              <SubSection>香り</SubSection>
              <Paragrapgh mt={30}>
                <P>
                  僕のやる仕事はね、誰でも崖から転がり落ちそうになったら、その子を捕まえることなんだ。
                </P>
                つまり、子供たちは走っているときにどこを通ってるかなんて見やしないだろう。
                <P mt={20}>
                  そんなとき僕は、どっからか、さっさととび出して行って、そこ子をつかまえてやらなきゃいけないんだ。
                </P>
                <P>一日じゅう、それだけをやればいいんだな。</P>
                <P>ライ麦畑のつかまえ役、そういったものに僕はなりたいんだよ。</P>
              </Paragrapgh>
            </Box>
            <Box style={{ width: '40%' }}>
              <img
                src="http://placehold.jp/24/99cc99/993333/500x500.png?text=image"
                width="100%"
                alt="栗崎園"
              />
            </Box>
          </Flex>
        </Box>

        <Box mt={100}>
          <Flex justifyContent={'space-between'} alignItems={'center'} flexWrap={'wrap-reverse'}>
            <Box style={{ width: '40%' }}>
              <img
                src="http://placehold.jp/24/99cc99/993333/500x500.png?text=image"
                width="100%"
                alt="栗崎園"
              />
            </Box>
            <Box>
              <SubSection>土壌</SubSection>
              <Paragrapgh mt={30}>
                <P>馬鹿げていることは知っているよ。</P>
                <P>でも、ほんとうになりたいものといったらそれしかないね。</P>
                <P>馬鹿げていることは知っているけどさ。</P>
              </Paragrapgh>
            </Box>
          </Flex>
        </Box>
      </ContentWrapper>
    </>
  );
};
