import React from 'react';
import {Book} from '../model/Book';
import {BookContext} from '../reducer/BookContext';
import styled from 'styled-components';

type IProps = {
  book: Book;
};
const BookItem = ({book}: IProps) => {
  const {toggleFavBook} = React.useContext(BookContext);

  return (
    <BookItemContainer>
      <h3>{book.name}</h3>
      <p>{book.description}</p>
      <button
        onClick={() => {
          toggleFavBook!(book.id);
        }}>
        {book.isFav ? 'Remove from fav' : 'Add to fav'}
      </button>
    </BookItemContainer>
  );
};

export default BookItem;

const BookItemContainer = styled.div`
  background: gainsboro;
  padding: 20px;
  max-width: 500px;
  margin: 20px auto;
`;
