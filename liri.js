require("dotenv").config();
const moment = require('moment');
const axios = require("axios");
const keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

// var spooph = `https://accounts.spotify.com/v1/?search='icon+for+hire'`;

switch (process.argv[2]) {
    case 'concert-this':
        let url = `https://rest.bandsintown.com/artists/${process.argv.slice(3).join('+') || 'fall+out+boy'}/events?app_id=codingbootcamp`;
        axios.get(url).then(function (res) {
            console.log(`Venue Name: ${res.data[0].venue.name}\nLocation: ${res.data[0].venue.city}, ${res.data[0].venue.country}\nEvent Date: ${moment(res.data[0].datetime).format('MMMM Do YYYY, h:mm a')}`);
        });
        break;
    case 'spotify-this-song': console.log('spotify ================================================');
        spotify.search({ type: 'track', query: process.argv.slice(3).join(' ') || 'All the Small Things'}, function(err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }
            console.log(data); 
        });
        break;
    case 'movie-this': 

        break;
    case 'do-what-it-says': 
        
        break;
    default: console.log('Please give an apropriate command.'); break;
}

// spotify
// =======
// Artist(s)
// The song's name
// A preview link of the song from Spotify
// The album that the song is from
// default to "The Sign" by Ace of Base.