// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

//Add class = hidden to the id = modal and then hide it
document.addEventListener('DOMContentLoaded', hideModalElement())

function hideModalElement(){
  let modal = document.getElementById('modal')
  modal.hidden = true
}

function restoreModalElement(){
  let modal = document.getElementById('modal')
  modal.hidden = false
}

//Adding the Event Listener
document.addEventListener('click', handleClick)

//Handling the click event on the target (heart button)
function handleClick(e){
  if (e.target.className === "like-glyph") {
    if (e.target.textContent = EMPTY_HEART){
      //input empty heart click here
    //input full heart click here

    }
  }
}
// Empty Heart Click



//Fetch Request



//Full Heart Click



//Hide the error message







//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
