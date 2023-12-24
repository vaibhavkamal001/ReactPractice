import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: { item: [], totalQantity: 0, changed: false },
  reducers: {
    replaceCart(state, action) {
      state.totalQantity = action.payload.totalQantity;
      state.item = action.payload.item;
    },
    addItem(state, action) {
      state.totalQantity++;
      state.changed = true;
      const newItem = action.payload;
      const existingItem = state.item.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.item.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + existingItem.price;
      }
    },
    removeItem(state, action) {
      state.totalQantity--;
      state.changed = true;
      const removeItem = action.payload;
      const exisitingItem = state.item.find(
        (item) => item.id === removeItem.id
      );
      if (exisitingItem.quantity === 1) {
        state.item = state.item.filter((item) => item.id !== removeItem.id);
      } else {
        exisitingItem.quantity--;
        exisitingItem.totalPrice =
          exisitingItem.totalPrice - exisitingItem.price;
      }
      state.item.filter((ele) => ele.id !== action.id);
    },
  },
});

export const cartAction = cartSlice.actions;
export default cartSlice;
