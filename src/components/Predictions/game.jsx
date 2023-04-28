import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import {
  Detail,
  Event,
  GameBody,
  GameDetails,
  GameHead,
  GameOfDay,
  MatchDesc,
  MatchWrap,
  MatchWrapGame,
  StandartWrap,
} from "../styles/predictions.styles";
import { renderIcon } from "./types";
import calendar from "../../assets/calendar.png";
import moment from "moment";
import { LangContext } from "../../context";
import { getSportNew, getSportWall } from "../../helpers";

export const Game = ({ game, idx }) => {
  const { t } = useTranslation();
  const date = moment(game.date).utc().format("DD");
  const month = moment(game.date).utc().format("MM");

  const time = moment(game.date).utc().format("HH:mm");
  const { lang } = useContext(LangContext);
  if (idx === 0 && game.matchDay === "yes") {
    return (
      <MatchWrap>
        {/* <h6>{t("promo.best")}</h6> */}
        <MatchWrapGame>
          <GameOfDay>{t("promo.best")}</GameOfDay>

          <GameHead>
            <div>
              <img src={renderIcon(game.sport)} alt="type" />{" "}
              <p>{t(`types.${game.sport}`)}</p>
            </div>
            <div>
              <img src={calendar} alt="calendar" />
              <div>
                <p>
                  {date} {t(`month.${month}`)}
                </p>
                <p>{time}</p>
              </div>
            </div>
          </GameHead>
          <GameBody
            letter={
              (game.team1[lang].length >= 13 ||
                game.team2[lang].length >= 13) &&
              "16px"
            }
          >
            <div>
              <div>
                {" "}
                {game.team1Logo ? (
                  <img
                    src={`https://cdn-sp.kertn.net/assets/team-logos/${game.team1Logo}.png`}
                    alt="logo"
                    onError={({ currentTarget }) => {
                      currentTarget.onerror = null; // prevents looping
                      currentTarget.src = getSportNew(game.sport);
                    }}
                    style={{ width: "auto", height: "50px" }}
                  />
                ) : (
                  <img
                    src={getSportNew(game.sport)}
                    alt="logo"
                    style={{ width: "auto", height: "50px" }}
                  />
                )}
              </div>
              <p>{game.team1[lang]}</p>
            </div>
            <div>
              <div></div>
            </div>{" "}
            <div>
              <div>
                {" "}
                {game.team2Logo ? (
                  <img
                    src={`https://cdn-sp.kertn.net/assets/team-logos/${game.team2Logo}.png`}
                    alt="logo"
                    onError={({ currentTarget }) => {
                      currentTarget.onerror = null; // prevents looping
                      currentTarget.src = getSportNew(game.sport);
                    }}
                    style={{ width: "auto", height: "50px" }}
                  />
                ) : (
                  <img
                    src={getSportNew(game.sport)}
                    alt="logo"
                    style={{ width: "auto", height: "50px" }}
                  />
                )}
              </div>
              <p>{game.team2[lang]}</p>
            </div>
          </GameBody>
          <GameDetails>
            <Detail>
              <p>{game.coeff.toFixed(2)}</p>
              <p>{t("promo.cf")}</p>
            </Detail>
            <Event fs={game.position[lang].length > 15 && "12px"}>
              {game.position[lang]}
            </Event>
            <Detail>
              <p>{game.probability ? `${game.probability}%` : "80%"}</p>
              <p>{t("promo.risk")}</p>
            </Detail>
          </GameDetails>
        </MatchWrapGame>
        <MatchDesc title={game.description[lang]}>
          {game.description[lang]}
        </MatchDesc>
      </MatchWrap>
    );
  }
  return (
    <StandartWrap bg={getSportWall(game.sport)}>
      <GameHead>
        <div>
          <img src={renderIcon(game.sport)} alt="type" />{" "}
          <p>{t(`types.${game.sport}`)}</p>
        </div>
        <div>
          <img src={calendar} alt="calendar" />
          <div>
            <p>
              {date} {t(`month.${month}`)}
            </p>
            <p>{time}</p>
          </div>
        </div>
      </GameHead>
      <GameBody
        letter={
          (game.team1[lang].length >= 13 || game.team2[lang].length >= 13) &&
          "16px"
        }
      >
        <div>
          <div>
            {" "}
            {game.team1Logo ? (
              <img
                src={`https://cdn-sp.kertn.net/assets/team-logos/${game.team1Logo}.png`}
                alt="logo"
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src = getSportNew(game.sport);
                }}
                style={{ width: "auto", height: "50px" }}
              />
            ) : (
              <img
                src={getSportNew(game.sport)}
                alt="logo"
                style={{ width: "auto", height: "50px" }}
              />
            )}
          </div>
          <p>{game.team1[lang]}</p>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div>
            {" "}
            {game.team2Logo ? (
              <img
                src={`https://cdn-sp.kertn.net/assets/team-logos/${game.team2Logo}.png`}
                alt="logo"
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src = getSportNew(game.sport);
                }}
                style={{ width: "auto", height: "50px" }}
              />
            ) : (
              <img
                src={getSportNew(game.sport)}
                alt="logo"
                style={{ width: "auto", height: "50px" }}
              />
            )}
          </div>
          <p>{game.team2[lang]}</p>
        </div>
      </GameBody>
      <GameDetails>
        <Detail>
          <p>{game.coeff.toFixed(2)}</p>
          <p>{t("promo.cf")}</p>
        </Detail>
        <Event fs={game.position[lang].length > 17 && "11px"}>
          {game.position[lang]}
        </Event>
        <Detail>
          <p>{game.probability ? `${game.probability}%` : "80%"}</p>
          <p>{t("promo.risk")}</p>
        </Detail>
      </GameDetails>
    </StandartWrap>
  );
};
