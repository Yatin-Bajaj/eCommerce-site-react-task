import CartItemType from "../../type/cartType";
import classes from "./ShoppingBag.module.css";
import Button from "../UI/Button";
type ShoppingBagItemPropType = CartItemType & {
    increaseItemHandler: (id: string) => void;
    decreaseItemHandler: (id: string) => void;
    removeItemHandler: (id: string) => void;
};

const ShoppingBagItem = ({
    price,
    imageUrl,
    title,
    quantity,
    bookId,
    increaseItemHandler,
    removeItemHandler,
    decreaseItemHandler,
}: ShoppingBagItemPropType) => {
    return (
        <div className={classes.shopping_bag}>
            <div className={classes.item_image}>
                <img src={imageUrl} alt="" />
            </div>
            <div className={classes.item_details}>
                <p className={classes.item_title}>{title}</p>
                <p>Price: {price}</p>
                <p>Quantity: {quantity}</p>
                <p>Total Price: {price * quantity}</p>
                <div>
                    <Button
                        onClick={() => {
                            removeItemHandler(bookId);
                        }}
                        className={classes.item_quantity_btn}
                    >
                        🚮
                    </Button>

                    <Button
                        onClick={() => {
                            increaseItemHandler(bookId);
                        }}
                        className={classes.item_quantity_btn}
                    >
                        ➕
                    </Button>
                    <Button
                        onClick={() => {
                            decreaseItemHandler(bookId);
                        }}
                        className={classes.item_quantity_btn}
                    >
                        ➖
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ShoppingBagItem;
