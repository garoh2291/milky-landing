import React from "react";
import { StyledSport, StyledTypes } from "../styles/predictions.styles";
import football from "../../assets/football.png";
import tennis from "../../assets/tennis.png";
import hockey from "../../assets/hockey.png";
import volleyball from "../../assets/volleyball.png";
import basketball from "../../assets/basketball.png";
import { useTranslation } from "react-i18next";

export const Types = ({ type, setType, text }) => {
  return (
    <StyledTypes>
      <Type type={type} text="all sports" handleClick={setType} />
      <Type type={type} text="football" handleClick={setType} />
      <Type type={type} text="tennis" handleClick={setType} />
      <Type type={type} text="volleyball" handleClick={setType} />
      <Type type={type} text="basketball" handleClick={setType} />
      <Type type={type} text="ice hockey" handleClick={setType} />
    </StyledTypes>
  );
};

const Type = ({ type, text, handleClick }) => {
  const { t } = useTranslation();
  return (
    <StyledSport
      active={text === type && "100%"}
      onClick={() => handleClick(text)}
    >
      {text !== "all sports" ? <img src={renderIcon(text)} alt="type" /> : ""}
      <p>{t(`types.${text}`)}</p>
    </StyledSport>
  );
};

export function renderIcon(text) {
  switch (text) {
    case "football":
      return football;
    case "ice hockey":
      return hockey;
    case "tennis":
      return tennis;
    case "volleyball":
      return volleyball;
    case "basketball":
      return basketball;
    default:
      return;
  }
}
