import OrderType from "../type/orderType";

export const getBooks = () => {
    return fetch(`http://localhost:3500/books`)
        .then((response) => response.json())
        .then((books) => {
            return books.map((book: any) => {
                return {
                    bookId: book.id,
                    title: book.volumeInfo.title,
                    authors: book.volumeInfo.authors.join(","),
                    price: book.saleInfo.retailPrice.amount,
                    pageCount: book.volumeInfo.pageCount,
                    categories: book.volumeInfo.categories.join(","),
                    description: book.volumeInfo.description,
                    imageUrl: book.volumeInfo.imageLinks.smallThumbnail,
                };
            });
        });
};

export const getBookById = (id: string) => {
    return fetch(`http://localhost:3500/books/${id}`)
        .then((response) => response.json())
        .then((book) => {
            return {
                id: book.id,
                title: book.volumeInfo.title,
                authors: book.volumeInfo.authors.join(","),
                price: book.saleInfo.retailPrice.amount,
                pageCount: book.volumeInfo.pageCount,
                categories: book.volumeInfo.categories.join(","),
                description: book.volumeInfo.description,
                imageUrl: book.volumeInfo.imageLinks.smallThumbnail,
            };
        });
};

export const getOrders = (): Promise<OrderType[]> => {
    return fetch(`http://localhost:3500/orders`)
        .then((response) => response.json())
        .then((data) => data);
};

export const createOrder = (order: OrderType) => {
    return fetch(`http://localhost:3500/orders`, {
        method: "POST",
        body: JSON.stringify(order),
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            return data;
        })
        .catch((err) => console.log(err));
};
