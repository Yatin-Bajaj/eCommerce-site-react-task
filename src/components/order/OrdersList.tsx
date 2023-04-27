import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { OrderItem } from "./OrderItem";
import { fetchOrders } from "../../store/asyncCreator";
import OrderType from "../../type/orderType";
import classes from "./Order.module.css";

const OrdersList = () => {
    const orders: OrderType[] = useAppSelector((state) => state.order.orders);
    const dispatch = useAppDispatch();

    useEffect(() => {
        console.log("orders use effect called");
        if (orders.length === 0) {
            dispatch(fetchOrders());
        }
    }, [dispatch, orders]);

    return (
        <div className={classes.orders_container}>
            {orders?.length > 0 &&
                orders.map((order) => <OrderItem {...order} key={order.orderId} />)}
        </div>
    );
};

export default OrdersList;
