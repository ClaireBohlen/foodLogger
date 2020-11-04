const express = require("express");

const router = express.Router();

// Import the model (cat.js) to use its database functions.
// 
const burger = require("../models/burger.js");

//GET METHOD 
router.get("/", function(req, resp){
    burger.all(function(data){
        var barsObj = {
            burgers: data
        };
        console.log(barsObj);
        resp.render("index", barsObj);
    });
});

//POST METHOD
router.put("/api/burgers", function(req, resp){
    burger.create([
        "burger-name"
    ], [
        req.body.name
    ],
    function(result){
        resp.json({ id: result.insertID});
    });
});

router.put("/api/burgers/:id", function(req, resp) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.update({
      devour: req.body.devour
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return resp.status(404).end();
      } else {
        resp.status(200).end();
      }
    });
  });



module.exports = router;





