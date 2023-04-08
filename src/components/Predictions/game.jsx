import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import {
  GameBody,
  GameHead,
  MatchWrap,
  StandartWrap,
} from "../styles/predictions.styles";
import { renderIcon } from "./types";
import calendar from "../../assets/calendar.png";
import moment from "moment";
import { LangContext } from "../../context";

export const Game = ({ game, idx }) => {
  const { t } = useTranslation();
  const date = moment(game.date).utc().format("DD MMMM");
  const time = moment(game.date).utc().format("HH:mm");
  const { lang } = useContext(LangContext);
  if (idx === 0 && game.matchDay === "yes") {
    return (
      <MatchWrap>
        {date}
        {time}
      </MatchWrap>
    );
  }
  return (
    <StandartWrap>
      <GameHead>
        <div>
          <img src={renderIcon(game.sport)} alt="type" />{" "}
          <p>{t(`types.${game.sport}`)}</p>
        </div>
        <div>
          <img src={calendar} alt="calendar" />
          <div>
            <p>{date}</p>
            <p>{time}</p>
          </div>
        </div>
      </GameHead>
      <GameBody>
        <div>
          <div>
            <div>
              <img src={renderIcon(game.sport)} alt="type" />
            </div>
            <p>{game.team1[lang]}</p>
          </div>
        </div>
      </GameBody>
    </StandartWrap>
  );
};
