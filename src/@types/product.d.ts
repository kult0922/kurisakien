export interface Item {
  id: string;
  imagePaths: {
    url: string;
  }[];
  name: string;
  price: number;
  amount: string;
  description: string;
}

export interface CartItem extends Item {
  amount: number;
}
