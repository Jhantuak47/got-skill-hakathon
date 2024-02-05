import "./App.css";
import { connect } from "react-redux";
import { useEffect, useState } from "react";

import CommonDialog from "./components/Dialogs/CommonDialog";
import ReactRoute from "./routes";

const App = ({ auth, state }) => {
  const [isActve, setActive] = useState(false);
  const [dialogBox, setDialogBox] = useState({});

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
      {dialogBox?.showDialog && showDialogBox(dialogBox)}

      <ReactRoute setDialogBox={setDialogBox} />
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
