import { FormControl, MenuItem, Select } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { LangContext } from "../../context";

export const Lang = () => {
  const { lang, setLang } = useContext(LangContext);
  const { i18n } = useTranslation();

  const handleChange = (e) => {
    const val = e.target.value;
    i18n.changeLanguage(val);
    setLang(val);
  };

  return (
    <FormControl variant="standard">
      <Select
        value={lang}
        onChange={handleChange}
        autoWidth
        sx={{
          color: "white",
          fontSize: "18px",
          fontWeight: "700",
          "&:after": {
            border: "none",
          },
          "&:before": {
            border: "none",
          },
          ".MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(228, 219, 233, 0.25)",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(228, 219, 233, 0.25)",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(228, 219, 233, 0.25)",
          },
          ".MuiSvgIcon-root ": {
            fill: "white !important",
          },
        }}
      >
        <MenuItem value={"en"}>En</MenuItem>
        <MenuItem value={"am"}>Am</MenuItem>
      </Select>
    </FormControl>
  );
};
