import React from "react";
import { generateAddMatchForm } from "../../containers/tournament/utills/content";
import { connect } from "react-redux";
import {
  addMatchFormData,
  addTournamentMatch,
} from "../../store/reducers/match/match.action";

const TournamentCard = ({
  tournament,
  setDialogBox,
  matchCount,
  addMatchFormData,
  addTournamentMatch,
}) => {
  const handleOnChange = (label, data) => {
    addMatchFormData({ [label]: data });
  };

  const onSaveFormData = ({ match: { formData } }) => {
    addTournamentMatch({
      tournamentId: tournament.id,
      ...formData,
    });
  };

  return (
    <div className="tournament-card px-4 py-2 border-2 border-green-200 w-80 rounded-lg shadow-md hover:scale-105">
      <div className="card-heading flex justify-between text-center items-center mb-2">
        <h2 className="font-bold">{tournament.name}</h2>
        <div
          onClick={() =>
            setDialogBox({
              showDialog: true,
              showContent: () => generateAddMatchForm({ handleOnChange }),
              onSaveFormData,
            })
          }
          className="text-white font-semibold rounded-lg hover:cursor-pointer text-xs px-2 py-2 bg-green-500 hover:bg-green-400"
        >
          Add Matches
        </div>
      </div>

      <hr />
      <div className="tournament-contents flex flex-col gap-4 mt-4">
        <div className="flex flex-col">
          <p className="font-semibold"> Duration</p>
          <div className="duration mr-4 flex gap-5">
            <p>
              <span>from</span> : <span>{tournament.fromDate}</span>
            </p>
            <p>
              <span>To</span> : <span>{tournament.fromDate}</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="">
            <span className="font-semibold mr-2"> Country :</span>
            <span>{tournament.country}</span>
          </p>
        </div>
      </div>

      <div className="footer mt-2 border-t border-gray-300 flex justify-end p-2">
        <p className="text-sm border-r-2 border-gray-400 pr-2">
          Total Matches : <span>{matchCount}</span>
        </p>
        <span className="text-sm ml-2 text-blue-400 underline hover:text-blue-500 hover:cursor-pointer">
          View matches
        </span>
      </div>
    </div>
  );
};

export default connect(
  (state, { tournament: { id } }) => {
    const { match } = state;
    const matchCount = match.data.filter(
      (match) => match.tournamentId === id
    ).length;

    return {
      matchCount,
    };
  },
  (dispatch, ownProps) => ({
    addMatchFormData: (data) => dispatch(addMatchFormData(data)),
    addTournamentMatch: (data) => dispatch(addTournamentMatch(data)),
  })
)(TournamentCard);
