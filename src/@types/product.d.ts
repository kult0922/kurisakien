export interface Item {
  imagePath: string;
  id: string;
  name: string;
  price: number;
  discription: string;
}

export interface CartData extends Item {
  amount: number;
}
