import styled from '@emotion/styled';
const Wrapper = styled.div({
  width: '800px',
  marginLeft: 'auto',
  marginRight: 'auto',
});

const Table = styled.table({
  borderCollapse: 'collapse',
});

const Td = styled.td({
  border: '1px solid #333',
});

const Low: React.FC = () => {
  return (
    <Wrapper>
      <h1>特定商取引法に基づく表示</h1>
      <Table>
        <tr>
          <Td>店舗名</Td> <Td>栗崎園</Td>
        </tr>
        <tr>
          <Td>責任者名</Td> <Td>栗崎克之</Td>
        </tr>
        <tr>
          <Td>販売業者</Td> <Td>栗崎園 栗崎克之</Td>
        </tr>
        <tr>
          <Td>所在地</Td> <Td>静岡県浜松市天竜区春野町宮川５３７</Td>
        </tr>
        <tr>
          <Td>電話番号</Td> <Td>053-989-0756</Td>
        </tr>
        <tr>
          <Td>メールアドレス</Td> <Td>kurisakien@gmail.com</Td>
        </tr>
        <tr>
          <Td>支払い方法</Td> <Td>郵便振替、銀行振り込み、代引き払い、コンビニ支払い</Td>
        </tr>
        <tr>
          <Td>商品代金以外のお客様負担</Td>
          <Td>送料、手数料(代引き払い、銀行振込、コンビニ支払い)</Td>
        </tr>
        <tr>
          <Td>引き渡し期限</Td>
          <Td>注文確認後10日以内に発送</Td>
        </tr>
        <tr>
          <Td>不良品</Td>
          <Td>正当な時由のある場合のみ運賃当方負担にてお取り替えいたします</Td>
        </tr>
        <tr>
          <Td>返品期限</Td>
          <Td>商品到着後２日以内に電話にてお問い合わせ下さい</Td>
        </tr>
        <tr>
          <Td>返品送料</Td>
          <Td>当方着払い便にて</Td>
        </tr>
      </Table>
    </Wrapper>
  );
};

export default Low;
