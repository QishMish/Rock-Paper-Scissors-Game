// start game
const playButton = document.querySelector('.play-button');
const startWindow = document.querySelector('.start');
const endWindow = document.querySelector('.end');
const endWindowH1 = document.querySelector('.h1-text');
const gameContainer = document.querySelector('.container');
const replayButton = document.querySelector('.replay-button');


playButton.addEventListener('click', ()=>{
    startWindow.classList.add('fadeOut');
    gameContainer.classList.add('fadeIn');
})

let pScore = 0;
let cScore = 0;
let tiesScore = 0;
const winNumber = 10;

const options = document.querySelectorAll('.options button');
const playerHand = document.querySelector('.player-hand');
const computerHand = document.querySelector('.computer-hand');
const hands = document.querySelectorAll('.game img');

const game = () =>{
    
 


    const computerOptions = ["rock", "paper", "scissors"];


    hands.forEach(hand => {
        hand.addEventListener("animationend", function() {
          this.style.animation = "";
        });
      });


    options.forEach(option =>{
        option.addEventListener('click', function(e){
        
            const playerChoice = e.target.textContent

            const computerNumber = Math.floor(Math.random() * 3);
            const computerChoice = computerOptions[computerNumber];

            console.log(playerChoice)
            console.log(computerChoice)
            playerHand.style.animation = 'shakePlayer 2s ease';
            computerHand.style.animation = 'shakeComputer 2s ease';
  
            setTimeout(() => {
                
                compareHands(e.target.textContent, computerChoice);

                playerHand.src = `./images/${playerChoice}.png`;
                computerHand.src = `./images/${computerChoice}.png`;
              }, 2000);



        })
    })


    const updateScore = ()=>{
      const playerScore = document.querySelector(".player-score span");
      const computerScore = document.querySelector(".computer-score span");
      const ties = document.querySelector(".ties span");
      playerScore.textContent = pScore;
      computerScore.textContent = cScore;
      ties.textContent = tiesScore;
    }

    const compareHands=(playerChoice, computerChoice)=>{
      const result = document.querySelector(".result");

      if (playerChoice === computerChoice){
        result.textContent = "It is a tie";
        tiesScore++;
        updateScore();
        checkWinner();
        console.log(cScore)
        return
      }
      if (playerChoice === "rock") {
        if (computerChoice === "scissors" ) {
          result.textContent = "Player Won";
          pScore++;
          updateScore();
          checkWinner();
          return;
        }else {
          result.textContent = "Computer Won";
          cScore++;
          updateScore();
          checkWinner();
          return;
        }
      }
    
    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        result.textContent = "Computer Won";
        cScore++;
        updateScore();
        checkWinner();
        return;
      } else {
        result.textContent = "Player Won";
        pScore++;
        updateScore();
        checkWinner();
        return;
      }
    }
    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        result.textContent = "Computer Won";
        cScore++;
        updateScore();
        return;
      } else {
        result.textContent = "Player Won";
        pScore++;
        updateScore();
        checkWinner();
        return;
      }
    }

}

const checkWinner = ()=>{

  const indicator = (message)=>{
    endWindow.classList.add('fadeIn');
    gameContainer.style.display ="none";
    let h1= document.createElement("H1");
    let text=document.createTextNode(message);
    h1.appendChild(text);
    endWindowH1.appendChild(h1)
  }
  if(pScore === winNumber){
    setTimeout(() => {
      indicator("Player Won The Game")
    }, 1200);
  } else if(cScore === winNumber ){
    setTimeout(() => {
      indicator("Computer Won The Game")
    }, 1200);
  } else if(tiesScore === winNumber){
    setTimeout(() => {
      indicator("tie")
    }, 1200);
    
  }
}

}
replayButton.addEventListener('click', ()=>{
  location.reload();
})


game();

// rules slider//

const hamburger = document.querySelector(".rules");
const rulesSlider = document.querySelector(".rules-slider");
const close = document.querySelector(".rules-close");


hamburger.addEventListener('click',()=>{
  rulesSlider.classList.add("show");
  hamburger.classList.add("rules-close")
  close.classList.add("close-rules")
})
close.addEventListener('click',()=>{
  rulesSlider.classList.remove("show");
  close.classList.remove("close-rules")
  hamburger.classList.remove("rules-close")
})