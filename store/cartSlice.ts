import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  _id: string;
  title: string;
  price: number;
  category: string;
  media: [string];
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // For type safety
    addItem: (state, action: PayloadAction<Omit<CartItem, "quantity">>) => {
      const existingItem = state.items.find(
        (item) => item._id === action.payload._id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action: PayloadAction<{ _id: string }>) => {
      const existingItem = state.items.find(
        (item) => item._id === action.payload._id
      );
      //   @ts-ignore
      if (existingItem.quantity > 1) {
        //   @ts-ignore
        existingItem.quantity -= 1;
      } else {
        state.items = state.items.filter(
          (item) => item._id != action.payload._id
        );
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
