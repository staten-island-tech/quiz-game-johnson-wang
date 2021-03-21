console.log("connected");
import { DOMSelectors } from "./DOMSelectors";
import { questions } from "./questions";

let score = 0;
let index = 0;

//switches from the landing page to the quiz page
DOMSelectors.start.addEventListener("click", () => {
  DOMSelectors.landing.style.display = "none";
  DOMSelectors.quizGame.style.display = "flex";
});

//shows the questions and choices
function showQuestions() {
  DOMSelectors.questionNo.innerHTML = index + 1 + ". ";
  DOMSelectors.quizQuestion.innerHTML = questions[index].question;
  DOMSelectors.choice1.innerHTML = questions[index].choices[0];
  DOMSelectors.choice2.innerHTML = questions[index].choices[1];
  DOMSelectors.choice3.innerHTML = questions[index].choices[2];
  DOMSelectors.choice4.innerHTML = questions[index].choices[3];
}

showQuestions();

DOMSelectors.nextBtn.addEventListener("click", () => {
  if (index <= questions.length - 2) {
    index++;
    showQuestions();
  }
});
