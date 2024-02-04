import styled from '@emotion/styled';
import { GlobalStore } from '~/store/Global';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';
import { Button } from '~/components/ui/button';

interface Props {
  editable: boolean;
  showTotal: boolean;
  style?: React.CSSProperties;
}

const Wrapper = styled.div({});

export const CartTable: React.FC<Props> = ({ editable, showTotal, style }) => {
  const { carts, total, onDeleteCartItem, onChangeCartItemAmount } =
    GlobalStore.useContainer().cart;

  if (!carts.length) return <div>ショッピングカートに商品は入っていません。</div>;

  return (
    <Wrapper style={style}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead></TableHead>
            <TableHead></TableHead>
            <TableHead></TableHead>
            <TableHead className="text-right">小計</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {carts.map((item, i) => (
            <TableRow key={i + 'cart-item'}>
              <TableCell className="font-medium">
                <img src={item.imagePaths[0].url} width="100px" alt="itme" />
              </TableCell>
              <TableCell>
                <div>{item.name}</div>
                <div>{item.price}円</div>
              </TableCell>
              <TableCell>
                <div>
                  {editable ? (
                    <div className="flex flex-col items-end">
                      <Select
                        defaultValue={String(item.amount)}
                        onValueChange={(value) => {
                          onChangeCartItemAmount(item.id, Number(value));
                        }}
                      >
                        <SelectTrigger className="w-[80px]">
                          <SelectValue placeholder="個数" />
                        </SelectTrigger>
                        <SelectContent>
                          {[...Array(10)].map((_, i) => (
                            <SelectItem key={i + 'select-num'} value={String(i + 1)}>
                              {i + 1}個
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>

                      <Button
                        className="w-14 mt-2"
                        variant="destructive"
                        onClick={() => {
                          onDeleteCartItem(item.id);
                        }}
                      >
                        削除
                      </Button>
                    </div>
                  ) : (
                    <div>{item.amount} 個</div>
                  )}
                </div>
              </TableCell>
              <TableCell className="text-right">{item.price * item.amount}円</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          {showTotal && (
            <TableRow>
              <TableCell colSpan={3}>合計</TableCell>
              <TableCell className="text-right">{total}円</TableCell>
            </TableRow>
          )}
        </TableFooter>
      </Table>
    </Wrapper>
  );
};
