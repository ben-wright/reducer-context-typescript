import React from 'react';
import {BookContext} from '../reducer/BookContext';
import {Book} from '../model/Book';
import BookItem from './BookItem';

const BookList = () => {
  const {books} = React.useContext(BookContext);

  const numFav = books!.filter((obj) => obj.isFav === true).length;
  return (
    <div>
      <h3>Number of favourite books: {numFav}</h3>
      {books!.map((book: Book, index: number) => {
        return <BookItem key={index} book={book} />;
      })}
    </div>
  );
};

export default BookList;
