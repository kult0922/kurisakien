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
});

const Wrapper = styled.div({
  overflowX: 'scroll',
});

const PaymentTable: React.FC = () => {
  return (
    <Wrapper>
      <Table>
        <tr>
          <Td>郵便振替</Td>
          <Td>郵便振替用紙をこちらから郵送しますので、到着後10日以内にお支払い下さい。</Td>
        </tr>
        <tr>
          <Td>コンビニ決済</Td>
          <Td>支払い用紙をこちらから郵送しますので、到着後10日以内にお支払い下さい。</Td>
        </tr>
        <tr>
          <Td>銀行振り込み</Td>
          <Td>振込先情報をメールにて贈ります。メール受信後10日以内にお支払い下さい。</Td>
        </tr>
        <tr>
          <Td>代引き払い</Td>
          <Td>配達員の方に料金をお支払い下さい。</Td>
        </tr>
      </Table>
    </Wrapper>
  );
};

export default PaymentTable;
