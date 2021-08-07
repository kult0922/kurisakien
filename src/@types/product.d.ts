export interface Item {
  imagePath: string;
  id: string;
  name: string;
  price: number;
  description: string;
}

export interface CartItem extends Item {
  amount: number;
}
