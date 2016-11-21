var BreweryDB = require('brewerydb-node')
var brewdb = new BreweryDB('1d6f8add434581b852368b775327369c')
var express = require('express')
var app = express()

app.get('/', function(req, res) {
    res.send('Hello world');
});

app.get('/test', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    var query = req.query["query"]
    console.log(query)
    brewdb.search.breweries( { q: query }, function(Error, data) {
        res.send(data)
    });
});

app.listen(3000, function() {
    console.log('Listening on port 3000');
})