import { createSlice, configureStore } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0, toggle: false },
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    toggle(state) {
      state.toggle = !state.toggle;
    },
  },
});

const authSlice = createSlice({
  name: "Auth",
  initialState: { logIn: false },
  reducers: {
    logIn(state) {
      state.logIn = !state.logIn;
    },
  },
});

export const AuthActions = authSlice.actions;
export const CounterActions = counterSlice.actions;

const CounterRedux = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export default CounterRedux;
