const question_set = [
  {
    question: "What is the capital of Capital of India?",
    answer: [
      { text: "Delhi", correct: "true" },
      { text: "Kolkata", correct: "false" },
      { text: "Mumbai", correct: "false" },
      { text: "Chennai", correct: "false" },
    ],
  },
  {
    question: "The term ‘ Putt’ is used in the sport ______ ?",
    answer: [
      { text: "Cricket ", correct: "false" },
      { text: "Table Tennis", correct: "false" },
      { text: "Golf", correct: "true" },
      { text: "Football ", correct: "false" },
    ],
  },
  {
    question:
      "With which of the following sports is Karan Chandhok associated ?",
    answer: [
      { text: "Lawn Tennis", correct: "false" },
      { text: "Badminton", correct: "false" },
      { text: "Table Tennis", correct: "false" },
      { text: "Car Racing", correct: "true" },
    ],
  },
  {
    question:
      "In which year did Independent India win its first Olympic gold medal ?",
    answer: [
      { text: "2008", correct: "false" },
      { text: "1948", correct: "true" },
      { text: "1972", correct: "false" },
      { text: "1960", correct: "false" },
    ],
  },
  {
    question: "Capital of India",
    answer: [
      { text: "Delhi", correct: "true" },
      { text: "Kolkata", correct: "false" },
      { text: "Mumbai", correct: "false" },
      { text: "Chennai", correct: "false" },
    ],
  },
  {
    question: "The Khelo India Youth Gaes was previously called_____ ?",
    answer: [
      { text: "Khel Khelo India", correct: "false" },
      { text: "Chalo India School Games", correct: "false" },
      { text: "Khelo Bharat School Games", correct: "false" },
      { text: "Khelo India School Games", correct: "true" },
    ],
  },
  {
    question:
      "Dibyendu Barua is associated with which of the following sports ?",
    answer: [
      { text: "Chess", correct: "true" },
      { text: "Tennis", correct: "false" },
      { text: "Cricket", correct: "false" },
      { text: "Hockey", correct: "false" },
    ],
  },
  {
    question:
      "____ was Independent India's first individual Olympic medalist ?",
    answer: [
      { text: "Norman Pritchard ", correct: "false" },
      { text: "KD Jadhav", correct: "true" },
      { text: "Leander Paes ", correct: "false" },
      { text: "Karnam Malleshwari", correct: "false" },
    ],
  },
  {
    question: "The term ‘Cherry Picking’ is used in which sport ?",
    answer: [
      { text: "Table Tennis", correct: "false" },
      { text: "Swimming", correct: "false" },
      { text: "Basketball", correct: "true" },
      { text: "Cricket ", correct: "false" },
    ],
  },
  {
    question: "The term ‘Dolphin Kick’ is associated with which sport ?",
    answer: [
      { text: "Cricket ", correct: "false" },
      { text: "Swimming", correct: "true" },
      { text: "Rugby", correct: "false" },
      { text: "Football", correct: "false" },
    ],
  },
];

const questions = document.getElementById("question");
const answer = document.getElementById("answer");
const tailwindClasses =
  "text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 m-5 w-3/5 justify-self-center";
const btn = "w-full h-full";


let score = 0;
let CurrentQuestionNo = 0;

function start() {
  console.log("Enter Start");
  score = 0;
  CurrentQuestionNo = 0;
  show();
}
function show() {
  if (CurrentQuestionNo > 9) {
    buttonReset();
    Result();
    console.log(score);
  } else {
    buttonReset();
    console.log("Enter Show");
    let QuestionText = question_set[CurrentQuestionNo];
    let QuestionNO = CurrentQuestionNo + 1;
    questions.innerHTML = QuestionNO + ". " + QuestionText.question;

    QuestionText.answer.forEach((ans) => {
      const NewDiv = document.createElement("div");
      const NewButton = document.createElement("button");
      NewDiv.className = tailwindClasses;
      NewButton.className = btn;
      NewButton.innerHTML = ans.text;
      NewDiv.appendChild(NewButton);
      answer.appendChild(NewDiv);

      if (ans.correct == "true") {
        var a = ans.text;
        console.log(a);
      }

      NewButton.addEventListener("click", () => {
        console.log("Clicked");
        Checkin(ans.correct, a);
      });
    });
  }
}

function buttonReset() {
  while (answer.firstChild) {
    answer.firstChild.remove();
  }
}
function Checkin(e, c) {
  console.log("Checking");
  console.log(c);
  buttonReset();
  const div = document.createElement("div");
  const button = document.createElement("p");
  div.className = tailwindClasses;
  div.appendChild(button);
  answer.appendChild(div);

  if (e === "true") {
    score++;
    button.innerHTML = "Your answer is correct";
  } else {
    button.innerHTML = "Wrong: Answer is" + c;
  }
  CurrentQuestionNo++;
  setTimeout(() => {
    show();
  }, 2000);
}
function Result() {
  console.log("Enter Result");
  questions.innerHTML = "Your Score is " + score;

  const d = document.createElement("div");
  const b = document.createElement("button");
  d.className = tailwindClasses;
  b.innerHTML = "Play Again";
  d.appendChild(b);
  answer.appendChild(d);

  b.addEventListener("click", () => {
    start();
  });
}
start();
