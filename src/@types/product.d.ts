interface item {
  imagePath: string;
  id: string;
  name: string;
  price: string;
  discription: string;
}
interface cartData {
  id: string;
  amount: number;
}

export { item, cartData };
