import { randId } from "../../../utils";
import { ADD_MATCH, ADD_MATCH_FORM_DATA } from "./match.action.type";

export const addMatchFormData = (data) => {
  return {
    type: ADD_MATCH_FORM_DATA,
    payload: data,
  };
};

export const addTournamentMatch = (data) => {
  return {
    type: ADD_MATCH,
    payload: { ...data, id: randId() },
  };
};
