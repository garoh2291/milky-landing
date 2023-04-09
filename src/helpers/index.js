import hockey from "../assets/hockey1.png";
import soccer from "../assets/soccer1.png";
import tennis from "../assets/tennis1.png";
import volleyball from "../assets/volleyball1.png";
import basketball from "../assets/basketball1.png";

export const getLang = () => {
  return localStorage.getItem("i18nextLng");
};

export function filteredGames(games, filter) {
  const selected = games.find((g) => g.matchDay === "yes");
  const final = selected
    ? [selected, ...games.filter((g) => g._id !== selected._id)]
    : games;

  if (filter === "all sports") {
    return final;
  } else {
    return final.filter((g) => g.sport === filter);
  }
}

export function sportType(sport) {
  switch (sport) {
    case "volleyball":
      return (
        <img
          src={volleyball}
          alt="img"
          width={"50px"}
          height="50px"
          style={{ marginLeft: "10px" }}
        />
      );
    case "basketball":
      return (
        <img
          src={basketball}
          alt="img"
          width={"40px"}
          height="40px"
          style={{ marginBottom: "10px" }}
        />
      );
    case "ice hockey":
      return (
        <img
          src={hockey}
          alt="img"
          width={"40px"}
          height="40px"
          style={{ marginBottom: "10px" }}
        />
      );
    case "tennis":
      return (
        <img
          src={tennis}
          alt="img"
          width={"50px"}
          height="50px"
          style={{ marginLeft: "10px" }}
        />
      );
    default:
      return (
        <img
          src={soccer}
          alt="img"
          width={"50px"}
          height="50px"
          style={{ marginLeft: "10px" }}
        />
      );
  }
}
