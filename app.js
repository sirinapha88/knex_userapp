var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var userRoutes = require("./controllers/users");


app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req,res){
	res.render('/users');
});

app.use('/users', userRoutes);

app.listen(3000, function(){
	console.log("Server is stated on port 3000");
});