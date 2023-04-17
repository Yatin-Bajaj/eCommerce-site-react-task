import { createSlice } from "@reduxjs/toolkit";
import bookItemType from "../../type/bookType";

export type CartItem = bookItemType & {
    quantity: number;
};

type CART = {
    cart: CartItem[];
};

const CART_INITIAL_STATE: CART = {
    cart: [],
};

const cartSlice = createSlice({
    name: "Cart Slice",
    initialState: CART_INITIAL_STATE,
    reducers: {
        addToCart(state, action: { type: string; payload: bookItemType }) {
            const itemInCart = state.cart.find(
                (item) => item.bookId === action.payload.bookId
            );
            const bookDetails = action.payload;
            if (itemInCart) {
                itemInCart.quantity += 1;
            } else {
                state.cart.push({
                    ...bookDetails,
                    quantity: 1,
                });
            }
        },
        removeItemFromCart(state, action: { type: string; payload: string }) {
            const id = action.payload;
            const removeItem = state.cart.filter((item) => item.bookId !== id);
            state.cart = removeItem;
        },
        emptyCart(state) {
            state.cart = [];
        },
        incrementQuantity: (state, action) => {
            const id = action.payload;
            const item = state.cart.find((item) => item.bookId === id);
            if (item) {
                item.quantity++;
            }
        },
        decrementQuantity: (state, action) => {
            const id = action.payload;
            const item = state.cart.find((item) => item.bookId === id);
            if (!item) {
                return state;
            } else if (item?.quantity === 1) {
                const removeItem = state.cart.filter((item) => item.bookId !== id);
                state.cart = removeItem;
            } else {
                item.quantity--;
            }
        },
    },
});

export default cartSlice;
export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
