import React from 'react'
import { Book } from '../model/Book';
import AddBook from './AddBook';
import ToggleFavBook from './ToggleFavBook';

export const BOOK_TOGGLE_FAV = 'BOOK_TOGGLE_FAV';
export const BOOK_ADD = 'BOOK_ADD';

export type BookAction = {
    type: 'BOOK_TOGGLE_FAV' | 'BOOK_ADD',
    payload: any
}

const BookReducer = (state : Book[] = [], action: BookAction) => {
    if(action.type === BOOK_ADD) {
        return AddBook(state, action);
    }
    if(action.type === BOOK_TOGGLE_FAV) {
        return ToggleFavBook(state, action);
    }
}

export default BookReducer;