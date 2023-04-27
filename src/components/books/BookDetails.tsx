import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchBookById } from "../../store/asyncCreator";
import { cartActions } from "../../store/cart/cartSlice";
import Button from "../UI/Button";
import classes from "./BookDetails.module.css";

const BookDetails = () => {
    const { id } = useParams();
    const location = useLocation();
    const bookDetailsState = useAppSelector((state) => state.books.selectedBook);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const bookDetails = location.state || bookDetailsState;
    const {
        imageUrl = "",
        title = "",
        description = "",
        price = 0,
        authors = "",
        pageCount = 0,
        categories = "",
    } = bookDetails;

    useEffect(() => {
        if (!location.state && typeof id === "string") {
            dispatch(fetchBookById(id));
        }
    }, [dispatch, id, location]);

    const buyNowHandler = () => {
        dispatch(cartActions.addToCart(bookDetails));
        navigate("/cart", {
            replace: true,
        });
    };

    const cartHandler = () => {
        dispatch(cartActions.addToCart(bookDetails));
        toast(`${title} Added to Cart`);
    };

    return (
        <>
            <div className={classes.book_detail_container}>
                <figure className={classes.book_detail_img}>
                    <img src={imageUrl} alt={`Book - ${title}`} />
                </figure>
                <div className={`${classes.book_detail_info} ${classes.space}`}>
                    <div className={classes.book_detail_title}>{title}</div>
                    <div className={`${classes.space}`}>Price: {price}</div>
                    <div className={`${classes.space}`}>Author: {authors}</div>
                    <div className={`${classes.space}`}>Page Count: {pageCount}</div>
                    <div className={`${classes.space}`}>Categories: {categories}</div>
                    <div className={`${classes.space} ${classes.cart_btn}`}>
                        <Button onClick={cartHandler}>Add to cart</Button>
                        <Button onClick={buyNowHandler}>Buy Now</Button>
                    </div>
                    <div className={classes["book_detail_desc"]}>
                        Description {description}
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default BookDetails;
