/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
console.log(
  "-----------------------------------------------------ESERCIZIO A-----------------------------------------------------"
);

let a = 10;
let b = 20;

let sum = a + b;

console.log(sum);
/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
console.log(
  "-----------------------------------------------------ESERCIZIO B-----------------------------------------------------"
);

const random = Math.random();

const max = 20;

let result = Math.floor(random * (max + 1));

console.log("Numero casuale tra 0 e 20 (incluso): " + result);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
console.log(
  "-----------------------------------------------------ESERCIZIO C-----------------------------------------------------"
);

let me = {
  name: "Claudio",
  surname: "Pinna",
  age: "33",
};

console.log(me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
console.log(
  "-----------------------------------------------------ESERCIZIO D -----------------------------------------------------"
);

delete me["age"];

console.log(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
console.log(
  "-----------------------------------------------------ESERCIZIO E -----------------------------------------------------"
);

me.skills = ["html", "css", "javaScript"];

function add(element) {
  me.skills.push(element);
}

console.log(me);
/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
console.log(
  "-----------------------------------------------------ESERCIZIO F-----------------------------------------------------"
);

me.skills.push("CAD");

console.log(me);
/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
console.log(
  "-----------------------------------------------------ESERCIZIO G-----------------------------------------------------"
);

me.skills.pop();

console.log(me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
console.log(
  "-----------------------------------------------------ESERCIZIO 1-----------------------------------------------------"
);

function dice() {
  return Math.floor(Math.random() * 6) + 1;
}
console.log(dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
console.log(
  "-----------------------------------------------------ESERCIZIO 2-----------------------------------------------------"
);

let num1 = 10;
let num2 = 30;

function whoIsBigger(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
console.log("Il numero più grade tra i due numeri è: ");
console.log(whoIsBigger(num1, num2));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
console.log(
  "-----------------------------------------------------ESERCIZIO 3-----------------------------------------------------"
);

function splitMe(str) {
  return str.split(" ");
}

console.log(splitMe("I love coding"));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
console.log(
  "-----------------------------------------------------ESERCIZIO 4-----------------------------------------------------"
);
//RITORNACI SE PUOI
function deleteOne(str, bool) {
  if (bool) {
    return str.slice(1);
  } else {
    return str.slice(0, -1);
  }
}

console.log(deleteOne("Hello", true));
console.log(deleteOne("Hello", false));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
console.log(
  "-----------------------------------------------------ESERCIZIO 5 -----------------------------------------------------"
);

let x = "Ho 150 Gattini";

function onlyLetters() {
  let letters = x.match(/[a-zA-Z " "]/g);
  return letters.join("");
}

console.log(onlyLetters(x));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
console.log(
  "-----------------------------------------------------ESERCIZIO 6-----------------------------------------------------"
);

function isThisAnEmail(email) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true + ", L'indirizzo email che hai inserito e' valido";
  } else {
    return false + ", L'indirizzo email che hai inserito non e' valido";
  }
}

console.log(isThisAnEmail("claudiopinna@live.com"));
console.log(isThisAnEmail("claudiopinnalive.com"));

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
console.log(
  "-----------------------------------------------------ESERCIZIO 7 -----------------------------------------------------"
);
function whatDayIsIt(day) {
  const today = new Date();
  const dayNumber = today.getDay();
  const dayNames = [
    "Domenica",
    "Lunedì",
    "Martedì",
    "Mercoledì",
    "Giovedì",
    "Venerdì",
    "Sabato",
  ];
  return dayNames[dayNumber];
}

console.log("Oggi è: " + whatDayIsIt());

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
console.log(
  "-----------------------------------------------------ESERCIZIO 8-----------------------------------------------------"
);

function rollTheDices(num) {
  const values = [];
  let sum = 0;
  for (let i = 0; i < num; i++) {
    const diceRoll = dice();
    values.push(diceRoll);
    sum += diceRoll;
  }
  return {
    sum: sum,
    values: values,
  };
}

console.log(rollTheDices(20));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
console.log(
  "-----------------------------------------------------ESERCIZIO 9-----------------------------------------------------"
);

function howManyDays(date) {
  var timeDiff = Date.now() - date.getTime(); // differenza tra data attuale e data indicata
  var daysDiff = timeDiff / (1000 * 60 * 60 * 24); //conversione in giorni
  return Math.floor(daysDiff); // ritorna il valore ottenuto nella variabile daysDiff
}
var someDate = new Date("2023-12-14"); // inserire la data per la quale si vuole ricavare la differenza di giorni
var daysSince = howManyDays(someDate);
console.log(daysSince);

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
console.log(
  "-----------------------------------------------------ESERCIZIO 10-----------------------------------------------------"
);

//////

// Arrays & Oggetti

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
console.log(
  "-----------------------------------------------------ESERCIZIO 11-----------------------------------------------------"
);

//////

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
console.log(
  "-----------------------------------------------------ESERCIZIO 12-----------------------------------------------------"
);
const newestMovie = (movies) => {
  let result = { Year: 1800 };
  for (let i = 0; i < movies.length; i++) {
    let currentYear = parseInt(movies[i].Year);
    if (currentYear > result.Year) {
      result = movies[i];
    }
  }

  return result;
};

console.log("Il film più recente dell'array movies è: ");
console.log(newestMovie(movies));

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
console.log(
  "-----------------------------------------------------ESERCIZIO 13-----------------------------------------------------"
);

const countMovies = (array) => {
  return array.length;
};

console.log("Il numero di film contenuti nell'array movies fornito è: ");
console.log(countMovies(movies));

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
console.log(
  "-----------------------------------------------------ESERCIZIO 14-----------------------------------------------------"
);

const onlyTheYears = (movies) => {
  return movies.map((elem) => elem.Year);
};

console.log("Array che contiene solamente gli anni di uscita dei film: ");
console.log(onlyTheYears(movies));

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
console.log(
  "-----------------------------------------------------ESERCIZIO 15-----------------------------------------------------"
);
const onlyInLastMillennium = (movies) => {
  let result = [];
  for (let i = 0; i < movies.length; i++) {
    if (parseInt(movies[i].Year) < 2000) {
      result.push(movies[i]);
    }
  }
  return result;
};
console.log(
  "Funzione che ritorna solamente i film prodotti nel millennio scorso presi dall'array movies: "
);
console.log(onlyInLastMillennium(movies));

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
console.log(
  "-----------------------------------------------------ESERCIZIO 16-----------------------------------------------------"
);

const sumAllTheYears = (array) => {
  let result = 0;
  for (let i = 0; i < movies.length; i++) {
    result += parseInt(movies[i].Year);
  }
  return result;
};

console.log(
  "La somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array movies fornito è: "
);
console.log(sumAllTheYears(movies));

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
console.log(
  "-----------------------------------------------------ESERCIZIO 17-----------------------------------------------------"
);

function searchByTitle(Title) {
  return movies.filter((movies) =>
    movies.Title.toLowerCase().includes(Title.toLowerCase())
  );
}

console.log(
  "Funzione che riceve una stringa come parametro e ritorna i film nell'array movies che la contengono nel titolo: "
);
console.log(searchByTitle("avengers"));

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
console.log(
  "-----------------------------------------------------ESERCIZIO 18-----------------------------------------------------"
);

function searchAndDivide(Title) {
  return {
    match: movies.filter((movie) =>
      movie.Title.toLowerCase().includes(Title.toLowerCase())
    ),
    unmatch: movies.filter(
      (movie) => !movie.Title.toLowerCase().includes(Title.toLowerCase())
    ),
  };
}

console.log(
  "Funzione che riceve una stringa come parametro e ritorna un oggetto contenente due array: "
);
console.log(searchAndDivide("AvEngers"));

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
console.log(
  "-----------------------------------------------------ESERCIZIO 19-----------------------------------------------------"
);

function removeIndex(index) {
  if (index < 0 || index >= movies.length) {
    return movies;
  }
  movies.splice(index, 1);

  return movies;
}

console.log(removeIndex(1));

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
console.log(
  "-----------------------------------------------------ESERCIZIO 20-----------------------------------------------------"
);
/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
console.log(
  "-----------------------------------------------------ESERCIZIO 21-----------------------------------------------------"
);
/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
console.log(
  "-----------------------------------------------------ESERCIZIO 22-----------------------------------------------------"
);
/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
console.log(
  "-----------------------------------------------------ESERCIZIO 23-----------------------------------------------------"
);

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
console.log(
  "-----------------------------------------------------ESERCIZIO 24-----------------------------------------------------"
);

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
console.log(
  "-----------------------------------------------------ESERCIZIO 25-----------------------------------------------------"
);

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
console.log(
  "-----------------------------------------------------ESERCIZIO 26-----------------------------------------------------"
);

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
console.log(
  "-----------------------------------------------------ESERCIZIO 27-----------------------------------------------------"
);

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
console.log(
  "-----------------------------------------------------ESERCIZIO 28-----------------------------------------------------"
);

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
console.log(
  "-----------------------------------------------------ESERCIZIO 29-----------------------------------------------------"
);
