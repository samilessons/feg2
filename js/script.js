"use strict";

const countOfFilms = +prompt("Քանի՞ ֆիլմ եք վերջերս դիտել");

const DB = {
  count: countOfFilms,
  movies: {},
  actors: {},
  genres: [],
  status: null,
  private: false,
};

for (let i = 0; i < 2; i++) {
  const filmName = prompt("Ո՞ր ֆիլմն եք վերջերդ դիտել");
  const filmRate = +prompt(`Ինչքա՞ն եք գնահատում ${filmName} ֆիլմը`);
  
  if (filmName != null && filmRate != null && filmName != "" && filmRate != "" && filmName.length < 50) {
    DB.movies[filmName] = filmRate;
    console.log("Resolve");
  } else {
    console.log("Reject");
    i--;
  }
}

if (DB.count < 10) {
  DB.status = "Դուք դիտել եք բավականին քիչ ֆիլմեր";
} else if (DB.count >= 10 && DB.count < 30) {
  DB.status = "Դուք դասական ֆիլմ դիտող եք";
} else if (DB.count >= 30) {
  DB.status = "Դուք կինոման եք !";
} else {
  console.log("Տեղի է ունեցել ինչ-որ խնդիր");
}

console.log(DB);