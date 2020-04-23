const movies = [{

    "title": "Jaws",

    "director": "Steven Spielberg",

    "year": "1975"

},

{

    "title": "Star Wars",

    "director": "George Lucas",

    "year": "1977"

},

{

    "title": "Avengers: Infinity War",

    "director": "Anthony and Joe Russo",

    "year": "2018"

},

{

    "title": "Top Gun",

    "director": "Tony Scott",

    "year": "1986"

},

{

    "title": "Justice League",

    "director": "Zack Snyder",

    "year": "2017"

}

];

// Don’t edit the code above this comment  

// Part 1 

// Don’t edit the code above this comment

// Part 1

function findMovie(movieTitle) {
  for (let i of movies) {
    if (i.title === movieTitle) {
      console.log(`${i.title} ${i.director} ${i.year}`);
    }
//   console.log(i);
  }
}
findMovie("Star Wars");

// console.log(findMovie("Star Wars"));
