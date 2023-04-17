import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";

const Header = () => {
    const cartItems = useAppSelector((state) => state.cart.cart);
    const getTotalQuantity = () => {
        return cartItems?.reduce((prev, current) => {
            return prev + current.quantity;
        }, 0);
    };

    return (
        <nav className={classes.nav}>
            <div className={classes.logo}>
                <h3> eCommerce Site</h3>
            </div>
            <div className={classes.nav_links}>
                <Link to={"/home"}>Home |</Link>
                <Link to={"/orders"}>My Orders |</Link>
                <Link to={"/cart"}>Cart</Link>
                <span>
                    <i className="fa-solid fa-cart-shopping"></i>
                    <span>{getTotalQuantity()}</span>
                </span>
            </div>
        </nav>
    );
};

export default Header;
