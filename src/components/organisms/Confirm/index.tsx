import styled from '@emotion/styled';
import React, { useState } from 'react';
import { CartTable } from '~/components/molecules/CartTable';
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
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from '~/components/ui/table';
import { Button } from '~/components/ui/button';

interface Props extends BoxProps {
  style?: React.CSSProperties;
}

const Wrapper = styled(Box)({
  textAlign: 'center',
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
        <Table className="w-72 mr-auto ml-auto">
          <TableBody>
            <TableRow>
              <TableCell>商品小計 </TableCell>
              <TableCell>{itemSubTotal} 円</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>送料</TableCell>
              <TableCell>{postage}円</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>手数料</TableCell>
              <TableCell>{commission}円</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>請求合計</TableCell>
              <TableCell className="text-xl">{total}円</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>

      <Box mt={50} mb={5}>
        <h3>お客様情報</h3>
      </Box>
      <Table className="w-80 mr-auto ml-auto">
        <TableBody>
          <TableRow>
            <TableHeader>郵便番号</TableHeader>

            <TableCell>{order.postalCode}</TableCell>
          </TableRow>

          <TableRow>
            <TableHeader>住所</TableHeader>
            <TableCell>{order.address}</TableCell>
          </TableRow>

          <TableRow>
            <TableHeader>お名前</TableHeader>
            <TableCell>
              {order.lastName} {order.firstName}
            </TableCell>
          </TableRow>

          <TableRow>
            <TableHeader>メール</TableHeader>
            <TableCell>{order.email}</TableCell>
          </TableRow>

          <TableRow>
            <TableHeader>電話番号</TableHeader>
            <TableCell>{order.phone}</TableCell>
          </TableRow>

          <TableRow>
            <TableHeader>支払い方法</TableHeader>
            <TableCell>{getPaymentTypeName(order.paymentType)}</TableCell>
          </TableRow>
        </TableBody>
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
