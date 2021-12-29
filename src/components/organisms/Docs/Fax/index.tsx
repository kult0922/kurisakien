import styled from '@emotion/styled';
import { routing } from '../../../../constants/routing';
import { Box } from '../../../../lib/styled';
import { BasicLink } from '../../../atoms/BasicLink';

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
      <Box mt={30}>価格表の商品番号を注文表に記入の上、Faxにてお送り下さい。</Box>
      <Box mt={20}>
        <PdfLink href="/pdf/kakaku.pdf" download="価格表.pdf">
          価格表
        </PdfLink>
        <PdfLink href="/pdf/tyumonhyou.pdf" download="注文表.pdf">
          注文表
        </PdfLink>
      </Box>
      <Box mt={30}>
        <BasicLink path={routing.root} text={'Topページへ戻る'}></BasicLink>
      </Box>
    </Wrapper>
  );
};
