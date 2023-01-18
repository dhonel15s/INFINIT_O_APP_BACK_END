// DEPENDENCIES: Local
const Item = require("../models/Item.js");


// FUNCTIONS-----------------------------------------------------------------------

// ITEM CREATION: ADMIN ONLY
module.exports.addItem = (requestBody) => {

	let newItem = new Item({
		image: requestBody.image,
		title: requestBody.title,
		description: requestBody.description,
		buttonText: requestBody.buttonText
	})

	return newItem.save()
	.then((newItem, error) => {
		if (error) {
			return {
				status: false,
				message: `Error encountered during adding of item.`
			}
		}else{
			return {
				status: true,
				message: `Item successfully added.`,
				details: newItem
			}
		}
	});
	
};


// GET ALL ITEMS
module.exports.getItems = () => {

	return Item.find({})
	.then(result => {
		return {
			itemList: result
		}
	})

};