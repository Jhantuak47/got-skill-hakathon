import "./App.css";
import ReactRoute from "./routes";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./containers/dashboard";
import PageNotFound from "./containers/404";
import Layout from "./components/Layouts";
import Tournament from "./containers/tournament";
import CommonDialog from "./components/Dialogs/CommonDialog";

const App = ({ auth, state }) => {
  const [isActve, setActive] = useState(false);
  const [dialogBox, setDialogBox] = useState({});
  console.log("checking state: ", state);
  useEffect(() => {
    if (auth?.accessToken) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [auth?.accessToken]);

  const showDialogBox = ({ showContent = () => {}, onSaveFormData = {} }) => {
    return (
      <CommonDialog
        onCancle={() =>
          setDialogBox((dialog) => ({ ...dialog, dialogBox: false }))
        }
        content={showContent()}
        onSave={() => {
          onSaveFormData(state);
          setDialogBox((dialogBox) => ({ ...dialogBox, showDialog: false }));
        }}
      />
    );
  };

  return (
    <>
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/tournament"
            element={<Tournament setDialogBox={setDialogBox} />}
          />
        </Routes>
      </Router>

      {dialogBox?.showDialog && showDialogBox(dialogBox)}
    </>
  );
};

const mapStateToProps = (state) => {
  const { auth } = state;
  return {
    auth,
    state,
  };
};
export default connect(mapStateToProps, null)(App);
