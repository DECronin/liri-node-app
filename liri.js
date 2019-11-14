// require("dotenv").config();
// const axios = require("axios");
const keys = require("./keys.js");
let webAddress;
let queryParams;
// let queryUrl = `http://www.${webAddress}.com/${queryParams}`;

// for (x in keys){
//     JSON.stringify();
// }
var Spotify = require('../../node-spotify-api');
var spotify = new Spotify(keys.spotify);

switch (process.argv[2]) {
    case 'concert-this': webAddress = '';
        webAddress = '';
        queryParams = '';
        break;
    case 'spotify-this-song': console.log('spotify ================================================================');
       
        webAddress = 'api.spotify'; 
        queryParams = 'v1/search?q=track';
        break;
    case 'movie-this': webAddress = '';
        webAddress = '';
        queryParams = '';
        break;
    case 'do-what-it-says': webAddress = '';
        webAddress = '';
        queryParams = '';
        break;
    default: console.log('Please give an apropriate command.');
}

// axios.get(queryUrl).then()