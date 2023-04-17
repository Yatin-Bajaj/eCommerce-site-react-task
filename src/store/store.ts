import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import { rootSaga } from "./asyncCreator";
import { cartReducer } from "./cart/cartSlice";
import { bookReducer } from "./book/bookSlice";
import { orderReducer } from "./order/orderSlice";
import { userReducer } from "./user/userSlice";

import storage from "redux-persist/lib/storage";

import { persistStore, persistReducer } from "redux-persist";

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["cart", "user"],
};

const cartPersistedReducer = persistReducer(persistConfig, cartReducer);
const userPersistedReducer = persistReducer(persistConfig, userReducer);

const store = configureStore({
    reducer: {
        books: bookReducer,
        cart: cartPersistedReducer,
        order: orderReducer,
        user: userPersistedReducer,
    },
    middleware: [logger, sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
