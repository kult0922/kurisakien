import styled from '@emotion/styled';
// import { BasicLink } from '~/components/atoms/BasicLink';
// import { routing } from '~/constants/routing';
import { DocsFooter } from '~/components/molecules/DocsFooter';
import { Box } from '~/lib/styled';
import { PostageTable } from '~/components/organisms/PostageTable';
import { PaymentTable } from '~/components/organisms/PaymentTable';

const Wrapper = styled.div({
  textAlign: 'center',
});

const Title = styled.div({
  fontSize: '20px',
});

export const CommissionDocument: React.FC = () => {
  return (
    <Wrapper>
      <Box mt={40}>
        <Title>送料について</Title>
        <PostageTable />
      </Box>
      <Box mt={40}>
        <Title>手数料について</Title>
        <PaymentTable />
      </Box>
      <DocsFooter />
    </Wrapper>
  );
};
