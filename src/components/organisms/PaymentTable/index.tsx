import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableCaption,
  TableRow,
} from '~/components/ui/table';

export const PaymentTable: React.FC = () => {
  return (
    <>
      <Table>
        <TableCaption>支払い方法について</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead></TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>郵便振替</TableCell>
            <TableCell>
              <div>手数料: 無料</div>
              <div>ただし現金での振込の場合、追加手数料110円がかかります。</div>
              <div>郵便振替用紙をこちらから郵送しますので、到着後10日以内にお支払い下さい。</div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>コンビニ決済</TableCell>
            <TableCell>
              <div>手数料: 200円</div>
              <div>支払い用紙をこちらから郵送しますので、到着後10日以内にお支払い下さい。</div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>銀行振り込み</TableCell>
            <TableCell>
              <div>手数料: 銀行の振込手数料はお客様負担となります。</div>
              <div>振込先情報をメールにて贈ります。メール受信後10日以内にお支払い下さい。</div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>代引き払い</TableCell>
            <TableCell>
              <div>手数料: 450円</div>
              <div>配達員の方に料金をお支払い下さい。</div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};
