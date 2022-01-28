import { BasicLink } from '~/components/atoms/BasicLink';
import { routing } from '~/constants/routing';
import { Box } from '~/lib/styled';

export const DocsFooter: React.FC = () => {
  return (
    <>
      <Box mt={30}>
        <BasicLink path={routing.root} text={'Topページへ戻る'}></BasicLink>
      </Box>
    </>
  );
};
