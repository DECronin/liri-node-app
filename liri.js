require("dotenv").config();
const moment = require('moment');
const axios = require("axios");
const keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
let url = '';

// var spooph = `https://accounts.spotify.com/v1/?search='icon+for+hire'`;

switch (process.argv[2]) {
    case 'concert-this':
        url = `https://rest.bandsintown.com/artists/${process.argv.slice(3).join('+') || 'fall+out+boy'}/events?app_id=codingbootcamp`;
        axios.get(url).then(function (res) {
            console.log(`Venue Name: ${res.data[0].venue.name}\nLocation: ${res.data[0].venue.city}, ${res.data[0].venue.country}\nEvent Date: ${moment(res.data[0].datetime).format('MMMM Do YYYY, h:mm a')}`);
        });
        break;
    case 'spotify-this-song':
        spotify.search({ type: 'track', query: process.argv.slice(3).join(' ') || 'The Sign'}, function(err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }
            console.log(`Artists(s): ${data.tracks.items[0].album.artists[0].name}\nSong Name: ${data.tracks.items[0].name}\nAlbumn: ${data.tracks.items[0].album.name}\nPreview Link: ${data.tracks.items[0].external_urls.spotify}`);
        });
        break;
    case 'movie-this': 
        url = `https://www.omdbapi.com/?t=${process.argv.slice(3).join('+') || 'mr+nobody'}&apikey=trilogy`
        axios.get(url).then(function (res) {
            console.log(`Movie Title: ${res.data.Title}\nRelease Year: ${res.data.Year}\nIMDB Rating: ${res.data.Ratings[0].Value}\nRotten Tomatoes Rating: ${res.data.Ratings[1].Value}\nCountry(s): ${res.data.Country}\nOriginal Language: ${res.data.Language}\nPlot: ${res.data.Plot}\nActors: ${res.data.Actors}`);
        });
        break;
    case 'do-what-it-says': 
        // let dataBuffer = fs.readFileSync('random.txt');
        // let parse = dataBuffer.toString();
        // let data = parse.split(',');
        // command = data[0];
        // commandData = data[1];
        break;
    default: console.log('Please give an apropriate command.'); break;
}