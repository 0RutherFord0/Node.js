var express = require('express');  
var app = express();  
var bodyParser = require('body-parser');  
var request = require("request");

var headers = {
    'Content-Type': 'application/json'
};

// Create application/x-www-form-urlencoded parser  
var urlencodedParser = bodyParser.urlencoded({ extended: false })  
app.use(express.static('public'));  
app.get('/index.html', function (req, res) {  
   res.sendFile( __dirname + "/" + "index.html" );  
})  



app.post('/adityatawade', urlencodedParser, function (req, res) {  
   // Prepare output in JSON format  
   response = {  
        title:req.body.title,  
        body_html:req.body.body_html,
        visible_from:req.body.visible_from,
        visible_till:req.body.visible_till  
   };  
   console.log(response);  
   res.end(JSON.stringify(response));  
})  
var server = app.listen(8000, function () {  
  var host = server.address().address  
  var port = server.address().port  
  console.log("Example app listening", host, port)  
})  

// New Code Aditya



// app.use(function(req, res, next) {
//     res.setHeader("Content-Type", "application/json");
//     next();
// });

// var options = {
//     url: 'https://iconnectsolutionspvtltd.freshservice.com/api/v2/announcements',
//     headers: headers,
//     auth: {
//         'user': '06V67kkU0TCe13xxkK',
//         'pass': 'x'
//     }
// };

// function callback(error, response, body) {
//     if (!error && response.statusCode == 200) {
//         console.log(body);
//     }
// }

// request(options, callback);
