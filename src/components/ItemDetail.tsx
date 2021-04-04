import { RouteComponentProps } from 'react-router-dom';
import { OrderContainer } from '../containers/OrderContainer';
import { id2index, itemList } from '../data/ItemData';
import { AddCart } from './AddCart';

type Props = RouteComponentProps<{ id: string }>;

export const ItemDetail: React.FC<Props> = (props) => {
  const orderContainer = OrderContainer.useContainer();
  const id = props.match.params.id;
  const index = id2index[id];
  const options = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' },
    { value: '7', label: '7' },
    { value: '8', label: '8' },
    { value: '9', label: '9' },
    { value: '10', label: '10' },
  ];
  return (
    <div>
      <br />
      <img src="http://placehold.jp/24/339933/223322/300x200.png?text=商品画像" alt="mercahndise" />
      <div>
        {itemList[index].name} <br />
        {itemList[index].price}円 <br />
        {itemList[index].discription}
        <br />
        <select defaultValue="1" onChange={orderContainer.ChangeItemCount}>
          {options.map((option, i) => (
            <option key={i} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <AddCart id={id} />
      </div>
    </div>
  );
};
