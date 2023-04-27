import { getBooks, getBookById, getOrders, createOrder } from "./api";
import { put, takeEvery } from "redux-saga/effects";
import { bookActions } from "./book/bookSlice";
import { orderActions } from "./order/orderSlice";
import { Action } from "redux";
import bookItemType from "../type/bookType";
import OrderType from "../type/orderType";

type GetBookBYId = Action & {
  payload: string;
};

export function* getBooksAction() {
  const books: bookItemType[] = yield getBooks();
  yield put(bookActions.booksFetchSucceeded({ books }));
}

export function* getBookByIdAction(action: GetBookBYId) {
  const id = action.payload;
  const book: bookItemType = yield getBookById(id);
  yield put({ type: bookActions.bookByIdFetchSucceeded, payload: { book } });
}

export function* getOrdersAction() {
  const orders: OrderType[] = yield getOrders();
  yield put(orderActions.ordersFetchSucceeded(orders));
}

export function* createOrdersAction({
  payload,
}: {
  type: "ORDER_POST_REQUEST";
  payload: OrderType;
}) {
  const order = payload;
  yield createOrder(order);
  yield put({ type: "ORDERS_FETCH_REQUESTED" });
}

export function* rootSaga() {
  yield takeEvery("BOOKS_FETCH_REQUESTED", getBooksAction);
  yield takeEvery("BOOK_BY_ID_FETCH_REQUESTED", getBookByIdAction);
  yield takeEvery("ORDERS_FETCH_REQUESTED", getOrdersAction);
  yield takeEvery("ORDER_POST_REQUESTED", createOrdersAction);
}

export const fetchBooks = () => ({ type: "BOOKS_FETCH_REQUESTED" });

export const fetchBookById = (id: string) => ({
  type: "BOOK_BY_ID_FETCH_REQUESTED",
  payload: id,
});

export const fetchOrders = () => ({
  type: "ORDERS_FETCH_REQUESTED",
});

export const addOrder = (order: OrderType) => ({
  type: "ORDER_POST_REQUESTED",
  payload: order,
});
