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

// hold 버튼을 클릭하면 각 player의 real-score에 점수를 적재한다
// 발생한 문제상황
/**
// 발생한 문제상황 
 * 상대방이 hold를 한후 내가 주사위를 돌려서 1이나왔을때
 *  currentScore = 0
 * 다시 내 차례가 되어 주사위를 돌렸는데 4가 나왔을때
 * realScore 기존값 + 4가 되어야 한다 
 * 
 * 발생한 문제상황
 * hold를 누르면 currentScore = 0이 되어야 한다
 * 왜? currentScore가 0이 되지 않으면 다음에 다시 내 차례가 되어 주사위를 돌렸을때 이전 currentScore += 주사위값이 되어 realScore가 잘못계산되기 때문이다
 * 
 * 발생했던 문제
 * innerHTML에서 가져온 값의 타입이 String이여서 문자가 그대로 더해지는 문제가 있었다
 * 이를 해결하기 위해 innerHTML 값을 number 타입으로 형변환 해줘야 한다
 */
holdDiceButton.addEventListener('click', (event) => {
    if (turnFlag == 1) {
        // 기존 realScore를 가져온다
        playerOneRealScoreTemp = Number(playerOneRealScoreSelector.innerHTML);
        playerOneRealScoreTemp += player1CurrentScore;
        // realScore에 세팅해준다
        playerOneRealScoreSelector.innerHTML = playerOneRealScoreTemp;
        player1CurrentScore = 0;
        playerOneCurrentScoreSelector.innerHTML = player1CurrentScore;

        if (playerOneRealScoreTemp >= 50) {
            alert("player1 승리");
            resetNewGame();
        }

        turnFlag = 0;
    } else {
        // 기존 realScore를 가져온다
        playerTwoRealScoreTemp = Number(playerTwoRealScoreSelector.innerHTML);
        playerTwoRealScoreTemp += player2CurrentScore;
        // realScore에 세팅해준다
        playerTwoRealScoreSelector.innerHTML = playerTwoRealScoreTemp;
        player2CurrentScore = 0;
        playerTwoCurrentScoreSelector.innerHTML = player2CurrentScore;
        
        if (playerTwoRealScoreTemp >= 50) {
            alert("player2 승리");
            resetNewGame();
        }

        turnFlag = 1;
    } 
});

newGameButton.addEventListener("click", (event) => {
    alert("게임을 다시 시작합니다."); 
    resetNewGame();
})

function resetNewGame() {
    playerOneCurrentScoreSelector.innerHTML = 0;
    playerTwoCurrentScoreSelector.innerHTML = 0;
    playerOneRealScoreSelector.innerHTML = 0;
    playerTwoRealScoreSelector.innerHTML = 0;
    diceNumberSelector.innerHTML = 0;
}