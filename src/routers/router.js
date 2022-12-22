const express = require("express");

const { quizGame, postQuestion } = require("../controller/quiz");


const router = express.Router();

router.post("/postQuestion", postQuestion);
router.get("/quizGame",quizGame)


module.exports = router;