import styled from '@emotion/styled';
import { TabBar } from '../molecules/TabBar';
import { Box } from '../../lib/styled';
import { KurisakienLogo } from '../Icons/KurisakienLogo';

const Wrapper = styled.div({
  textAlign: 'center',
});

export const Header = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  '@media (max-width: 767px)': {
    display: 'block',
  },
});

export const Template: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Header>
        <KurisakienLogo />
        <Box mt={20}>
          <TabBar />
        </Box>
      </Header>
      {children}
    </Wrapper>
  );
};
