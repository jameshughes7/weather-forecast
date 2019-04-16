const express = require('express');
const path = require('path');
const hbs = require('hbs');
const request = require('request');

const geocodeService = require('./utils/geocode');
const forecastService = require('./utils/forecast');

// __dirname: path to the directory that the script lives in
// console.log(__dirname)
// console.log(path.join(__dirname, '../public'));
//__filename: path the file that the script lives in 
// console.log(__filename)

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'James Hughes'
    });
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'James Hughes'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help Page',
        message: 'I am a help message, so helpful I know!',
        name: 'James Hughes'
    })
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address!'
        })
    }
    geocodeService(req.query.address, (error, { latitude, longitude, location }) => {
        if (error) {
            return res.send({ error })
        }

        forecastService (latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send ({ error })
            }
            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'James Hughes',
        errorMessage: 'Help article not found'
    })
})

// * means match anything that hasn't been matched so far
// route handler needs to come last after all other routes set up
app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'James Hughes',
        errorMessage: 'Page not found'
    });
})

app.listen(3000, (req, res) => {
    console.log('App listening on port 3000');
});