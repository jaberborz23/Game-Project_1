;(function() {
     
    const formElm = document.querySelector('form')
    const inputElm  = document.querySelector('#luck-input')
    const winScoreElm  = document.querySelector('.lucky-number span')
    const winPlayerElm  = document.querySelector('.winner')
    const p1BtnElm  = document.querySelector('.p1Btn')
    const p2BtnElm  = document.querySelector('.p2Btn')
    const p1ScoreElm  = document.querySelector('.p1')
   const p2ScoreElm = document.querySelector('.p2')
   const resetBtnElm = document.querySelector('#resetBtn')
    
    
   //  data store
   let p1Score = 0;
   let p2Score = 0;
   let winningScore = generateRandomWinningScore();
   let gameOver = false;
   let winner = null;
   let p1Turn = true;
   let p2Turn = false;
   
   function setInitialValue() {
       p1Score = 0;
    p2Score = 0;
    winningScore = generateRandomWinningScore;
    gameOver = false;
    winner = null;
    p1Turn = true;
    p2Turn = false;
   
   }
   function setInitialPlayerTurnValue() {
       const player = randomizeStartPlayer()
       
       if (player === 'p1Turn') {
           p1Turn = true
           p2BtnElm.setAttribute('disabled','disabled')
           p1BtnElm.removeAttribute('disabled')
       } else {
           p2Turn = true
           p1BtnElm.setAttribute('disabled','disabled')
           p2BtnElm.removeAttribute('disabled')
       }
     
    }
   
   setInitialPlayerTurnValue()
   
   function randomizeStartPlayer() {
       const players = ['p1Turn', 'p2Turn']
       const index = Math.floor((Math.random() * players.length))
       const player = players[index]
       return player
    }
   
   
    function generateRandomWinningScore() {
       return Math.floor(Math.random() * 10) + 1
   }
   
   function identifyWinningState() {
       if (p1Score === winningScore || p2Score === winningScore) {
           gameOver = true
       }
   }
   function identifyWinner() {
       if (p1Score === winningScore) {
           winner = 'p1'
           winPlayerElm.textContent = 'Player 1 is winner';
       } else if (p2Score === winningScore) {
           winner = 'p2'
           winPlayerElm.textContent = 'Player 2 is winner';  
        }
       
   }
   
   
   
   function disableBtnInput() {
       p1BtnElm.setAttribute('disabled','disabled')
       p2BtnElm.setAttribute('disabled','disabled')
   }
   function resetInput() {
       p1Score = 0;
       p2Score = 0;
       winningScore = generateRandomWinningScore();
       gameOver = false;
       winner = null;
       winScoreElm.textContent = winningScore
   p1ScoreElm.textContent = p1Score
   p2ScoreElm.textContent = p2Score
   winPlayerElm.textContent = ''
   
      p1BtnElm.removeAttribute('disabled')
      p2BtnElm.removeAttribute('disabled')
   
   
    }
   
   function validateInput(elmVal) {
       if (elmVal.trim() !== '' || Number(elmVal) !== Number(elmVal)|| Number(elmVal) < 0) {
          
           alert('input a valid number') 
           return false
       } else {
           return true
       }
   }
   
   
   
   //  setting winning score into DOM
   
   winScoreElm.textContent = winningScore
   
   // //   disable p2Turn
   // p2BtnElm.setAttribute('disabled','disabled')
   
   p1BtnElm.addEventListener('click', (evt) => {
       
       if (p1Turn) {
           p1Score++
           p1ScoreElm.textContent = p1Score  
           identifyWinningState()
           
           identifyWinner()
           p1Turn = false
           p1BtnElm.setAttribute('disabled','disabled')
           p2BtnElm.removeAttribute('disabled')
           p2Turn = true
       }
       if (gameOver) {
           disableBtnInput()
       } 
       
   })
   
   
   
   p2BtnElm.addEventListener('click', (evt) => {
       if (p2Turn) {
           p2Score++
           p2ScoreElm.textContent = p2Score
           identifyWinningState()
           identifyWinner()
           p2Turn = false
           p2BtnElm.setAttribute('disabled','disabled')
           p1BtnElm.removeAttribute('disabled')
         p1Turn = true
   
       }
       if (gameOver) {
           disableBtnInput()
       }  
       
      
   })
   
   resetBtnElm.addEventListener('click', (evt) => {
    
        resetInput()
   })
   
   formElm.addEventListener('submit',(evt)=> {
       evt.preventDefault()
       // get input data
       resetInput()
       if( !validateInput(inputElm.value)) return
      
       const val = Number(inputElm.value)
   
       winningScore = val
       winScoreElm.textContent = val
       inputElm.value = ''
       setInitialPlayerTurnValue()
   })
   
   














 })()







// const formelm = document.querySelector('form');
// const inputElm = document.querySelector('#luck-input');
// const winScoreElm = document.querySelector('.lucky-number span');
// const winPlayerElm = document.querySelector('.winner');
// const p1BtnElm = document.querySelector('.p1Btn');
// const p2BtnElm = document.querySelector('.p2Btn');
// const p1ScoreElm = document.querySelector('.p1');
// const p2ScoreElm = document.querySelector('.p2');
// const resetBtn = document.querySelector('#resetBtn');

// // Data store
// let p1Score = 0;
// let p2Score = 0;
// let winningScore = 5;
// let gameOver = false;
// let winner = null;

// // Update the winning score in the DOM
// winScoreElm.textContent = winningScore;

// // Function to identify if someone has won
// function identifyWinningState() {
//     if (p1Score === winningScore || p2Score === winningScore) {
//         gameOver = true;
//     }
// }

// // Function to disable player buttons after game is over
// function disableBtnInput() {
//     p1BtnElm.setAttribute('disabled', 'disabled');
//     p2BtnElm.setAttribute('disabled', 'disabled');
// }

// // Function to identify and display the winner
// function identifyWinner() {
//     if (p1Score === winningScore) {
//         winner = 'p1';
//         winPlayerElm.textContent = 'Player 1 is the winner!';
//     } else if (p2Score === winningScore) {
//         winner = 'p2';
//         winPlayerElm.textContent = 'Player 2 is the winner!';
//     }
// }

// // Player 1 button click event
// p1BtnElm.addEventListener('click', () => {
//     if (!gameOver) {
//         p1Score++;
//         p1ScoreElm.textContent = p1Score;
//         identifyWinningState();
//         identifyWinner();
//         if (gameOver) {
//             disableBtnInput();
//         }
//     }
// });

// // Player 2 button click event
// p2BtnElm.addEventListener('click', () => {
//     if (!gameOver) {
//         p2Score++;
//         p2ScoreElm.textContent = p2Score;
//         identifyWinningState();
//         identifyWinner();
//         if (gameOver) {
//             disableBtnInput();
//         }
//     }
// });

// // Reset Button functionality to reset the game
// resetBtn.addEventListener('click', () => {
//     p1Score = 0;
//     p2Score = 0;
//     gameOver = false;
//     winner = null;

//     p1ScoreElm.textContent = p1Score;
//     p2ScoreElm.textContent = p2Score;
//     winPlayerElm.textContent = '';
    
//     // Enable buttons again
//     p1BtnElm.removeAttribute('disabled');
//     p2BtnElm.removeAttribute('disabled');
// });
