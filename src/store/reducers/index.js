import { combineReducers } from "redux";
import tournamentReducer from "./tournament/tournament.reducer";
import { reducer as formReducer } from "redux-form";
import matchReducer from "./match/match.reducer";

const rootReducer = combineReducers({
  tournament: tournamentReducer,
  match: matchReducer,
  form: formReducer,
});

export default rootReducer;
