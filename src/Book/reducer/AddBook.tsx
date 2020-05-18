import { BookAction } from "./BookReducer";
import { v4 as uuidv4 } from 'uuid';

const AddBook = (state:any, action : BookAction) => {
    return [
        {
          id: uuidv4(),
          ...action.payload
        },
        ...state
      ];
}

export default AddBook;