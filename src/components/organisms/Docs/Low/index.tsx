import { DocsFooter } from '~/components/molecules/DocsFooter';
import { Box } from '~/lib/styled';
import { PaymentTable } from '~/components/organisms/PaymentTable';
import { PostageTable } from '~/components/organisms/PostageTable';
import { Table, TableBody, TableCell, TableRow } from '~/components/ui/table';

export const LowDocument: React.FC = () => {
  return (
    <>
      <h1>特定商取引法に基づく表示</h1>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>店舗名</TableCell> <TableCell>栗崎園</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>運営統括責任者</TableCell> <TableCell>栗崎成彦</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>販売業者</TableCell> <TableCell>栗崎園 栗崎成彦</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>所在地</TableCell> <TableCell>静岡県浜松市天竜区春野町宮川５３７</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>電話番号</TableCell> <TableCell>053-989-0756</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>メールアドレス</TableCell> <TableCell>kurisakien@gmail.com</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>支払い方法</TableCell>
            <TableCell>
              クレジットカード、郵便振替、銀行振り込み、代引き払い、コンビニ支払い
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>販売価格</TableCell>
            <TableCell>注各商品は税込みの値段です</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>支払い時期</TableCell>
            <TableCell>
              クレジットカード: 各カード会社引き落とし日
              <br />
              郵便振替、コンビニ決済、銀行振り込み: 注文後7日以内
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>商品代金以外のお客様負担</TableCell>
            <TableCell>
              送料:
              <br />
              配送地域、お買い上げ金額によって変動します。詳しくは下記の送料についての表をご覧ください
              <br />
              手数料:
              <br />
              郵便振替、コンビニ決済、銀行振り込み、代引き払いの場合、手数料が発生します。
              <br />
              詳しくは下記の手数料についての表をご覧ください
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>引き渡し期限</TableCell>
            <TableCell>注文確定後10日以内に発送いたします</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>不良品について</TableCell>
            <TableCell>商品に欠損がある場合のみ運賃当方負担にてお取り替えいたします</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>返品について</TableCell>
            <TableCell>商品到着後２日以内に電話にてお問い合わせ下さい</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>返品送料</TableCell>
            <TableCell>当方着払い便にて負担いたします</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Box mt={40}>
        <PostageTable />
      </Box>
      <Box mt={40}>
        <PaymentTable />
      </Box>
      <DocsFooter />
    </>
  );
};
