import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { cartActions } from "../../store/cart/cartSlice";
import ShoppingBagItem from "./ShoppingBagItem";
import PaymentInfo from "./PaymentInfo";
import classes from "./ShoppingBag.module.css";

const ShoppingBag = () => {
    const dispatch = useAppDispatch();
    const cart = useAppSelector((state) => state.cart.cart);

    const increaseItemHandler = (id: string) => {
        dispatch(cartActions.incrementQuantity(id));
    };
    const decreaseItemHandler = (id: string) => {
        dispatch(cartActions.decrementQuantity(id));
    };

    const removeItemHandler = (id: string) => {
        dispatch(cartActions.removeItemFromCart(id));
    };

    return (
        <>
            <div className={classes.checkoutDetailsContainer}>
                {cart.length > 0 ? (
                    cart.map((item) => {
                        return (
                            <ShoppingBagItem
                                increaseItemHandler={increaseItemHandler}
                                removeItemHandler={removeItemHandler}
                                decreaseItemHandler={decreaseItemHandler}
                                {...item}
                                key={item.bookId}
                            />
                        );
                    })
                ) : (
                    <p>Cart Empty - Please select some items :)</p>
                )}
            </div>
            {cart.length > 0 && <PaymentInfo />}
        </>
    );
};
export default ShoppingBag;
