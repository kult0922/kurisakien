import styled from '@emotion/styled';
import { useState } from 'react';
import { Box } from '../../lib/styled';
import { useConfirm } from '../../store/organisms/Confirm';
import { CartTable } from '../../components/organisms/CartTable';
import { Area, PaymentType } from '../../@types/order';
import { GlobalStore } from '../../store/Global';

const Wrapper = styled.div({
  textAlign: 'center',
});

const TotalPrice = styled.div({
  fontSize: '24px',
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
      <Box mt={30}>商品小計: {total}円</Box>
      <Box>送料: {postage}円</Box>
      <Box>手数料: {commission}円</Box>
      <TotalPrice>請求金額: {finalPrice}円</TotalPrice>
      <Box mt={30}>お客様情報</Box>
      <Box>郵便番号: {order.postalCode}</Box>
      <Box>住所: {order.address}</Box>
      <Box>
        氏名: {order.lastName} {order.firstName}
      </Box>
      <Box>メールアドレス: {order.email}</Box>
      <Box>電話番号: {order.phone}</Box>
      <Box>決済方法: {getPaymentTypeName(order.paymentType)}</Box>
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
