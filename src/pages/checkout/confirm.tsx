import styled from '@emotion/styled';
import { useState } from 'react';
import { Box } from '../../lib/styled';
import { useConfirm } from '../../store/organisms/Confirm';
import { CartTable } from '../../components/organisms/CartTable';
import { Area, PaymentType } from '../../@types/order';
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

const getPostage = (itemsPrice: number, area: Area): number => {
  if (itemsPrice >= 10000) return 0;

  if (itemsPrice >= 5000) {
    if (area === 'shizuoka') return 300;
    if (area === 'near') return 400;
    if (area === 'middle') return 500;
    if (area === 'far') return 600;
  } else {
    if (area === 'shizuoka') return 650;
    if (area === 'near') return 750;
    if (area === 'middle') return 950;
    if (area === 'far') return 1200;
  }
};

const getCommission = (paymentType: PaymentType): number => {
  if (paymentType === 'postal') return 0;
  if (paymentType === 'bank') return 0;
  if (paymentType === 'convenience') return 200;
  if (paymentType === 'delivery') return 450;
};

const getPaymentTypeName = (paymentType: PaymentType): string => {
  if (paymentType === 'postal') return '郵便振替';
  if (paymentType === 'bank') return '銀行振り込み';
  if (paymentType === 'convenience') return 'コンビニ払い';
  if (paymentType === 'delivery') return '代引き払い';
};

const Confirm: React.FC = () => {
  const { order, onClickConfirmButton } = useConfirm();
  const [disabled, setDisabled] = useState(false);
  const { cart: cartStore } = GlobalStore.useContainer();
  const { total } = cartStore;

  const postage = getPostage(total, order.area);
  const commission = getCommission(order.paymentType);
  const finalPrice = total + postage + commission;

  return (
    <Wrapper>
      <h1>注文確認</h1>
      <CartTable editable={false} showTotal={false} />
      <Box mt={30}>
        <Table>
          <tbody>
            <tr>
              <TableHeader>商品小計: </TableHeader>
              <TablePriceData>{total} 円</TablePriceData>
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
                <TotalPrice>{finalPrice}円</TotalPrice>
              </TablePriceData>
            </TablePriceRow>
          </tbody>
        </Table>
      </Box>
      <Box mt={20} mb={10}>
        お客様情報
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
        以下のボタンを押すと注文が確定されます。
        商品、住所、決済方法を確認の上、注文を確定してください。
      </Box>
      <button
        disabled={disabled}
        onClick={async () => {
          setDisabled(true);
          await onClickConfirmButton();
        }}
      >
        注文確定
      </button>
    </Wrapper>
  );
};

export default Confirm;
