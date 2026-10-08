export interface CartItem {
  productid: string;
  quantity: number;
}

export interface ItemDetails extends CartItem {
  name: string;
  price: number;
  imageUrl: string;
  lineTotal: number;
}
