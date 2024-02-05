import { randId } from "../../../utils";
import { ADD_FORM_DATA, ADD_TOURNAMENT } from "./tournament.type";

export const addTournament = (data) => {
  return {
    type: ADD_TOURNAMENT,
    payload: { ...data, id: randId() },
  };
};

export const addFormData = (data) => {
  return {
    type: ADD_FORM_DATA,
    payload: data,
  };
};
