import { ADD_MATCH, ADD_MATCH_FORM_DATA } from "./match.action.type";

const initialState = {
  data: [],
  isLoading: false,
  isErr: false,
  errMsg: "",
  formData: {},
};

const matchReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MATCH_FORM_DATA:
      return {
        ...state,
        data: [...state.data, action.payload],
      };

    case ADD_MATCH:
      return {
        ...state,
        formData: {
          ...state.formData,
          ...action.payload,
        },
      };

    default:
      return state;
      break;
  }
};

export default matchReducer;
