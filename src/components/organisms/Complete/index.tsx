import React, { useEffect } from 'react';
import { BasicLink } from '~/components/atoms/BasicLink';
import { routing } from '~/constants/routing';
import { GlobalStore } from '~/store/Global';

export const Complete: React.FC = () => {
  const { clearCart } = GlobalStore.useContainer().cart;
  useEffect(() => {
    clearCart();
  }, [clearCart]);
  return (
    <>
      <h1>ご注文ありがとうございました</h1>
      <div>ご入力いただきましたメールアドレスに確認メールを送信しました。</div>
      詳しいお支払い手順につきましては再度メールを送ります。 今しばらくお待ち下さい。
      <div>
        <BasicLink path={routing.root}>ホームへ戻る</BasicLink>
      </div>
    </>
  );
};
