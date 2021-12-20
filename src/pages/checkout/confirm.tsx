import styled from '@emotion/styled';
import { useState } from 'react';
import { Box } from '../../lib/styled';
import { useConfirm } from '../../store/organisms/Confirm';
import { CartTable } from '../../components/organisms/CartTable';
import { GlobalStore } from '../../store/Global';
import { bp } from '../../constants/css';

const Wrapper = styled.div({
  textAlign: 'center',
});

const TotalPrice = styled.div({
  fontSize: '24px',
});

const Table = styled.table({
  borderCollapse: 'collapse',
  marginRight: 'auto',
  marginLeft: 'auto',
});

const TableHeader = styled.td({
  textAlign: 'left',
  paddingRight: '50px',
  paddingLeft: '20px',
  [bp.md]: {
    display: 'block',
    paddingTop: '10px',
  },
});

const TablePriceRow = styled.tr({
  borderTop: 'solid 2px #aaaaaa',
});

const TableData = styled.td({
  textAlign: 'left',
  paddingLeft: '20px',
  [bp.md]: {
    display: 'block',
  },
});

const TablePriceData = styled.td({
  textAlign: 'right',
  [bp.md]: {
    display: 'block',
  },
});

const Button = styled.button({
  background: '#e53a36',
  textAlign: 'center',
  boxSizing: 'border-box',
  display: 'block',
  border: '0px',
  color: '#fff',
  fontWeight: 'bold',
  padding: '0.5em 2em 0.5em 1em',
  lineHeight: '1.4',
  maxWidth: '200px',
  width: '100%',
  margin: '0 auto',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#f55a56',
    color: '#fff',
  },
});

const Confirm: React.FC = () => {
  const { order, postage, commission, getPaymentTypeName, onClickConfirmButton } = useConfirm();
  const [disabled, setDisabled] = useState(false);
  const { cart: cartStore } = GlobalStore.useContainer();
  const itemSubTotal = cartStore.total;

  const totalPrice = itemSubTotal + postage + commission;

  return (
    <Wrapper>
      <h1>注文確認</h1>
      <CartTable editable={false} showTotal={false} />
      <Box mt={30}>
        <Table>
          <tbody>
            <tr>
              <TableHeader>商品小計: </TableHeader>
              <TablePriceData>{itemSubTotal} 円</TablePriceData>
            </tr>

            <tr>
              <TableHeader>送料</TableHeader>
              <TablePriceData>{postage}円</TablePriceData>
            </tr>

            <tr>
              <TableHeader>手数料</TableHeader>
              <TablePriceData>{commission}円</TablePriceData>
            </tr>

            <TablePriceRow>
              <TableHeader>請求合計</TableHeader>
              <TablePriceData>
                <TotalPrice>{totalPrice}円</TotalPrice>
              </TablePriceData>
            </TablePriceRow>
          </tbody>
        </Table>
      </Box>
      <Box mt={50} mb={5}>
        <h3>お客様情報</h3>
      </Box>
      <Table>
        <tbody>
          <tr>
            <TableHeader>郵便番号</TableHeader>

            <TableData>{order.postalCode}</TableData>
          </tr>

          <tr>
            <TableHeader>住所</TableHeader>
            <TableData>{order.address}</TableData>
          </tr>

          <tr>
            <TableHeader>お名前</TableHeader>
            <TableData>
              {order.lastName} {order.firstName}
            </TableData>
          </tr>

          <tr>
            <TableHeader>メールアドレス</TableHeader>
            <TableData>{order.email}</TableData>
          </tr>

          <tr>
            <TableHeader>電話番号</TableHeader>
            <TableData>{order.phone}</TableData>
          </tr>

          <tr>
            <TableHeader>お支払い方法</TableHeader>
            <TableData>{getPaymentTypeName(order.paymentType)}</TableData>
          </tr>
        </tbody>
      </Table>
      <Box m={20}>
        ※以下のボタンを押すと注文が確定されます。
        商品、住所、決済方法を確認の上、注文を確定してください。
      </Box>
      <Button
        disabled={disabled}
        onClick={async () => {
          setDisabled(true);
          await onClickConfirmButton();
        }}
      >
        注文確定
      </Button>
    </Wrapper>
  );
};

export default Confirm;
