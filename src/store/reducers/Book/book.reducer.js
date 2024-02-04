import {
  ADD_BOOKS,
  ADD_BOOK_REDUX_FORM,
  DELETE_BOOK,
  EDIT_BOOK_REDUX_FORM,
} from "./book.types";

const initialState = {
  books: [],
};

function bookReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOKS:
      return {
        ...state,
        books: [...state.books, action.payload],
      };

    case DELETE_BOOK:
    case EDIT_BOOK_REDUX_FORM:
      return {
        ...state,
        books: [...action.payload?.(state.books)],
      };
    case ADD_BOOK_REDUX_FORM:
      return {
        ...state,
        books: [...state.books, { ...action.payload }],
      };
    default:
      return state;
  }
}

export default bookReducer;
