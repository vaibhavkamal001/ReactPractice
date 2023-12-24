import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./Ui-slice.js";
import cartSlice from "./cart-slice.js";

export default configureStore({
  reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer },
});
