// DEPENDENCIES: Modules
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// DEPENDENCIES: ROUTES
const routes = require("./routes/routes.js")


// CREATE APPLICATION
const app = express();

// MONGO-DB CONNECTION
mongoose.connect("mongodb+srv://admin:admin1234@infinit-o-app.vuoagev.mongodb.net/INFINIT-O-APP?retryWrites=true&w=majority", {
	useNewUrlParser:true, 
	useUnifiedTopology:true
});

//PROMPT MESSAGE: DB Connection is successful
mongoose.connection.once("open", () => 
	console.log(`Now connected to MongoDB: INFINIT-O-APP`));

// ADDITIONAL SETTINGS
// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// ROUTES
app.use("/items", routes);



// APP LISTENER
app.listen(process.env.PORT || 4000, () =>{
	console.log(`API is now online on port ${process.env.PORT || 4000}`)
}); 
