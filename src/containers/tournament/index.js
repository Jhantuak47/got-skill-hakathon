import React, { useState } from "react";
import Layout from "../../components/Layouts";
import CommonDialog from "../../components/Dialogs/CommonDialog";
import { generateAddTournamentForm } from "./utills/content";
import { connect } from "react-redux";
import { addNewTournament } from "./services/tournamentApi";
import { addFormData } from "../../store/reducers/tournament/tournament.action";
import TournamentList from "../../components/Tournament/TournamentList";

const Tournament = ({
  tournaments,
  addTournament,
  addFormData,
  setDialogBox,
  formData,
}) => {
  const handleOnChange = (label, data) => {
    addFormData({ [label]: data });
  };

  console.log("chekcing form dat: ", formData);

  return (
    <>
      <Layout>
        <div className="content-wrapper">
          <div className="button-aside flex justify-end mx-4 my-4">
            <button
              onClick={() =>
                setDialogBox({
                  showDialog: true,
                  showContent: () =>
                    generateAddTournamentForm({ handleOnChange }),
                  onSaveFormData: ({ tournament: { formData } }) => {
                    addTournament(formData);
                  },
                })
              }
              className="px-4 py-2 bg-green-500 rounded-lg text-white text-sm font-bold hover:bg-green-300"
            >
              Add Tournaments
            </button>
          </div>
          {tournaments && (
            <div className="main-content mt-10 border-t-2 border-gray-200">
              <TournamentList
                tournaments={tournaments}
                setDialogBox={setDialogBox}
              />
            </div>
          )}
        </div>
      </Layout>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    tournaments: state.tournament.data,
    formData: state.tournament.formData,
    ...ownProps,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addTournament: (data) => dispatch(addNewTournament(data)),
    addFormData: (data) => dispatch(addFormData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tournament);
