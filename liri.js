// require("dotenv").config();
const axios = require("axios");
const keys = require("./keys.js");
let webAddress;
let queryParams;
let queryUrl = `http://www.${webAddress}.com/${queryParams}`;

// var spotify = new Spotify(keys.spotify);
// queryURL = `https://rest.bandsintown.com/artists/` + artist + "?app_id=codingbootcamp";

var spooph = `https://accounts.spotify.com/v1/?search='icon+for+hire'`;

switch (process.argv[2]) {
    case 'concert-this': 
        webAddress = 'rest.bandsintown';
        queryParams = 'artists/nickelback?app_id=codingbootcamp"';
        calling(queryUrl);
        break;
    case 'spotify-this-song': console.log('spotify ================================================================');
        axios.get(spooph).then(function(response){
            console.log(response.data);
            console.log("connected");
        });
        // var newQueryUrl = 
        // webAddress = 'api.spotify'; 
        // queryParams = 'v1/search?q=track';
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

function calling(url){
    console.log('ppppp');
    axios.get(url).then(function(response){
        console.log('CONNECTEDDDDD' + response.data)
    })
}