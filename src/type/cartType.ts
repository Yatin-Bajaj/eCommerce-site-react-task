import bookItemType from "./bookType";

type CartItemType = bookItemType & {
    quantity: number;
};

export default CartItemType;
