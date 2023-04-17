import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { fetchBooks } from "../../store/asyncCreator";
import CardItem from "./CardItem";
import bookInterface from "../../type/bookType";
import classes from "./Home.module.css";

const Home = () => {
    const books: bookInterface[] = useAppSelector((state) => state.books.books);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (books.length === 0) {
            dispatch(fetchBooks());
        }
    }, [dispatch, books]);

    return (
        <div className={classes["container"]}>
            {books.length > 0 &&
                books.map((book) => {
                    return (
                        <CardItem
                            bookId={book.bookId}
                            title={book.title}
                            description={book.description}
                            price={book.price}
                            imageUrl={book.imageUrl}
                            pageCount={book.pageCount}
                            categories={book.categories}
                            authors={book.authors}
                            key={book.bookId}
                        />
                    );
                })}
        </div>
    );
};

export default Home;
