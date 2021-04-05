interface CartProps {
  id: string;
  addItem: (id: string) => void;
}

export const AddCart: React.FC<CartProps> = ({ id, addItem }) => {
  return (
    <button
      onClick={() => {
        addItem(id);
      }}
    >
      カートに入れる
    </button>
  );
};
