import React, { useEffect, useState } from "react";
import { StyledContainer } from "../styles/app.styles";
import {
  PredictWrapper,
  StyledPredictions,
} from "../styles/predictions.styles";
import { Board } from "./board";
import { Types } from "./types";
import moment from "moment";

export const Predictions = () => {
  const [type, setType] = useState("all sports");
  const [games, setGames] = useState(null);
  const [clicked, setClicked] = useState(false);

  const date = moment(new Date()).utc(8).toISOString();

  useEffect(() => {
    fetch(`https://milky-admin.herokuapp.com/game?complete_gte=${date}&`)
      .then((res) => res.json())
      .then((data) => setGames(data));
  }, []);

  const changeType = (type) => {
    setType(type);
    setClicked(false);
  };

  if (!games) {
    return <h6>Loading</h6>;
  }

  return (
    <StyledPredictions>
      <PredictWrapper>
        <Types type={type} changeType={changeType} />
        <Board
          games={games}
          type={type}
          clicked={clicked}
          setClicked={setClicked}
        />
      </PredictWrapper>
    </StyledPredictions>
  );
};
