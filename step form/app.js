var nextStepBtns = document.querySelectorAll(".next-step");
var previousBtns = document.querySelectorAll(".previous-step");
var stepNumbers = document.querySelectorAll(".step");

var stepInputs = document.querySelectorAll(".step-inputs");

var nameInput = document.getElementById("fname");
var lastNameInput = document.getElementById("lname");
var emailInput = document.getElementById("email");
var commentField = document.getElementById("comment");

var currentStep = 1;
nextStepBtns.forEach(function(btn) {
  btn.addEventListener("click", function() {
    var nextStep = btn.dataset.next;
    var cuurentStep = btn.dataset.current;
    checkInputs(cuurentStep, nextStep, event);
  });
});

previousBtns.forEach(function(btn) {
  btn.addEventListener("click", function() {
    var previousStep = btn.dataset.previous;
    goToNextStep(previousStep);
  });
});

function checkInputs(current, step, e) {
  e.preventDefault();

  switch (current) {
    case "1":
      checkName(step);
      break;
    case "2":
      checkEmail(step);
      break;
    case "3":
      currentStep = 4;
      goToNextStep(step);
      break;
    case "4":
      submitForm();
      break;
  }
}

function checkName(nextStep) {
  var fname = false;
  var lname = false;

  if (nameInput.value != "") {
    fname = true;
    nameInput.classList.remove("err");
  } else {
    nameInput.classList.add("err");
  }
  if (lastNameInput.value != "") {
    lname = true;
    lastNameInput.classList.remove("err");
  } else {
    lastNameInput.classList.add("err");
  }
  if (fname && lname == true) {
    console.log("pass");
    goToNextStep(nextStep);
    currentStep = 2;
  } else {
    console.log("err");
  }
}

function checkEmail(nextStep) {
  var email = emailInput.value;
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (!reg.test(email)) {
    // return false;
    emailInput.classList.add("err");
  } else {
    emailInput.classList.remove("err");
    goToNextStep(nextStep);
    currentStep = 3;
  }
}

function submitForm() {
  var fnameValue = nameInput.value;
  var lnameValue = lastNameInput.value;
  var emailValue = emailInput.value;
  var commentFieldValue = commentField.value;

  console.log(
    "fname Value: " + fnameValue,
    "\n lnameValue: ",
    lnameValue,
    "\n emailValue: ",
    emailValue,
    "\n commentFieldValue: ",
    commentFieldValue
  );
  var message = document.getElementById("message");
  message.classList.add("show");
}

function goToNextStep(nextStep) {
  stepNumbers.forEach(function(step) {
    if (step.id == nextStep) {
      step.classList.add("active");
    } else {
      step.classList.remove("active");
    }
  });
  stepInputs.forEach(function(inputs) {
    if (inputs.id == nextStep) {
      inputs.classList.add("show");
    } else {
      inputs.classList.remove("show");
    }
  });
}
