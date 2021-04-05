import { Item } from '../@types/product';

// 商品のリスト
// {id, 画像のパス, 商品名, 値段, 説明文} のリスト
const itemList: Item[] = [
  {
    id: 'a01',
    imagePath: 'path1',
    name: '普通煎茶',
    price: '1000',
    discription: '普段使いのお茶です',
  },
  {
    id: 'a02',
    imagePath: 'path2',
    name: '高級煎茶',
    price: '2000',
    discription: 'ちょっと贅沢なお茶です',
  },
  {
    id: 'a03',
    imagePath: 'path3 ',
    name: '春野の紅茶',
    price: '500',
    discription: '国産のマイルドな紅茶です',
  },
];

// id をキーとした商品データのハッシュ
// id -> index の変換を行う
const id2index: { [key: string]: number } = {};
itemList.forEach(function (item, index) {
  id2index[item.id] = index;
});

export { itemList, id2index };
