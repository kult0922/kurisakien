import { Link } from 'react-router-dom';
import { Item } from '~/components/Item';
import { itemList } from '~/data/ItemData';

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
