import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
}

// TODO: Utwórz stan Cart : przechowujący przedmioty dodane do koszyka
// Stwórz nowy interface dla przedmiotów { name, price, quantity }
// 1. Dodaj selector , którzy pobierze wszystkie przedmioty
// 2. Dodaj selector , który wyświetli liste wszystkich przedmiotów
// 3. Dodaj akcję : addToCart
// =====
// 4. Dodaj akcję : removeFromCart
// 5. Dodaj akcję incrementItemQuantity
// 6. Dodaj akcję decrementItemQuantity

export interface ProductsState {
  items: Product[];
}

const initialState: ProductsState = {
  items: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    initProducts: (state: ProductsState) => {
      state.items = [
        {
          id: "1",
          name: "Call of Duty",
          description: "First Person Shooter",
          price: 99.99,
        },
        {
          id: "2",
          name: "FIFA 2022",
          description: "Football game",
          price: 129.99,
        },
        {
          id: "3",
          name: "Coutner Strike",
          description: "First Person Shooter",
          price: 59.99,
        },
        {
          id: "4",
          name: "Witcher",
          description: "First Person Shooter",
          price: 199.99,
        },
      ];
    },
  },
});

export const selectProducts = (state: RootState) => state.products.items;

export const { initProducts } = productsSlice.actions;

export default productsSlice.reducer;
