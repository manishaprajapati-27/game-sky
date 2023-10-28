// Base URL

const base_url = "https://api.rawg.io/api/";

// console.log(popular_games_new);

// Getting the month
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

// Getting the date
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

// Getting the date

const currentYear = new Date().getFullYear();
const CurrentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${CurrentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${CurrentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${CurrentMonth}-${currentDay}`;

// const popular_games = `games?key=${
//   import.meta.env.GAMESKY_API
// }&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const popular_games = `games?key=${
  import.meta.env.VITE_GAMESKY_API
}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?key=${
  import.meta.env.VITE_GAMESKY_API
}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const new_games = `games?key=${
  import.meta.env.VITE_GAMESKY_API
}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${new_games}`;

// Game Details
export const gameDetailsURL = (game_id) => `
${base_url}games/${game_id}?key=${import.meta.env.VITE_GAMESKY_API}
`;
// https://api.rawg.io/api/games/303576?key=${import.meta.env.VITE_GAMESKY_API}
// ScreenShots
export const gameScreenshotURL = (game_id) => `
${base_url}games/${game_id}/screenshots?key=${import.meta.env.VITE_GAMESKY_API}
`;

export const searchGameURL = (game_name) => `
${base_url}games?key=${
  import.meta.env.VITE_GAMESKY_API
}&search=${game_name}&page_size=9
`;
// ${base_url}games?search=${game_name}&page_size=9
