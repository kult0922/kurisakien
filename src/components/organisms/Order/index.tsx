import { Link } from 'react-router-dom';
import { itemList } from '../../../data/ItemData';
import { Item } from '../../molecules/Item';

export const Order: React.FC = () => {
  return (
    <div>
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
    </div>
  );
};
