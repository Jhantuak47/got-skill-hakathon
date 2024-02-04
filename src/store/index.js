import { applyMiddleware, compose, createStore } from "redux";
import rootReducers from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { addBooks } from "./reducers/Book/book.actions";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducers,
  // composeEnhancers(applyMiddleware(thunk, composeWithDevTools()))
  composeWithDevTools(applyMiddleware(thunk))
);

// const dispatch = store.dispatch;
const data = addBooks({ id: 1, name: "Harry porter" });
console.log("data", data);
store.dispatch(data);

console.log(store.getState());

export default store;
