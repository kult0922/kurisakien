import styled from '@emotion/styled';
import { DocsFooter } from '~/components/molecules/DocsFooter';
import { Box } from '~/lib/styled';

const Wrapper = styled.div({
  textAlign: 'center',
});

const PdfLink = styled.a({
  color: '#1b1b1b',
  padding: '10px',
});

export const FaxDocument: React.FC = () => {
  return (
    <Wrapper>
      <Box mt={30}>
        価格表の商品番号、住所などの必要事項を注文表に記入の上、Faxにてお送り下さい。
      </Box>
      <Box mt={20}>
        <PdfLink href="/pdf/kakaku_v2.pdf" download="価格表.pdf">
          価格表
        </PdfLink>
        <PdfLink href="/pdf/tyumonhyou.pdf" download="注文表.pdf">
          注文表
        </PdfLink>
      </Box>
      <DocsFooter />
    </Wrapper>
  );
};
