export interface Item {
  imagePath: string;
  id: string;
  name: string;
  price: number;
  discription: string;
}

export interface CartItem extends Item {
  amount: number;
}
