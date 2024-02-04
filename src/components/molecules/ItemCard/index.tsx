import { Item } from '~/@types/product';
import { Card, CardContent, CardDescription } from '~/components/ui/card';
import { Badge } from '~/components/ui/badge';
interface Props {
  item: Item;
}

export const ItemCard: React.FC<Props> = ({ item }) => {
  const { name, imagePaths, price, amount } = item;
  return (
    <div className="p-2">
      <Card className="w-72 pb-2">
        <CardContent className="p-0">
          <img
            className="w-full object-cover rounded-t-lg"
            src={imagePaths.length > 0 && imagePaths[0].url}
          />
        </CardContent>
        <div className="pt-2">{name}</div>
        <Badge className="text-sm mt-1">{price}円</Badge>
        <CardDescription className="justify-end flex mr-2">{amount}</CardDescription>
      </Card>
    </div>
  );
};
