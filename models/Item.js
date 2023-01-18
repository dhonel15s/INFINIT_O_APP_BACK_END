// DEPENDENCIES
const mongoose = require("mongoose");


// ITEM SCHEMA
const itemSchema = new mongoose.Schema({

	image: {
		type: String,
		required: [true, "Image is required."]
	},

	title: {
		type: String,
		required: [true, "Title is required."]
	},

	description: {
		type: String,
		required: [true, "Descripion is required."]
	},

	buttonText: {
		type: String,
		required: [true, "Button text is required."]
	}
});


// EXPORT ITEM SCHEMA
module.exports = mongoose.model("Item", itemSchema);