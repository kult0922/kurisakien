import React, { useState } from 'react';
import { CartTable } from '~/components/molecules/CartTable';
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
import { Table, TableBody, TableCell, TableHeader, TableRow } from '~/components/ui/table';
import { Button } from '~/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader } from '~/components/ui/card';

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

export const Confirm: React.FC = () => {
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
    <>
      <h1 className="text-center">注文確認</h1>
      <CartTable editable={false} showTotal={false} />

      <div>
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
      </div>

      <div>
        <h3 className="text-center mt-5">お客様情報</h3>
      </div>
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
        <div className="mt-10 flex justify-center">
          <form>
            <Card className="w-80">
              <CardHeader>
                <CardDescription>クレジットカード情報入力</CardDescription>
                <div className="flex justify-end">
                  <img width="30" src="/image/card/visa.png"></img>
                  <img width="30" src="/image/card/jcb.png"></img>
                  <img width="30" src="/image/card/master.png"></img>
                  <img width="30" src="/image/card/amex.png"></img>
                </div>
              </CardHeader>
              <CardContent>
                カード番号
                <div className="border w-72">
                  <CardNumberElement
                    id="cardNumber"
                    onChange={logEvent('change')}
                    onReady={logEvent('ready')}
                    options={ELEMENT_OPTIONS}
                  />
                </div>
                有効期限
                <div className="border w-32">
                  <CardExpiryElement
                    id="expiry"
                    onChange={logEvent('change')}
                    onReady={logEvent('ready')}
                    options={ELEMENT_OPTIONS}
                  />
                </div>
                セキュリティ番号
                <div className="border w-60">
                  <CardCvcElement
                    id="cvc"
                    onChange={logEvent('change')}
                    onReady={logEvent('ready')}
                    options={ELEMENT_OPTIONS}
                  />
                </div>
                {errorMessage && (
                  <div className="text-red">
                    <div>{errorMessage}</div>
                    カード番号、有効期限、セキュリティコードに間違いがないか確認してください。
                  </div>
                )}
              </CardContent>
            </Card>
            <div className="flex justify-end mt-3">
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
            </div>
          </form>
        </div>
      ) : (
        <div className="flex justify-center mt-4">
          <Button
            disabled={processing}
            onClick={async () => {
              setProcessing(true);
              await normalSubmit();
            }}
          >
            注文確定
          </Button>
        </div>
      )}
      {processing && <div>注文を処理中...</div>}
      <div className="flex justify-center mt-6">
        ※注文確定ボタンを押すと注文が確定されます。
        商品、住所、決済方法を確認の上、注文を確定してください。
      </div>
    </>
  );
};
