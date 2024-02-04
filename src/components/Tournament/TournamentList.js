import React from "react";
import TournamentCard from "./TournamentCard";

const TournamentList = ({ tournaments, setDialogBox }) => {
  return (
    <div className="flex gap-5 flex-wrap mx-4 my-4 ">
      {tournaments &&
        tournaments.map((tournament) => (
          <TournamentCard
            tournament={tournament}
            key={tournament.id}
            setDialogBox={setDialogBox}
          />
        ))}
    </div>
  );
};

export default TournamentList;
