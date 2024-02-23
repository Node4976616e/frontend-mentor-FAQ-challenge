var question_item = document.getElementsByClassName("question-item");
var i;

for (i = 0; i < question_item.length; i++) {
  question_item[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("hidden");
    let img = this.lastElementChild; // select last element child (img tag)
    /* Toggle between hiding and showing the active panel */
    var answer = this.nextElementSibling;
    if (answer.style.display === "block") {
      answer.style.display = "none";
      img.src = "images/icon-plus.svg";
    } else {
      answer.style.display = "block";
      img.src = "images/icon-minus.svg";
    }
  });
}
