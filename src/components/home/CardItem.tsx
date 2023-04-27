import Button from "../UI/Button";
import classes from "./CardItem.module.css";
import bookItemType from "../../type/bookType";
import { useNavigate } from "react-router-dom";

const CardItem = (props: bookItemType) => {
    const { bookId, imageUrl, title, description } = props;
    const navigation = useNavigate();

    const buyNowHandler = () => {
        navigation(`/book/${bookId}`, {
            state: {
                ...props,
            },
        });
    };
    return (
        <div className={classes["card"]}>
            <div>
                <figure className={classes["card_figure"]}>
                    <img src={imageUrl} alt="Book Info" width={200} height={200} />
                </figure>
            </div>
            <div className={classes["card_body"]}>
                <h3 className={`${classes.book_title} ${classes.wrap}`}>{title}</h3>
                <div className={`${classes.book_description} ${classes.wrap}`}>
                    Description : <span>{description}</span>
                </div>
            </div>
            <div className={classes.explore_btn}>
                <Button onClick={buyNowHandler}>Explore</Button>
            </div>
        </div>
    );
};

export default CardItem;
