import bookItemType from "./bookType";

type OrderType = {
    orderId: string;
    status: string;
    date: string;
    id?: string;
    orderItems: bookItemType[];
};

export type newOrderType = bookItemType & {
    orderId: string;
    status: string;
    date: Date;
    id?: string;
};

export default OrderType;
