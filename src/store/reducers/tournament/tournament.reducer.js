import {
  ADD_FORM_DATA,
  ADD_MATCH,
  ADD_MATCH_FORM_DATA,
  ADD_TOURNAMENT,
} from "./tournament.type";

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  errMsg: "",
  formData: {},
  matches: {
    data: [],
    formData: {},
  },
};

function tournamentReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TOURNAMENT:
      return {
        ...state,
        data: [...state.data, action.payload],
      };

    case ADD_MATCH_FORM_DATA:
      let matches = {
        ...state.matches,
      };

      matches.formData = {
        ...matches.formData,
        ...action.payload,
      };

      return {
        ...state,
        matches,
      };

    case ADD_FORM_DATA:
      return {
        ...state,
        formData: {
          ...state.formData,
          ...action.payload,
        },
      };

    case ADD_MATCH:
      return {
        ...state,
        matches: {
          ...state.matches,
          data: [...state.matches.data, action.payload],
        },
      };
    default:
      return state;
  }
}

export default tournamentReducer;
