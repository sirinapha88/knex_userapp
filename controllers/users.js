var express = require("express");
var router = express.Router();
var knex = require("../db/knex");
require("locus");

router.get('/',function(req,res){
	knex('users').then(function(users){
		// eval(locus);  // instead of using console.log use locu to debug.
		// console.log(users);
		res.render("index", {users:users});
	});
});
// Get /users/new
router.get('/new',function(req,res){
	res.render("new");
});

router.post('/',function(req,res){
	knex('users').insert(req.body).then(function(){
		res.redirect('/users');
	});
});

module.exports = router;