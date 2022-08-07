import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Product } from "../products/productsSlice";
export interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const findItem = (items: CartItem[], name: string): CartItem | undefined => {
  return items.find((i) => i.name === name);
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      state: CartState,
      action: PayloadAction<{ name: string; price: number }>
    ) => {
      const { name, price } = action.payload;
      const item = findItem(state.items, name);

      if (item) {
        item.quantity += 1;
      } else {
        const newItem: CartItem = {
          name: name,
          price: price,
          quantity: 1,
        };

        state.items.push(newItem);
      }
    },
    incrementItemQuantity: (
      state: CartState,
      action: PayloadAction<string>
    ) => {
      const item = findItem(state.items, action.payload);

      if (item) {
        item.quantity += 1;
      }
    },
    decrementItemQuantity: (
      state: CartState,
      action: PayloadAction<string>
    ) => {
      const item = findItem(state.items, action.payload);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    removeFromCart: (state: CartState, action: PayloadAction<string>) => {
      state.items = state.items.filter((i) => i.name !== action.payload);
    },
  },
});

export const selectCartItems = (rootState: RootState) => rootState.cart.items;

export const selectCartQuantity = (rootState: RootState) => {
  return rootState.cart.items.reduce((count, item) => {
    return (count += item.quantity);
  }, 0);
};

export const selectCartTotal = (rootState: RootState) => {
  return rootState.cart.items.reduce((total, item) => {
    const price = item.price * item.quantity;
    return (total += parseFloat(price.toFixed(2)));
  }, 0);
};

export const {
  addToCart,
  incrementItemQuantity,
  decrementItemQuantity,
  removeFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
