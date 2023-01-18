// DEPENDENCIES: Modules
const express = require("express");
const router = express.Router();

// DEPENDENCIES: Local
const Item =  require("../models/Item.js");
const itemController =  require("../controllers/controller.js");

// ROUTES--------------------------------------------------------------

// ITEM CREATION
router.post("/add",  (request, response) => {
	itemController.addItem(request.body)
	.then(resultFromController => response.send(resultFromController));
});

// GET ALL ITEMS
router.get("/all", (request, response) => {
	itemController.getItems()
	.then(resultFromController => response.send(resultFromController));
});


// EXPORT ITEM ROUTES
module.exports = router;
