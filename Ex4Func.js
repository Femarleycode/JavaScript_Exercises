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

// Part 2

function returnMovie(movieTitle) {
    for (let i of movies) {
        if (i.title === movieTitle) {
            return (i.title);
            console.log("1");
        }
        console.log("2");
    }
    console.log("3");
}
returnMovie("Jaws");
// console.log();
console.log("4");