import { ShippingAddressForm } from "./ShippingAddressForm";
import ShoppingBag from "./ShoppingBag";
import classes from "./Cart.module.css";

const Cart = () => {
  return (
    <div className={classes.cart_container}>
      <div>
        <h2>Shipping Address</h2>
        <ShippingAddressForm />
      </div>
      <div className={classes.shopping_bag}>
        <h2>Shopping Bag</h2>
        <ShoppingBag />
      </div>
    </div>
  );
};
export default Cart;
