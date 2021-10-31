import styled from '@emotion/styled';
import { TabBar } from '../../molecules/TabBar';
import { Box } from '../../../lib/styled';
import { KurisakienLogo } from '../../Icons/KurisakienLogo';
import { bp } from '../../../constants/css';

const Wrapper = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  [bp.md]: {
    display: 'block',
    textAlign: 'center',
  },
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
