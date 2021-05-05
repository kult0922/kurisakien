import { Tab } from '../../atoms/Tab';
import { ShoppingCart } from '../../Icons/ShoppingCart';

export const TabBar: React.FC = () => {
  return (
    <>
      <Tab to="/">ホーム</Tab>
      <Tab to="/order">注文</Tab>
      <Tab bottom="-7px" to="/cart">
        <ShoppingCart width={18} height={18} />
      </Tab>
    </>
  );
};
