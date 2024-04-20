// Roll Dice 버튼을 클릭했을때 주사위가 굴려지고 랜덤으로 1 ~ 6 중에 숫자가 나오도록 구현
// 랜덤으로 나온 값에 따라 사용자의 CURRENT 점수가 바뀌도록 구현
const diceNumberSelector = document.querySelector("#dice-number");
const playerOneCurrentScoreSelector = document.querySelector("#player1-current-score");
const playerTwoCurrentScoreSelector = document.querySelector("#player2-current-score");
const rollDiceButton = document.querySelector("#roll-dice");
const holdDiceButton = document.querySelector("#hold");
const playerOneRealScoreSelector = document.querySelector("#player1-real-score");
const playerTwoRealScoreSelector = document.querySelector("#player2-real-score");
const newGameButton = document.querySelector("#new-game");
let diceNumber = 0;
let player1CurrentScore = 0;
let player2CurrentScore = 0;
let turnFlag = 1;
let playerOneRealScoreTemp = 0;
let playerTwoRealScoreTemp = 0;

rollDiceButton.addEventListener("click", (event) => {
    diceNumber = Math.floor(Math.random() * 6) + 1;
    if (turnFlag == 1) {
        if (diceNumber >= 1 && diceNumber < 3) {
            player1CurrentScore = 0;
            diceNumberSelector.innerHTML = diceNumber;  
            playerOneCurrentScoreSelector.innerHTML = player1CurrentScore;
            turnFlag = 0;
            console.log("turnFlag: " + turnFlag);
        } else {
            player1CurrentScore += diceNumber;
            diceNumberSelector.innerHTML = diceNumber;  
            playerOneCurrentScoreSelector.innerHTML = player1CurrentScore;
        }
    } else {
        diceNumber = Math.floor(Math.random() * 6) + 1;
        if (diceNumber >= 1 && diceNumber <= 2) {
            player2CurrentScore = 0;
            diceNumberSelector.innerHTML = diceNumber;  
            playerTwoCurrentScoreSelector.innerHTML = player2CurrentScore;
            turnFlag = 1;     
            console.log("turnFlag: " + turnFlag);       
        } else {
            player2CurrentScore += diceNumber;
            diceNumberSelector.innerHTML = diceNumber;  
            playerTwoCurrentScoreSelector.innerHTML = player2CurrentScore;
        }
    }   
});