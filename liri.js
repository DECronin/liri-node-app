require("dotenv").config();
const moment = require('moment');
const axios = require("axios");
const keys = require("./keys.js");
let webAddress;
let queryParams;
// let queryUrl = `http://${webAddress}.com/${queryParams}`;

// var spotify = new Spotify(keys.spotify);
// let queryURL = `https://rest.bandsintown.com/artists/` + artist + "?app_id=codingbootcamp";

var spooph = `https://accounts.spotify.com/v1/?search='icon+for+hire'`;

switch (process.argv[2]) {
    case 'concert-this':
        let url = `https://rest.bandsintown.com/artists/${process.argv.slice(3).join('+')}/events?app_id=codingbootcamp`;
        axios.get(url).then(function (res) {
            console.log(`Venue Name: ${res.data[0].venue.name}\nLocation: ${res.data[0].venue.city}, ${res.data[0].venue.country}\nEvent Date: ${moment(res.data[0].datetime).format('MMMM Do YYYY, h:mm a')}`);
        });
        break;
    case 'spotify-this-song': console.log('spotify ================================================');
        axios.get(spooph).then(function (response) {
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