import { createSlice } from "@reduxjs/toolkit";
import bookItemType from "../../type/bookType";

type BookState = {
    books: bookItemType[];
    selectedBook: bookItemType;
};
const BOOK_INITIAL_STATE: BookState = {
    books: [],
    selectedBook: {
        bookId: "",
        title: "",
        authors: "",
        price: 0,
        pageCount: 0,
        categories: "",
        description: "",
        imageUrl: "",
    },
};

const bookSlice = createSlice({
    name: "Books slice",
    initialState: BOOK_INITIAL_STATE,
    reducers: {
        booksFetchSucceeded(state, action) {
            const { books } = action.payload;
            console.log(books);
            state.books = books;
        },
        bookByIdFetchSucceeded(state, action) {
            const { book } = action.payload;
            console.log(book);
            state.selectedBook = book;
        },
    },
});

export default bookSlice;
export const bookReducer = bookSlice.reducer;
export const bookActions = bookSlice.actions;
