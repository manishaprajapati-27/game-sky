// Base URL

const base_url = "https://api.rawg.io/api/";
// https://api.rawg.io/api/games?key=YOUR_API_KEY&dates=2019-09-01,2019-09-30&platforms=18,1,7

// Popular games

// const popular_games_new = `https://api.rawg.io/api/games?key=180066f998144f90868689c105f8144c&dates=2023`;

console.log(popular_games_new);

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
console.log(currentDate);
console.log(lastYear);
console.log(nextYear);

getCurrentMonth();

const popular_games = `games?key=${process.env.REACT_APP_GAME_SKY_API}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
