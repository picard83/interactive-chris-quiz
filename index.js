const helloButton = document.querySelector(".hi");
const hide = document.querySelector(".hidden");
const quizform1 = document.querySelector(".quiz-form1");
//RIDDLES
const riddelAnswer = document.querySelector(".RiddelAnswer");
const riddelBtn = document.querySelector(".riddelCheck");
const riddelAnswer1 = document.querySelector(".RiddelAnswer1");
const riddelAnswer2 = document.querySelector(".RiddelAnswer2");
const riddelBtn2 = document.querySelector(".riddelCheck2");
const riddelBtn1 = document.querySelector(".riddelCheck1");

//experiment
// const year = document.querySelector(".year");

////////////////////////
helloButton.addEventListener("click", function () {
  alert("GOODLUCK ON THE QUIZ 😅!!");
});

//CHECK BUTTON TO RIDDELS/////
riddelBtn.addEventListener("click", function () {
  if (riddelAnswer.value === "newspaper") {
    riddelBtn.style.boxShadow =
      "0 18px 35px green, 0 15px 12px rgba(0, 0, 0, 0.22)";
    riddelAnswer.style.backgroundColor = "green";
    riddelBtn.innerHTML = "☑️";
    // alert("YOU GOT IT ! GOOD JOB 🟢");
  } else {
    riddelBtn.style.boxShadow =
      "0 18px 35px red, 0 15px 12px rgba(0, 0, 0, 0.22)";
    riddelAnswer.style.backgroundColor = "orangered";
  }
  console.log(riddelBtn);
});
console.log(riddelAnswer.value);

riddelBtn1.addEventListener("click", function () {
  if (riddelAnswer1.value === "the future") {
    riddelBtn1.style.boxShadow =
      "0 18px 35px green, 0 15px 12px rgba(0, 0, 0, 0.22)";
    riddelAnswer1.style.backgroundColor = "green";
    riddelBtn1.innerHTML = "☑️";

    // alert("YOU GOT IT ! GOOD JOB 🟢");
  } else {
    riddelBtn1.style.boxShadow =
      "0 18px 35px red, 0 15px 12px rgba(0, 0, 0, 0.22)";
    riddelAnswer1.style.backgroundColor = "orangered";
    // alert("TRY AGAIN 🔴");
  }
});

riddelBtn2.addEventListener("click", function () {
  if (riddelAnswer2.value === "a towel") {
    riddelBtn2.style.boxShadow =
      "0 18px 35px green, 0 15px 12px rgba(0, 0, 0, 0.22)";
    riddelAnswer2.style.backgroundColor = "green";
    riddelBtn2.innerHTML = "☑️";

    // alert("YOU GOT IT ! GOOD JOB 🟢");
  } else {
    riddelBtn2.style.boxShadow =
      "0 18px 35px red, 0 15px 12px rgba(0, 0, 0, 0.22)";
    riddelAnswer2.style.backgroundColor = "orangered";
    // alert("TRY AGAIN 🔴");
  }
});
// END OF CHECK RIDDLES BUTTONS //
