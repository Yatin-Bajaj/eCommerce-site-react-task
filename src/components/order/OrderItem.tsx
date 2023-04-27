import classes from "./Order.module.css";
import OrderItemType from "../../type/orderType";

export const OrderItem = ({
    orderId,
    date,
    status,
    orderItems,
}: OrderItemType) => {
    return (
        <div className={classes.order}>
            <div className={classes.order_status}>
                <div>
                    Order Placed: <span>{JSON.stringify(date)}</span>
                </div>
                <div>
                    Status: <span>{status}</span>
                </div>
            </div>
            {orderItems?.length > 0 &&
                orderItems.map((orderItem) => (
                    <div className={classes.order_details} key={orderItem.bookId}>
                        <figure className={classes.product_image}>
                            <img
                                src={orderItem.imageUrl}
                                alt={"Book Info"}
                                width={200}
                                height={200}
                            />
                        </figure>
                        <div className={classes.product_info}>
                            <div className={classes.product_title}>{orderItem.title}</div>
                            <div>Author: {orderItem.authors}</div>
                            <div>Book Price: {orderItem.price}</div>
                        </div>
                    </div>
                ))}
        </div>
    );
};
