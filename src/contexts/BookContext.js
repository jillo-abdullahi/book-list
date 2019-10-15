import React, { createContext, useState } from 'react';
import uuid from 'uuid/v1';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [ books, setBooks ] = useState([
        {title: "Name of the Wind", author: "Patrick Rothfuss", id: 1},
        {title: "Gone with the Wind", author: "Sheldon Cooper", id: 2},
        {title: "Robot Uprising", author: "Howard Wolowitz", id: 3},
        {title: "Spicy Indian Meatballs", author: "Kunal Nayyar", id: 4},
        {title: "The Actress Who Was a Waitress", author: "Penny Cuoco", id: 5}
    ]);

    const addBook = (title, author) => {
        setBooks([...books, {title, author, id: uuid()}])
    }

    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id));
    }
    return (
        <BookContext.Provider value={{books, addBook, removeBook }}>
            { props.children }
        </BookContext.Provider>
    );
}

export default BookContextProvider;
