import styled from '@emotion/styled';

const Table = styled.table({
  borderCollapse: 'collapse',
  marginLeft: 'auto',
  marginRight: 'auto',
});

const Td = styled.td({
  border: '2px solid #aaaaaa',
  whiteSpace: 'nowrap',
  padding: '10px',
  textAlign: 'left',
});

const Wrapper = styled.div({
  overflowX: 'scroll',
});

export const PaymentTable: React.FC = () => {
  return (
    <Wrapper>
      <Table>
        <tr>
          <Td>郵便振替</Td>
          <Td>
            <div>手数料: 無料</div>
            <div>ただし現金での振込の場合、追加手数料110円がかかります。</div>
            <div>郵便振替用紙をこちらから郵送しますので、到着後10日以内にお支払い下さい。</div>
          </Td>
        </tr>
        <tr>
          <Td>コンビニ決済</Td>
          <Td>
            <div>手数料: 200円</div>
            <div>支払い用紙をこちらから郵送しますので、到着後10日以内にお支払い下さい。</div>
          </Td>
        </tr>
        <tr>
          <Td>銀行振り込み</Td>
          <Td>
            <div>手数料: 銀行の振込手数料はお客様負担となります。</div>
            <div>振込先情報をメールにて贈ります。メール受信後10日以内にお支払い下さい。</div>
          </Td>
        </tr>
        <tr>
          <Td>代引き払い</Td>
          <Td>
            <div>手数料: 200円</div>
            <div>配達員の方に料金をお支払い下さい。</div>
          </Td>
        </tr>
      </Table>
    </Wrapper>
  );
};
