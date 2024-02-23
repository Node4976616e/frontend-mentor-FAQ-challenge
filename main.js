const question_1 = document.querySelector("#question-1");
const question_2 = document.querySelector("#question-2");
const question_3 = document.querySelector("#question-3");
const question_4 = document.querySelector("#question-4");
let img = 1;
addEventListener("click", function () {
  let i = document.querySelector("#answer-1");
  let b = document.querySelector("#question-1>img");

  i.classList.toggle("hidden");
  if (img == 1) {
    b.src = "images/icon-minus.svg";
    img = 0;
  } else if (img == 0) {
    b.src = "images/icon-plus.svg";
    img = 1;
  }
});
