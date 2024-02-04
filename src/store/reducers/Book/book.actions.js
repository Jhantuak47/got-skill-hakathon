import {
  ADD_BOOKS,
  ADD_BOOK_REDUX_FORM,
  DELETE_BOOK,
  EDIT_BOOK_REDUX_FORM,
} from "./book.types";

export const addBooks = (data) => {
  return {
    type: ADD_BOOKS,
    payload: data,
  };
};
