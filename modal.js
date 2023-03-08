console.log("here");

// select button element
const btn = document.querySelector("#openModal");
const modalDiv = document.querySelector("#modal");
console.log("btn", btn);

// add event listener on click to button
btn.addEventListener("click", btnClicked);

function btnClicked() {
    //   console.log("click");
    // remove class invisible from div modal
    modalDiv.classList.remove("invisible");
  }

// add event listener on key press Escape
document.body.addEventListener("keydown", leaveModal);

function leaveModal(event) {
    console.log("key", event.key);
    if (event.key === "Escape") {
      console.log("pressed Escape");
      // add class invisible to div modal
      modalDiv.classList.add("invisible");
    }
  }