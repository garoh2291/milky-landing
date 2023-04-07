import React, { useEffect, useState } from "react";
import { StyledContainer } from "../styles/app.styles";
import {
  PredictWrapper,
  StyledPredictions,
} from "../styles/predictions.styles";
import { Board } from "./board";
import { Types } from "./types";

export const Predictions = () => {
  const [type, setType] = useState("all sports");
  const [games, setGames] = useState(null);

  useEffect(() => {
    fetch(`https://milky-admin.herokuapp.com/game?complete_gte=2023-03-31&`)
      .then((res) => res.json())
      .then((data) => setGames(data));
  }, []);

  if (!games) {
    return <h6>Loading</h6>;
  }

  return (
    <StyledPredictions>
      <StyledContainer>
        <PredictWrapper>
          <Types type={type} setType={setType} />
          <Board games={games} type={type} />
        </PredictWrapper>
      </StyledContainer>
    </StyledPredictions>
  );
};
