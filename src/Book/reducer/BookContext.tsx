import React, {useReducer, createContext, useCallback} from 'react';
import BookReducer, { BOOK_TOGGLE_FAV } from './BookReducer';
import { initialState } from './InitialState';
import { Book } from '../model/Book';

interface IContextProps {
  books: Book[];
  toggleFavBook: (id: string) => void;
}

export const BookContext = createContext<Partial<IContextProps>>({toggleFavBook: () => {}}) ;

export const BookProvider = ({children} :any) => {
    const [books, dispatch] = useReducer(BookReducer, initialState);

    const toggleFavBook = useCallback(
        id => {
            dispatch({
                type: BOOK_TOGGLE_FAV,
                payload: {id}
            })
        },
        [dispatch]
    )

    const value = {books, toggleFavBook};

    return (
        <BookContext.Provider value={value}>
            {children}
        </BookContext.Provider>
    )
}