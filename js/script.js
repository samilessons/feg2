"use strict";

const countOfFilms = +prompt("Քանի՞ ֆիլմ եք վերջերս դիտել");

const DB = {
  count: countOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false
};

const a = prompt("Ո՞ր ֆիլմն եք վերջերդ դիտել");
const b = +prompt("Ինչքա՞ն եք գնահատում այդ ֆիլմը");
const c = prompt("Ո՞ր ֆիլմն եք վերջերդ դիտել");
const d = +prompt("Ինչքա՞ն եք գնահատում այդ ֆիլմը");

DB.movies[a] = b;
DB.movies[c] = d;

console.log(DB);

/* 
  1․ ստանալ ֆիլմի անունը և գնահատականը
  2․ ոնց ենք ավելացնելու օբյեկտի մեջ
  movies: {
    "titanik": 10,
    "bad boys": 7.5
  }
*/