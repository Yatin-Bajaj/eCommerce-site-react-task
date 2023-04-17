import { v4 as uuid } from "uuid";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { addOrder } from "../../store/asyncCreator";
import { cartActions } from "../../store/cart/cartSlice";
import classes from "./ShoppingBag.module.css";
import Button from "../UI/Button";

const PaymentInfo = () => {
    const dispatch = useAppDispatch();
    const cart = useAppSelector((state) => state.cart.cart);
    const uid = uuid();

    let totalPrice = Math.round(
        cart.reduce((sum: number, current: any) => {
            return sum + +current.price * +current.quantity;
        }, 0)
    );

    let tax = +(totalPrice * 0.05).toFixed(2);
    let shippingCharges = 100;
    let total = +(totalPrice + tax + shippingCharges);

    const checkoutHandler = () => {
        dispatch(
            addOrder({
                id: uid,
                orderId: uid,
                status: "Placed",
                date: new Date().toLocaleDateString(),
                orderItems: [...cart],
            })
        );
        dispatch(cartActions.emptyCart());
    };

    return (
        <div className={classes.paymentInfoContainer}>
            <h3>Payment Info</h3>
            <div>
                <p>Items Price</p>
                <p>{totalPrice}</p>
            </div>
            <div>
                <p>Tax</p>
                <p>{tax}</p>
            </div>
            <div>
                <p>Shipping Charges</p>
                <p>{shippingCharges}</p>
            </div>
            <div>
                <p>Total</p>
                <p>{total}</p>
            </div>

            <div>
                <Button onClick={checkoutHandler}>Checkout ✔</Button>
            </div>
        </div>
    );
};

export default PaymentInfo;
