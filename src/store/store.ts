import { create } from 'zustand';

export interface CartItem {
  clothes_id: string;
  clothes_name: string;
  clothes_color: string;
  clothes_size: string;
  clothes_quantity: number;
  clothes_price: number;
  clothes_image: string;
}

interface CartStore {
  cart: CartItem[];
  setNewCart: (newCart: CartItem[]) => void;
  addNewCartItem: (newCart: CartItem) => void;
  changeQuantity: (cartItemId: string, quantity: number) => void;
  removeCartProduct: (id: string) => void;
}

export const useCartStore = create<CartStore>((set) => ({
  //Initializing my Cart with the local storage if there is, if not empty []
  cart: JSON.parse(window.localStorage.getItem('cart')!) || [],

  setNewCart: (newCart) => {
    set(() => {
      window.localStorage.setItem('cart', JSON.stringify(newCart));
      return { cart: newCart };
    });
  },

  addNewCartItem: (newCart) => {
    set((state) => {
      //Check if is repeated
      if (
        state.cart.some((product) => product.clothes_id === newCart.clothes_id)
      ) {
        return {};
      }

      const newState = [...state.cart, newCart];
      window.localStorage.setItem('cart', JSON.stringify(newState));
      return { cart: newState };
    });
  },

  changeQuantity: (cartItemId, quantity) => {
    set((state) => {
      const cartToTest = [...state.cart];
      //Find product by ID and change its quantity.
      cartToTest.forEach((cartItem) => {
        if (cartItem.clothes_id === cartItemId) {
          cartItem.clothes_quantity = quantity;
          return;
        }
      });

      window.localStorage.setItem('cart', JSON.stringify(cartToTest));

      return { cart: cartToTest };
    });
  },

  removeCartProduct: (id) => {
    set((state) => {
      const newState = state.cart.filter(
        (element) => id !== element.clothes_id
      );
      window.localStorage.setItem('cart', JSON.stringify(newState));
      return { cart: newState };
    });
  },
}));
