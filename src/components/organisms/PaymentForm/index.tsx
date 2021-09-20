import { PaymentType } from '../../../@types/order';
import styled from '@emotion/styled';
import { Box, Flex } from '../../../lib/styled';

interface Props {
  paymentType: PaymentType;
  onChangePaymentType: (paymentType: PaymentType) => void;
}

const Title = styled(Box)({
  fontSize: '28px',
});

const Table = styled.table({
  border: 'solid 2px #aaaaaa',
  borderCollapse: 'collapse',
});

const TableRow = styled.tr({
  borderBottom: 'solid 1px #aaaaaa',
});

const TableData = styled.td({
  textAlign: 'left',
  padding: '20px',
});

const Wrapper = styled.div({
  textAlign: 'center',
});

export const PaymentForm: React.FC<Props> = ({ paymentType, onChangePaymentType }) => {
  return (
    <Wrapper>
      <Box m={20}>
        <Title>お支払い方法</Title>
      </Box>
      <Flex justifyContent={'center'}>
        <Table>
          <tbody>
            <TableRow>
              <TableData>
                <input
                  type="radio"
                  value="postal"
                  onChange={(event) => {
                    onChangePaymentType(event.target.value as PaymentType);
                  }}
                  checked={paymentType === 'postal'}
                />
                郵便振り込み
              </TableData>
            </TableRow>

            <TableRow>
              <TableData>
                <input
                  type="radio"
                  value="convenience"
                  onChange={(event) => {
                    onChangePaymentType(event.target.value as PaymentType);
                  }}
                  checked={paymentType === 'convenience'}
                />
                コンビニ決済
              </TableData>
            </TableRow>

            <TableRow>
              <TableData>
                <input
                  type="radio"
                  value="bank"
                  onChange={(event) => {
                    onChangePaymentType(event.target.value as PaymentType);
                  }}
                  checked={paymentType === 'bank'}
                />
                銀行振り込み
              </TableData>
            </TableRow>
          </tbody>
        </Table>
      </Flex>
    </Wrapper>
  );
};
