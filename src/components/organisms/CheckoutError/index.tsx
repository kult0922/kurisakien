import React from 'react';
import { BasicLink } from '~/components/atoms/BasicLink';
import { routing } from '~/constants/routing';

export const CheckoutError: React.FC = () => {
  return (
    <>
      <h1>注文エラーが発生しました</h1>
      <div className="text-red">注文手続きは行われませんでした。</div>
      <div>以下の原因が考えられます。</div>
      <div>ブラウザのリロードなどによりお客様の住所情報が消えてしまった。</div>
      <div>通信エラーにより注文を送信できなかった。</div>
      <div>もう一度カートの中身を確認し、再度住所入力をお願いします。</div>
      <div>
        <BasicLink path={routing.root}>ホームへ戻る</BasicLink>
      </div>
      <div>
        <BasicLink path={routing.cart.root}>カートへ戻る</BasicLink>
      </div>
    </>
  );
};
