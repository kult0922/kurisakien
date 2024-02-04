import styled from '@emotion/styled';
import { KurisakienLogo } from '~/components/Icons/KurisakienLogo';
import { TabBar } from '~/components/molecules/TabBar';
import { bp } from '~/constants/css';
import { Box } from '~/lib/styled';

const Wrapper = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  [bp.md]: {},
});

export const Header: React.FC = () => {
  return (
    <Wrapper>
      <KurisakienLogo />
      <Box mt={20}>
        <TabBar />
      </Box>
    </Wrapper>
  );
};
