require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

// Make it so liri.js can take in one of the following commands:
// concert-this
// spotify-this-song
// movie-this
// do-what-it-says

//for (x in keys){
    // JSON.stringify();
// }
switch(process.argv[2]){
    case 'concert-this': queryUrl = ''; break;
    case 'concert-this': queryUrl = ''; break;
    case 'concert-this': queryUrl = ''; break;
    case 'concert-this': queryUrl = ''; break;
    default: console.log('Please give an apropriate command.');
}

axios.get(queryUrl).then()