import Express from "express";
const router = Express.Router();
import path from "path"

router.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "..", process.env.HTML_DIR));
});

router.post("/", (req, res) => {
	res.json({
		response: "POST: API works !"
	});
});

router.post("/something", (req, res) => {
	res.json({
		response: "Yes it works !"
	});
});

router.all("*", (req, res) => {
	res.sendStatus(404);
});

export default router;