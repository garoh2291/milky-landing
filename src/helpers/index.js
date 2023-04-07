export const getLang = () => {
  return localStorage.getItem("i18nextLng");
};

export function filteredGames(games, filter) {
  const selected = games.find((g) => g.matchDay === "yes");
  const final = [selected, ...games.filter((g) => g._id !== selected._id)];

  if (filter === "all sports") {
    return final;
  } else {
    return final.filter((g) => g.sport === filter);
  }
}
