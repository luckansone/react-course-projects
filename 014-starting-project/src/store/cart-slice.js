import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalAmount: 0,
  items: [],
  change: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    replaceCart(state, action) {
      state.totalAmount = action.payload.totalAmount;
      state.items = action.payload.items;
    },
    addItem(state, action) {
      state.change = true;
      state.totalAmount += action.payload.price;
      const existingProductIdx = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      const existingProduct = state.items[existingProductIdx];
      if (existingProduct) {
        existingProduct.totalPrice += action.payload.price;
        existingProduct.quantity++;
        state.items[existingProductIdx] = existingProduct;
      } else {
        action.payload.totalPrice = action.payload.price;
        action.payload.quantity = 1;
        state.items.push(action.payload);
      }
    },
    removeItem(state, action) {
      if (state.totalAmount === 0) {
        return;
      }

      state.change = true;
      const existingProductIdx = state.items.findIndex(
        (item) => item.id === action.payload
      );
      const existingProduct = state.items[existingProductIdx];
      if (existingProduct) {
        state.totalAmount -= existingProduct.price;
        if (existingProduct.quantity === 1) {
          state.items = state.items.filter(
            (item) => item.id !== action.payload
          );
        } else {
          existingProduct.totalPrice -= existingProduct.price;
          existingProduct.quantity--;
          state.items[existingProductIdx] = existingProduct;
        }
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
