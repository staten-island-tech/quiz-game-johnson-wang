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
  DOMSelectors.quizQuestion.innerHTML = questions[index].question;
  DOMSelectors.choice1.innerHTML = questions[index].choices[0];
  DOMSelectors.choice2.innerHTML = questions[index].choices[1];
  DOMSelectors.choice3.innerHTML = questions[index].choices[2];
  DOMSelectors.choice4.innerHTML = questions[index].choices[3];
}

showQuestions();

//when next button is clicked, moves on to the next index until max index is reached
DOMSelectors.nextBtn.addEventListener("click", () => {
  if (index < questions.length - 1) {
    index++;
    showQuestions();
  } else {
    DOMSelectors.quizGame.style.display = "none";
    DOMSelectors.endPage.style.display = "flex";
  }
  // Array.from(DOMSelectors.choices).forEach((choices) => {
  //   choices.style.backgroundColor = "none";
  // });
  DOMSelectors.scoreBoard.innerHTML = `You Scored: ${score}/${questions.length}`;
});

Array.from(DOMSelectors.choices).forEach(function (choice) {
  choice.addEventListener("click", function (e) {
    const selectedTarget = e.target;
    const selectedChoice = selectedTarget.innerHTML;
    if (selectedChoice === questions[index].answer) {
      selectedTarget.style.backgroundColor = "green";
      score++;
    } else {
      selectedTarget.style.backgroundColor = "red";
    }

    // for (i = 0; i <= 3; i++) {
    //   DOMSelectors.choices[i].classList.add("disabled");
    // }
  });
});
