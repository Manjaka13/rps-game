//Import necessary packages
//const Express = require("express");
import Express from "express";
const app = Express();
import path from "path";
import cors from "cors";
import api from "./routes";


//Middlewares
app.use(cors());
app.use(Express.static(path.join(__dirname, "..", process.env.HTML_DIR)));
app.use(Express.json());
app.use(Express.urlencoded({extended: true}));

//Mount RESTful API routes
app.use("/", api);

//Listen
const port = process.env.PORT || 3300;
app.listen(port, () => {
	console.log("Express server running on port " + port);
});