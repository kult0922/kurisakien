import styled from '@emotion/styled';
import React, { useState } from 'react';
import { CartTable } from '~/components/molecules/CartTable';
import { bp } from '~/constants/css';
import { Box, BoxProps } from '~/lib/styled';
import { useConfirm } from '~/store/organisms/Confirm';
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import router from 'next/router';
import { routing } from '~/constants/routing';

interface Props extends BoxProps {
  style?: React.CSSProperties;
}

const Wrapper = styled(Box)({
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
  borderBottom: '1px solid #aaaaaa',
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
  padding: '7px 5px',
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

const StripeForm = styled(Box)({});

const CardInput = styled.div({
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '300px',
  border: 'solid 1px #aaa',
  borderRadius: '5px',
});

const ErrorResult = styled.div({
  color: 'red',
});

const ELEMENT_OPTIONS = {
  style: {
    base: {
      fontSize: '18px',
      color: '#424770',
      letterSpacing: '0.025em',
      '::placeholder': {
        color: '#aab7c4',
      },
      textAlign: 'center',
    },
    invalid: {
      color: '#9e2146',
    },
  },
};

const logEvent = (name) => (event) => {
  console.log(`[${name}]`, event);
};

export const Confirm: React.FC<Props> = ({ style, ...props }) => {
  const {
    itemSubTotal,
    order,
    postage,
    commission,
    total,
    getPaymentTypeName,
    isOrderReady,
    sendOrderMail,
    onStripe,
  } = useConfirm();
  const [processing, setProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  // stripe
  const stripe = useStripe();
  const elements = useElements();

  // const [errorMessage, setErrorMessage] = useState(null);
  const normalSubmit = async () => {
    if (!isOrderReady()) {
      router.push(routing.checkout.error);
      return;
    }
    sendOrderMail();
  };

  const stripeSubmit = async () => {
    if (elements == null) {
      return;
    }
    if (!isOrderReady()) {
      router.push(routing.checkout.error);
      return;
    }

    const result = await onStripe(CardNumberElement, stripe, elements);
    if (result.error) {
      // stripe 決済の失敗 api_connection_error, api_error, authentication_error, card_error ...
      setProcessing(false);
      setErrorMessage(result.error.message);
    } else {
      if (result.paymentIntent.status === 'succeeded') {
        // stripe 決済成功
        sendOrderMail();
      }
    }
  };

  return (
    <Wrapper style={style} mt={props.mt} mb={props.mb}>
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
                <TotalPrice>{total}円</TotalPrice>
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
      {order.paymentType === 'card' ? (
        <StripeForm mt={30}>
          <form>
            カード番号
            <CardInput>
              <CardNumberElement
                id="cardNumber"
                onChange={logEvent('change')}
                onReady={logEvent('ready')}
                options={ELEMENT_OPTIONS}
              />
            </CardInput>
            有効期限
            <CardInput>
              <CardExpiryElement
                id="expiry"
                onChange={logEvent('change')}
                onReady={logEvent('ready')}
                options={ELEMENT_OPTIONS}
              />
            </CardInput>
            セキュリティ番号
            <CardInput>
              <CardCvcElement
                id="cvc"
                onChange={logEvent('change')}
                onReady={logEvent('ready')}
                options={ELEMENT_OPTIONS}
              />
            </CardInput>
            {errorMessage && (
              <ErrorResult>
                <div>{errorMessage}</div>
                カード番号、有効期限、セキュリティコードに間違いがないか確認してください。
              </ErrorResult>
            )}
            <Box mt={20}>
              <Button
                type="submit"
                disabled={!stripe || !elements || processing}
                onClick={async () => {
                  setProcessing(true);
                  await stripeSubmit();
                }}
              >
                注文確定
              </Button>
            </Box>
          </form>
        </StripeForm>
      ) : (
        <Box mt={20}>
          <Button
            disabled={processing}
            onClick={async () => {
              setProcessing(true);
              await normalSubmit();
            }}
          >
            注文確定
          </Button>
        </Box>
      )}
      {processing && <div>注文を処理中...</div>}
      <Box m={20}>
        ※注文確定ボタンを押すと注文が確定されます。
        商品、住所、決済方法を確認の上、注文を確定してください。
      </Box>
    </Wrapper>
  );
};
