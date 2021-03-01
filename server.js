//Import necessary packages
const Express = require("express");
const app = Express();
const path = require("path");
const cors = require("cors");

//Middlewares
app.use(cors());
app.use(Express.static(path.join(__dirname, "client", "build")));
app.use(Express.json());
app.use(Express.urlencoded({extended: true}));
app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

//Listen
const port = process.env.PORT || 3300;
app.listen(port, () => {
	console.log("Express server running on port " + port);
});