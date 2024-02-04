import { combineReducers } from "redux";
import bookReducer from "./Book/book.reducer";
import tournamentReducer from "./tournament/tournament.reducer";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  book: bookReducer,
  tournament: tournamentReducer,
  form: formReducer,
});

export default rootReducer;
