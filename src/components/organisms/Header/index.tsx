import { KurisakienLogo } from '~/components/Icons/KurisakienLogo';
import { TabBar } from '~/components/molecules/TabBar';
import { bp } from '~/constants/css';

export const Header: React.FC = () => {
  return (
    <div>
      <KurisakienLogo />
      <div>
        <TabBar />
      </div>
    </div>
  );
};
