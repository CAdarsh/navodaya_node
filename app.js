var express = require('express');
var AWS = require('aws-sdk');
var app = express();
app.use(express.static('./public'));
var value = "Adarsh";
app.get('/',(req,res) => {
    res.render('index.ejs',{value:value});
});
app.get("/photo_gallery",(req,res) => {
    res.render('photoG.ejs');
});
app.get("/video_gallery",(req,res) => {
    res.render('videoG.ejs');
});


app.listen(80, function () {
  console.log('Example app listening on port 80!');
  //call this app from https://<workspace name>-<user name>.c9users.io
});
