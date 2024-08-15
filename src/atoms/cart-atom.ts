import { atom } from 'recoil';
import { IProduct } from '~/data';

export type  ICartItem = {
    id: number;
    product: IProduct;
    qty: number;
  };

// Define the cart atom
export const cartState = atom<ICartItem[]>({
  key: 'cartState', // unique ID (with respect to other atoms/selectors)
  default: [], // default value (empty cart)
});
