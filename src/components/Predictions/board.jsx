import React, { useContext, useEffect, useState } from "react";
import { filteredGames } from "../../helpers";
import {
  EmptyEvent,
  MoreBtnWrapper,
  StyledBoard,
} from "../styles/predictions.styles";
import { Game } from "./game";
import { useTranslation } from "react-i18next";
import arrow from "../../assets/button.png";
import { LangContext } from "../../context";

export const Board = ({ games, type, clicked, setClicked }) => {
  const [selected, setSelected] = useState(games);
  const { predict } = useContext(LangContext);
  const { t } = useTranslation();

  useEffect(() => {
    setSelected(filteredGames(games, type).filter((game, idx) => idx <= 10));
  }, [type, games]);

  const changeLimit = () => {
    setSelected(filteredGames(games, type));
    setClicked(true);
  };

  if (selected.length === 0) {
    return <EmptyEvent>{t("promo.empty")}</EmptyEvent>;
  }
  return (
    <>
      <StyledBoard ref={predict}>
        {selected.map((game, idx) => (
          <Game key={game._id} game={game} idx={idx} />
        ))}
      </StyledBoard>
      <MoreBtnWrapper>
        {!clicked && selected.length > 10 && (
          <button onClick={changeLimit}>
            {t("main.more")} <img src={arrow} alt="arrow" />
          </button>
        )}
      </MoreBtnWrapper>
    </>
  );
};
