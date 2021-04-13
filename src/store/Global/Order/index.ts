import { useState } from 'react';
import { createContainer } from 'unstated-next';
import { CartData } from '../../../@types/product';
import { itemList } from '../../../constants/store';

const useOrder = () => {
  // カートの情報を保管する. {id, amount}のリスト
  const [cartList, setCart] = useState<CartData[]>([]);
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

    // const itemIndex = id2index[id];
    // 絶対直す
    const item = itemList.find((item) => item.id === id);
    const itemPrice = Number(itemCount) * Number(item?.price);
    setTotal(total + itemPrice);
    // アイテムの初期化
    setItemCount('1');
  };

  const calcTotal = () => {
    let total = 0;
    cartList.forEach((item) => {
      // const itemIndex = id2index[item.id];
      // FIXME: ぜったいなおす
      const hoge = itemList.find((f) => f.id === item.id);
      const itemPrice = item.amount * Number(hoge?.price);
      total += itemPrice;
    });
    setTotal(total);
  };

  const onChangeItemCount = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setItemCount(e.target.value);
  };

  return { cartList, total, addItem, calcTotal, onChangeItemCount };
};

export const OrderContainer = createContainer(useOrder);
