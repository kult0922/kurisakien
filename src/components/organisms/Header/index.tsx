import { KurisakienLogo } from '~/components/Icons/KurisakienLogo';
import { TabBar } from '~/components/molecules/TabBar';

export const Header: React.FC = () => {
  return (
    <div className="flex justify-between">
      <KurisakienLogo />
      <div className="mt-4">
        <TabBar />
      </div>
    </div>
  );
};
