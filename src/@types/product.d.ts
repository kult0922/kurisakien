export interface Item {
  imagePath: string;
  id: string;
  name: string;
  price: number;
  amount: string;
  description: string;
}

export interface CartItem extends Item {
  amount: number;
}
