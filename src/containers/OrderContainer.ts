import { useState } from 'react';
import { createContainer } from 'unstated-next';
import { itemList, id2index } from '~/data/ItemData';
import { cartData } from '~/@types/product';

const useOrderContainer = () => {
  // カートの情報を保管する. {id, amount}のリスト
  const [cartList, setCart] = useState<cartData[]>([]);
  // 商品の個数を一時的に保存するための変数
  const [itemCount, setItemCount] = useState<string>('1');
  // 合計金額
  const [total, setTotal] = useState(0);

  const addItem = (id: string) => {
    // カート内に既に同じidのアイテムがあるかチェック
    const existCheck = cartList.find((item) => item.id === id);
    // カートに存在しなければ普通に追加する
    if (existCheck === undefined) {
      setCart([...cartList, { id: id, amount: Number(itemCount) }]);
    } else {
      // カートに存在すれば個数を増やす
      setCart(
        cartList.map((item) => {
          return item.id === id
            ? {
                ...item,
                amount: item.amount + Number(itemCount),
              }
            : item;
        }),
      );
    }

    const itemIndex = id2index[id];
    const itemPrice = Number(itemCount) * Number(itemList[itemIndex].price);
    setTotal(total + itemPrice);
    // アイテムの初期化
    setItemCount('1');
  };

  const calcTotal = () => {
    let total = 0;
    cartList.forEach((item) => {
      const itemIndex = id2index[item.id];
      const itemPrice = item.amount * Number(itemList[itemIndex].price);
      total += itemPrice;
    });
    setTotal(total);
  };

  const ChangeItemCount = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setItemCount(e.target.value);
  };

  return { cartList, total, addItem, calcTotal, ChangeItemCount };
};

export const OrderContainer = createContainer(useOrderContainer);
