import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";

const url: string = "http://localhost:1200";

export const fetchOrders = () => async (dispatch: Dispatch) => {
  try {
    const response = await axios.get(`${url}/order`);
    dispatch({
      type: "FETCH_ORDERS_SUCCESS",
      payload: response.data.orders,
    });
  } catch (error) {
    dispatch({
      type: "FETCH_ORDERS_FAILURE",
      payload: error.message,
    });
  }
};
