import React, { useEffect, useState } from "react";
import { filteredGames } from "../../helpers";
import { MoreBtnWrapper, StyledBoard } from "../styles/predictions.styles";
import { Game } from "./game";
import { useTranslation } from "react-i18next";

export const Board = ({ games, type, clicked, setClicked }) => {
  const [selected, setSelected] = useState(games);
  const { t } = useTranslation();

  useEffect(() => {
    setSelected(filteredGames(games, type).filter((game, idx) => idx <= 10));
  }, [type, games]);

  const changeLimit = () => {
    setSelected(filteredGames(games, type));
    setClicked(true);
  };

  console.log(selected.length);
  return (
    <>
      <StyledBoard>
        {selected.map((game, idx) => (
          <Game key={game._id} game={game} idx={idx} />
        ))}
      </StyledBoard>
      <MoreBtnWrapper>
        {!clicked && selected.length > 10 && (
          <button onClick={changeLimit}>{t("main.more")}</button>
        )}
      </MoreBtnWrapper>
    </>
  );
};
