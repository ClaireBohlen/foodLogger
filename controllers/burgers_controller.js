var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
// 
var burger = require("../models/burger.js");

//GET METHOD 
router.get("/", function(req, res){
    burger.all(function(data){
        var barsObj = {
            burgers: data
        };
        console.log(barsObj);
        res.render("index", barsObj);
    });
});

//POST METHOD
router.put("/api/burgers", function(req, res){
    burger.create([
        "name", "devour"
    ], [
        req.body.name, req.body.devour
    ],
    function(result){
        res.json({ id: result.insertID});
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.update({
      devour: req.body.devour
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
});

module.exports = router;





