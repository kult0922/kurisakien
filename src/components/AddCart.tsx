import { OrderContainer } from "../containers/OrderContainer";

interface CartProps {
  id: string;
}

const AddCart: React.FC<CartProps> = (props) => {
  const orderContainer = OrderContainer.useContainer();
  const onClick = () => {
    orderContainer.addItem(props.id);
  };
  return <button onClick={onClick}>カートに入れる</button>;
};

export default AddCart
