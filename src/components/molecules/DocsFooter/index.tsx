import { BasicLink } from '~/components/atoms/BasicLink';
import { routing } from '~/constants/routing';

export const DocsFooter: React.FC = () => {
  return (
    <>
      <div>
        <BasicLink path={routing.root}>Topページへ戻る</BasicLink>
      </div>
    </>
  );
};
