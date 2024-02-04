import { Card, CardContent, CardDescription } from '~/components/ui/card';
import { Badge } from '~/components/ui/badge';
interface Props {
  name: string;
  price: number;
  amount: string;
  imagePath: string;
}

export const ItemCard: React.FC<Props> = ({ name, price, amount, imagePath }) => {
  return (
    <div className="p-2 cursor-pointer">
      <Card className="w-72 pb-2">
        <CardContent className="p-0">
          <img className="w-full object-cover rounded-t-lg" src={imagePath} />
        </CardContent>
        <div className="ml-2">
          <div className="pt-2">{name}</div>
          <Badge className="text-sm mt-1">{price}円</Badge>
          <CardDescription className="justify-end flex mr-2">{amount}</CardDescription>
        </div>
      </Card>
    </div>
  );
};
