import { ADD_FORM_DATA, ADD_TOURNAMENT } from "./tournament.type";

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  errMsg: "",
  formData: {},
};

function tournamentReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TOURNAMENT:
      return {
        ...state,
        data: [...state.data, action.payload],
      };

    case ADD_FORM_DATA:
      return {
        ...state,
        formData: {
          ...state.formData,
          ...action.payload,
        },
      };

    default:
      return state;
  }
}

export default tournamentReducer;
