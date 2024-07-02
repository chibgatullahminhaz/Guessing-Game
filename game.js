let totalAttempts=5;
let attempts = 0;
let totalWons = 0;
let totallosts = 0;



// finding Elements 
const form = document.querySelector("form");
const cardBody =document.querySelector(".card-body");
const guessingNumber =form.querySelector("#guseeingGame");
const checkButton =form.querySelector("#check")
const lostWonMessage = document.createElement("p");
const resutltText =cardBody.querySelector(".resultText");
const remainingAttempts =cardBody.querySelector(".remainingAttempts");

form.addEventListener("submit",function(event){
    event.preventDefault();

    attempts++;
    if(attempts === 5){
    guseeingGame.disabled = true;
    checkButton.disabled = true;
    }
    if(attempts < 10){
        let guessNumber= Number(guessingNumber.value);
        checkResult(guessNumber)
        remainingAttempts.innerHTML = `Reamining Attempts:${totalAttempts - attempts
        }` ;
       
    }
    guessingNumber.value = "";
});

function checkResult(guessingNumber){
const randomNumber = getRandomNumber(5);
if(guessingNumber === randomNumber){
    resutltText.innerHTML=`you hav won`;
    totallosts++;
}else{
     resutltText.innerHTML=`you have lost: randome number was ${getRandomNumber}` ;
totalAttempts++;
}
lostWonMessage.innerHTML= `won:${totalWons}, lost:${totallosts}`;
lostWonMessage.classList.add("large-text");
cardBody.appendChild(lostWonMessage);

}


function getRandomNumber(limit){
    return Math.floor(Math.random() * limit) + 1;
}
