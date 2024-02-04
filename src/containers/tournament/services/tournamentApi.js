import { addTournament } from "../../../store/reducers/tournament/tournament.action";

export const addNewTournament = (data) => {
  // api integration to backend
  return addTournament(data);
};
