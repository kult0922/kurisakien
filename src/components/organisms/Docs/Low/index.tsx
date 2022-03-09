import styled from '@emotion/styled';
import { DocsFooter } from '~/components/molecules/DocsFooter';
import { Box } from '~/lib/styled';
import { PaymentTable } from '~/components/organisms/PaymentTable';
import { PostageTable } from '~/components/organisms/PostageTable';

const Wrapper = styled.div({
  width: '1000px',
  textAlign: 'center',
  marginLeft: 'auto',
  marginRight: 'auto',
});

const Table = styled.table({
  borderCollapse: 'collapse',
  marginLeft: 'auto',
  marginRight: 'auto',
});

const Title = styled.div({
  fontSize: '20px',
});

const Td = styled.td({
  border: '1px solid #333',
});

const Tr = styled.tr({
  textAlign: 'left',
});

export const LowDocument: React.FC = () => {
  return (
    <Wrapper>
      <h1>特定商取引法に基づく表示</h1>
      <Table>
        <Tr>
          <Td>店舗名</Td> <Td>栗崎園</Td>
        </Tr>
        <Tr>
          <Td>運営統括責任者</Td> <Td>栗崎成彦</Td>
        </Tr>
        <Tr>
          <Td>販売業者</Td> <Td>栗崎園 栗崎成彦</Td>
        </Tr>
        <Tr>
          <Td>所在地</Td> <Td>静岡県浜松市天竜区春野町宮川５３７</Td>
        </Tr>
        <Tr>
          <Td>電話番号</Td> <Td>053-989-0756</Td>
        </Tr>
        <Tr>
          <Td>メールアドレス</Td> <Td>kurisakien@gmail.com</Td>
        </Tr>
        <Tr>
          <Td>支払い方法</Td>
          <Td>クレジットカード、郵便振替、銀行振り込み、代引き払い、コンビニ支払い</Td>
        </Tr>
        <Tr>
          <Td>販売価格</Td>
          <Td>注各商品は税込みの値段です</Td>
        </Tr>
        <Tr>
          <Td>支払い時期</Td>
          <Td>
            クレジットカード: 各カード会社引き落とし日
            <br />
            郵便振替、コンビニ決済、銀行振り込み: 注文後7日以内
          </Td>
        </Tr>
        <Tr>
          <Td>商品代金以外のお客様負担</Td>
          <Td>
            送料:
            <br />
            配送地域、お買い上げ金額によって変動します。詳しくは下記の送料についての表をご覧ください
            <br />
            手数料:
            <br />
            郵便振替、コンビニ決済、銀行振り込み、代引き払いの場合、手数料が発生します。
            <br />
            詳しくは下記の手数料についての表をご覧ください
          </Td>
        </Tr>
        <Tr>
          <Td>引き渡し期限</Td>
          <Td>注文確定後10日以内に発送いたします</Td>
        </Tr>
        <Tr>
          <Td>不良品について</Td>
          <Td>商品に欠損がある場合のみ運賃当方負担にてお取り替えいたします</Td>
        </Tr>
        <Tr>
          <Td>返品について</Td>
          <Td>商品到着後２日以内に電話にてお問い合わせ下さい</Td>
        </Tr>
        <Tr>
          <Td>返品送料</Td>
          <Td>当方着払い便にて負担いたします</Td>
        </Tr>
      </Table>

      <Box mt={40}>
        <Title>送料について</Title>
        <PostageTable />
      </Box>
      <Box mt={40}>
        <Title>手数料について</Title>
        <PaymentTable />
      </Box>
      <DocsFooter />
    </Wrapper>
  );
};
