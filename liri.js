require("dotenv").config();
const moment = require('moment');
const axios = require("axios");
const keys = require("./keys.js");
const fs = require('fs');
let Spotify = require('node-spotify-api');
let spotify = new Spotify(keys.spotify);
let url = '';
search();
function search(){
    switch (process.argv[2]) {
        case 'do-what-it-says': 
            let random = fs.readFileSync('random.txt').toString().split(',');
            fs.appendFile('log.txt', `${process.argv[2]}\n`, function(error) {
                if (error) {
                    return console.log(error);
                    }
            })
            process.argv[2] = random[0];
            process.argv[3] = random[1];
            search();
            break;
        case 'concert-this':
            url = `https://rest.bandsintown.com/artists/${process.argv.slice(3).join('+') || 'fall+out+boy'}/events?app_id=codingbootcamp`;
            axios.get(url).then(function (res) {
                logText(`Venue Name: ${res.data[0].venue.name}\nLocation: ${res.data[0].venue.city}, ${res.data[0].venue.country}\nEvent Date: ${moment(res.data[0].datetime).format('MMMM Do YYYY, h:mm a')}`);
            });
            break;
        case 'spotify-this-song':
            spotify.search({ type: 'track', query: process.argv.slice(3).join(' ') || 'The Sign'}, function(err, data) {
                if (err) {
                    return console.log('Error occurred: ' + err);
                }
                logText(`Artists(s): ${data.tracks.items[0].album.artists[0].name}\nSong Name: ${data.tracks.items[0].name}\nAlbumn: ${data.tracks.items[0].album.name}\nPreview Link: ${data.tracks.items[0].external_urls.spotify}`);
            });
            break;
        case 'movie-this': 
            url = `https://www.omdbapi.com/?t=${process.argv.slice(3).join('+') || 'mr+nobody'}&apikey=trilogy`
            axios.get(url).then(function (res) {
                logText(`Movie Title: ${res.data.Title}\nRelease Year: ${res.data.Year}\nIMDB Rating: ${res.data.Ratings[0].Value}\nRotten Tomatoes Rating: ${res.data.Ratings[1].Value}\nCountry(s): ${res.data.Country}\nOriginal Language: ${res.data.Language}\nPlot: ${res.data.Plot}\nActors: ${res.data.Actors}`);
            });
            break;
        default: console.log('Please give an apropriate command.'); break;
    }
}
function logText(log){
    console.log(log);
    fs.appendFile('log.txt', `node liri.js ${process.argv.slice(2).join(' ')}\n${log}\n\n`, function(error) {
        if (error) {
            return console.log(error);
            }
    })
}