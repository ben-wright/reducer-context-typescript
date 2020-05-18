import { BookAction } from "./BookReducer";
import { Book } from "../model/Book";

const ToggleFavBook = (state: Book[], action: BookAction) => {
    return state.map((book: Book) => {
        if (book.id === action.payload.id) {
          return { ...book, isFav: !book.isFav };
        }
        return book;
      });
}

export default ToggleFavBook;