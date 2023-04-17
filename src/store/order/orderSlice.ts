import { createSlice } from "@reduxjs/toolkit";
import orderType from "../../type/orderType";

type OrderInitialStateType = {
    orders: orderType[];
};

const ORDER_INITIAL_STATE: OrderInitialStateType = {
    orders: [],
};

const orderSlice = createSlice({
    name: "Order Slice",
    initialState: ORDER_INITIAL_STATE,
    reducers: {
        ordersFetchSucceeded(state: OrderInitialStateType, action) {
            const orders = action.payload;
            state.orders = orders;
        },
    },
});

export default orderSlice;
export const orderReducer = orderSlice.reducer;
export const orderActions = orderSlice.actions;
