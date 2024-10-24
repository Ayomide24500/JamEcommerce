import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  user: null,
  orders: [],
  products: [] as any,
  cart: [] as any,
  notifications: [] as any,
  isNotificationVisible: false,
  totalSales: 0,
  totalOrders: 0,
  totalCustomers: 0,
  dailyConfirmations: 0,
  history: [],
  lastResetTime: Date.now(),
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
    addHistory: (state, { payload }) => {
      state.history.push(payload);
    },
    removeFromCart: (
      state,
      action: PayloadAction<{ id?: string; cart?: any }>
    ) => {
      if (action.payload.cart) {
        state.cart = [];
      } else if (action.payload.id) {
        state.cart = state.cart.filter(
          (item: any) => item.id !== action.payload.id
        );
      }
    },

    removeFromProduct: (state, { payload }) => {
      console.log(state.products);

      state.products = state.products.filter(
        (el: any) => el._id !== payload.id
      );
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
      state.user = null;
      (state.totalSales = 0),
        (state.totalCustomers = 0),
        (state.dailyConfirmations = 0),
        (state.totalOrders = 0),
        (state.cart = []);
      state.notifications = [];
      state.history = [];
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

    // resetDailyData: (state) => {
    //   state.dailyConfirmations = 0;
    // },
    resetDailyData: (state) => {
      const currentTime = Date.now();
      const timeElapsed = currentTime - state.lastResetTime;

      if (timeElapsed >= 24 * 60 * 60 * 1000) {
        state.totalSales = 0;
        state.totalOrders = 0;
        state.totalCustomers = 0;
        state.dailyConfirmations = 0;
        state.lastResetTime = currentTime;
      }
    },
  },
});

export const {
  loginUser,
  addHistory,
  logOut,
  addProduct,
  removeFromProduct,
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
