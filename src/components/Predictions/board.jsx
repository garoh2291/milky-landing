import React, { useState } from "react";
import { filteredGames } from "../../helpers";
import { StyledBoard } from "../styles/predictions.styles";
import { Game } from "./game";

export const Board = ({ games, type }) => {
  const [selected, setSelected] = useState(
    filteredGames(games, type).filter((g, idx) => idx <= 10)
  );
  console.log(selected);
  const changeLimit = () => {
    setSelected(filteredGames(games, type));
  };
  //  useEffect;
  return (
    <>
      <StyledBoard>
        {selected.map((game) => (
          <Game key={game._id} game={game} />
        ))}
      </StyledBoard>
      <button onClick={changeLimit}>more</button>
    </>
  );
};
