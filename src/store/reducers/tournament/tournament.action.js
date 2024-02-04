import {
  ADD_FORM_DATA,
  ADD_MATCH,
  ADD_MATCH_FORM_DATA,
  ADD_TOURNAMENT,
} from "./tournament.type";

export const addTournament = (data) => {
  return {
    type: ADD_TOURNAMENT,
    payload: data,
  };
};

export const addTournamentMatch = (data) => {
  return {
    type: ADD_MATCH,
    payload: data,
  };
};

export const addFormData = (data) => {
  return {
    type: ADD_FORM_DATA,
    payload: data,
  };
};

export const addMatchFormData = (data) => {
  return {
    type: ADD_MATCH_FORM_DATA,
    payload: data,
  };
};
