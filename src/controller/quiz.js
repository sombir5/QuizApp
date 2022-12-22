const Quiz = require("../modal/quiz.modal");

const postQuestion = async (req, res) => {
  try {
    let question = await Quiz.create(req.body);
    question.save();
    console.log(question);
    return res.send({ data: question });
  } catch (error) {
    console.log(error.message);
  }
};
const quizGame = async (req, res) => {
   let {page=1,limit=1,
   category,difficulty,questions
   } = req.query;
  try {
    if (category && difficulty) {
      let question = await Quiz.find({
        category: category,
        difficulty: difficulty,
      })
        .skip((page - 1) * limit)
        .limit(questions);

      console.log(question);
 return res.send({ data: question, totalPages: questions});
    }
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { quizGame, postQuestion };
