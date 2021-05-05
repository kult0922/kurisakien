import { Link } from 'react-router-dom';
import { itemList } from '../../../constants/store';
import { Item } from '../../molecules/Item';
import { TabBar } from '../../molecules/TabBar';

export const Order: React.FC = () => {
  return (
    <>
      <TabBar />
      <h1>注文ページ</h1>
      {itemList.map((item, i) => {
        return (
          <div key={i}>
            <Link to={'/merchandise/' + item.id}>
              <div>
                <Item id={item.id} />
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
};
