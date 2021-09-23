import styled from '@emotion/styled';
import { GlobalStore } from '../../../store/Global';
import { useHistory } from 'react-router';
import { Box, Flex } from '../../../lib/styled';
import { PaymentType } from '../../../@types/order';
import { useState, useCallback } from 'react';
import { routing } from '../../../constants/routing';

const Wrapper = styled.div({
  textAlign: 'center',
});

const Input = styled.input<{ width?: number | string }>(({ width }) => ({
  width,
  height: '25px',
  border: 'solid 1px #aaaaaa',
  backgroundColor: '#fde1e1',
}));

const Table = styled.table({
  border: 'solid 2px #aaaaaa',
  borderCollapse: 'collapse',
});

const TableHeader = styled.td({
  textAlign: 'left',
  paddingRight: '100px',
  paddingLeft: '20px',
  '@media (max-width: 767px)': {
    display: 'block',
    paddingTop: '20px',
  },
});

const TableRow = styled.tr({
  borderBottom: 'solid 1px #aaaaaa',
});

const TableData = styled.td({
  textAlign: 'left',
  padding: '20px',
  '@media (max-width: 767px)': {
    display: 'block',
  },
});

const Title = styled(Box)({
  fontSize: '28px',
});

const ErrorText = styled(Box)({
  fontSize: '12px',
  color: 'red',
});

export const Checkout: React.FC = () => {
  const { order: orderContainer } = GlobalStore.useContainer();
  const { paymentType, isValid, onChangePaymentType, onChangeCutomer } = orderContainer;
  const [isConfimClicked, setConfirmClicked] = useState(false);
  const history = useHistory();

  const onConfirmClick = useCallback(() => {
    if (!isValid('postalCode')) return;
    if (!isValid('address')) return;
    if (!isValid('firstName')) return;
    if (!isValid('lastName')) return;
    if (!isValid('phone')) return;
    if (!isValid('email')) return;

    history.push(routing.checkout.confirm);
  }, [history, isValid]);

  return (
    <Wrapper>
      <Box m={20}>
        <Title>お客様情報</Title>
      </Box>
      <Flex justifyContent={'center'}>
        <Table>
          <tbody>
            <TableRow>
              <TableHeader>郵便番号</TableHeader>

              <TableData>
                <Input
                  name="postalCode"
                  placeholder="123-4567"
                  onChange={(event) => {
                    onChangeCutomer(event.target.value, event.target.name);
                  }}
                />
                {isConfimClicked && !isValid('postalCode') && (
                  <ErrorText>郵便番号を正しく入力してください(半角数字)</ErrorText>
                )}
              </TableData>
            </TableRow>

            <TableRow>
              <TableHeader>住所</TableHeader>
              <TableData>
                <Input
                  name="address"
                  placeholder="○○県△△市□□町１−２−３ Kハイツ ○○号室"
                  onChange={(event) => {
                    onChangeCutomer(event.target.value, event.target.name);
                  }}
                  width={300}
                />
                {isConfimClicked && !isValid('address') && (
                  <ErrorText>住所を入力してください</ErrorText>
                )}
              </TableData>
            </TableRow>

            <TableRow>
              <TableHeader>氏名</TableHeader>
              <TableData>
                <Flex>
                  <Box mr={5}>姓:</Box>
                  <Input
                    name="lastName"
                    placeholder="姓"
                    onChange={(event) => {
                      onChangeCutomer(event.target.value, event.target.name);
                    }}
                    width={100}
                  />
                  <Box ml={15} mr={5}>
                    名:
                  </Box>
                  <Input
                    name="firstName"
                    placeholder="名"
                    onChange={(event) => {
                      onChangeCutomer(event.target.value, event.target.name);
                    }}
                    width={100}
                  />
                </Flex>
                {isConfimClicked && !isValid('lastName') && (
                  <ErrorText>姓を入力してください</ErrorText>
                )}
                {isConfimClicked && !isValid('firstName') && (
                  <ErrorText>名を入力してください</ErrorText>
                )}
              </TableData>
            </TableRow>

            <TableRow>
              <TableHeader>電話番号</TableHeader>
              <TableData>
                <Input
                  name="phone"
                  placeholder="123-456-7890"
                  onChange={(event) => {
                    onChangeCutomer(event.target.value, event.target.name);
                  }}
                  width={100}
                />
                {isConfimClicked && !isValid('phone') && (
                  <ErrorText>電話番号を正しく入力してください(半角数字)</ErrorText>
                )}
              </TableData>
            </TableRow>

            <TableRow>
              <TableHeader>メールアドレス</TableHeader>
              <TableData>
                <Input
                  name="email"
                  placeholder="example@example.com"
                  onChange={(event) => {
                    onChangeCutomer(event.target.value, event.target.name);
                  }}
                  type="email"
                  id="email"
                  width={300}
                />
                {isConfimClicked && !isValid('email') && (
                  <ErrorText>メールアドレスを正しく入力してください</ErrorText>
                )}
              </TableData>
            </TableRow>
          </tbody>
        </Table>
      </Flex>
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
      <a
        href="#"
        onClick={() => {
          setConfirmClicked(true);
          onConfirmClick();
        }}
      >
        注文内容確認へ
      </a>
    </Wrapper>
  );
};
