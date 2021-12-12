import styled from '@emotion/styled';
import { Box } from '../../lib/styled';
import Link from 'next/link';
import { routing } from '../../constants/routing';
const Wrapper = styled.div({
  textAlign: 'center',
});

const PdfLink = styled.a({
  color: '#1b1b1b',
  padding: '10px',
});

const Privacy: React.FC = () => {
  return (
    <Wrapper>
      <Box mt={30}>価格表の商品番号を注文表に記入の上、Faxにてお送り下さい。</Box>
      <Box mt={20}>
        <PdfLink href="/pdf/kakaku.pdf" download="価格表.pdf">
          価格表
        </PdfLink>
        <PdfLink href="/pdf/tyumonhyou.pdf" download="注文表.pdf">
          注文表
        </PdfLink>
      </Box>
      <Box>
        <Link href={routing.root}>Topへもどる</Link>
      </Box>
    </Wrapper>
  );
};

export default Privacy;
