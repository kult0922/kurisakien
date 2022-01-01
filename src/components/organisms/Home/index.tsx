import styled from '@emotion/styled';
import Link from 'next/link';
import { P } from '~/components/atoms/P';
import { bp } from '~/constants/css';
import { newsList } from '~/constants/news';
import { routing } from '~/constants/routing';
import { Box, Flex } from '~/lib/styled';

const News = styled.a({
  color: '#1b1b1b',
});

const NewsDate = styled(Box)({
  color: '#909090',
});

const NewsTitle = styled(Box)({
  fontSize: '24px',
  [bp.md]: {
    paddingRight: '240px',
    fontSize: '18px',
  },
});

const Paragrapgh = styled(Box)({
  textAlign: 'left',
  width: '600px',
  [bp.md]: {
    width: '300px',
  },
});

const Section = styled(Box)({
  fontSize: '32px',
  textAlign: 'left',
  borderBottom: '4px solid #67ce9a',
  width: '90px',
});

const SmallSection = styled(Box)({
  fontSize: '14px',
  textAlign: 'left',
  color: '#909090',
});

const SubSection = styled(Box)({
  fontSize: '24px',
  textAlign: 'left',
  borderBottom: '2px solid #bbbbbb',
});

const ContentWrapper = styled.div({
  width: '90%',
  margin: 'auto',
});

const MainText = styled.div({
  position: 'absolute',
  fontSize: '24px',
  background: 'white',
  padding: '15px',
  top: '30px',
  right: 'calc(100% - 300px)',
  writingMode: 'vertical-rl',
  opacity: '0.9',
  [bp.md]: {
    display: 'none',
  },
});

const SubText = styled.div({
  textAlign: 'left',
  position: 'absolute',
  fontSize: '14px',
  background: 'white',
  padding: '15px',
  top: '60px',
  right: 'calc(100% - 200px)',
  writingMode: 'vertical-rl',
  opacity: '0.9',
  [bp.md]: {
    display: 'none',
  },
});

const Top = styled.div({
  position: 'relative',
});

const MainImage = styled.img({
  width: '100%',
  height: '600px',
  objectFit: 'cover',
  objectPosition: '50% 40%',
  [bp.md]: {
    height: '300px',
  },
});

const SubImage = styled.img({
  width: '100%',
  height: '430px',
  objectFit: 'cover',
  [bp.md]: {
    height: '300px',
  },
});

const SectionFlex = styled(Flex)({
  justifyContent: 'space-between',
  alignItems: 'center',
  [bp.md]: {
    justifyContent: 'center',
  },
});

export const Home: React.FC = () => {
  return (
    <>
      <Box mt={30}>
        <Top>
          <MainImage src="/image/main/home.JPG" alt="栗崎園" />
          <MainText>霧の里、春野町のお茶農家</MainText>
          <SubText>
            <P m={3}>ちいさいながらも、</P>
            <P m={3}>自然と共に日々お茶づくりに励んでいます。</P>
          </SubText>
        </Top>
      </Box>
      <ContentWrapper>
        <Box mt={40}>
          <Flex justifyContent={'center'} flexWrap={'wrap'}>
            <NewsTitle mr={30}>News</NewsTitle>
            <Box>
              {newsList.map((news, i) => {
                return (
                  <Flex flexWrap={'wrap'} key={i}>
                    <NewsDate mr={40}>{news.date}</NewsDate>
                    <Box>
                      <Link
                        href={{
                          pathname: routing.news.id,
                          query: { id: news.id },
                        }}
                        passHref
                      >
                        <News>{news.title}</News>
                      </Link>
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
          <SectionFlex flexWrap="wrap">
            <Box>
              <SubSection>地の利・茶畑</SubSection>
              <Paragrapgh mt={30}>
                <P>春野町は、天竜川が流れる静かな山あいの里です。</P>
                <P>
                  標高350ｍ、川を見下ろす茶畑には霧が立ち込め、
                  辺り一面柔らかい日差しと穏やかな風に包まれます。
                </P>
              </Paragrapgh>
            </Box>
            <Box>
              <SubImage src="/image/main/sub1.JPG" alt="栗崎園" />
            </Box>
          </SectionFlex>
        </Box>
        <Section mt={100}>Feature</Section>
        <SmallSection mt={20}>特徴</SmallSection>

        <Box mt={100}>
          <SectionFlex flexWrap="wrap">
            <Box>
              <SubSection>人の利・茶工場</SubSection>
              <Paragrapgh mt={30}>
                {/** TODO: BOXに変える */}
                <P>朝涼しいうちに収穫し、住まいに隣接する茶工場ですぐに製茶します。</P>
                <P>見て、触って、香って、充実した新芽を香味豊かな茶葉に仕上げます。</P>
              </Paragrapgh>
            </Box>
            <Box>
              <SubImage src="/image/main/sub2.JPG" alt="栗崎園" />
            </Box>
          </SectionFlex>
        </Box>

        <Box mt={100}>
          <SectionFlex flexWrap="wrap-reverse">
            <Box>
              <SubImage src="/image/main/sub3.JPG" alt="栗崎園" />
            </Box>
            <Box>
              <SubSection>茶縁・皆さまへ</SubSection>
              <Paragrapgh mt={30}>
                <P>春の息吹と共に揉み上げられた我が家のお茶を「春野の精」と名付けました。</P>
                <P>皆さまが、お茶と共に日々健やかに安らかに過ごせますようにと願っています。</P>
              </Paragrapgh>
            </Box>
          </SectionFlex>
        </Box>
      </ContentWrapper>
    </>
  );
};
