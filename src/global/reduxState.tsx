import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  user: null,
  products: [] as any,
  cart: [] as any,
  notifications: [] as any,
  isNotificationVisible: false,
  totalSales: 0,
  totalOrders: 0,
  totalCustomers: 0,
  dailyConfirmations: 0,
};

const reduxState = createSlice({
  name: "reduxState",
  initialState,
  reducers: {
    loginUser: (state, { payload }: any) => {
      state.user = payload;
    },
    logOut: (state) => {
      state.user = null;
    },
    addProduct: (state: any, { payload }: any) => {
      state.products.push(payload);
    },
    addCart: (state, { payload }) => {
      const existingProduct = state.cart.find((p: any) => p.id === payload.id);
      if (existingProduct) {
        existingProduct.QTY += payload.QTY;
      } else {
        state.cart.push(payload);
      }
    },
    removeFromCart: (state, { payload }) => {
      state.cart = state.cart.filter((el: any) => el.id !== payload.id);
    },
    removeFromNotification: (state, { payload }) => {
      state.notifications = state.notifications.filter(
        (el: any) => el.id !== payload.id
      );
    },

    increaseCartQTY: (state, { payload }) => {
      const item = state.cart.find((el: any) => el.id === payload.id);
      if (item) {
        item.QTY += 1;
      }
    },
    decreaseCartQTY: (state, { payload }) => {
      const item = state.cart.find((el: any) => el.id === payload.id);
      if (item && item.QTY > 1) {
        item.QTY -= 1;
      } else if (item && item.QTY === 1) {
        state.cart = state.cart.filter((el: any) => el.id !== payload.id);
      }
    },
    clearState: (state) => {
      state.products = [];
      state.cart = [];
      state.notifications = [];
    },
    notifyAdmin: (state, { payload }) => {
      state.notifications.push({ ...payload, id: uuidv4() });
    },

    addUser: (state, { payload }) => {
      state.user = payload;
    },
    toggleNotificationVisibility: (state) => {
      state.isNotificationVisible = !state.isNotificationVisible;
    },
    setTotalSales: (state, { payload }: any) => {
      state.totalSales = payload;
    },
    setTotalOrders: (state, { payload }: any) => {
      state.totalOrders = payload;
    },
    setTotalCustomers: (state, { payload }: any) => {
      state.totalCustomers = payload;
    },
    incrementDailyConfirmations: (state) => {
      state.dailyConfirmations += 1;
    },

    resetDailyData: (state) => {
      state.dailyConfirmations = 0;
    },
  },
});

export const {
  loginUser,
  logOut,
  addProduct,
  addCart,
  removeFromCart,
  increaseCartQTY,
  decreaseCartQTY,
  clearState,
  notifyAdmin,
  removeFromNotification,
  addUser,
  toggleNotificationVisibility,
  setTotalSales,
  setTotalOrders,
  setTotalCustomers,
  incrementDailyConfirmations,
  resetDailyData,
} = reduxState.actions;

export default reduxState.reducer;
