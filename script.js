'use strict';


// init values
let score = 20;
let high_score = 0;
let secretNumber = Math.trunc(Math.random() * 20)+ 1;
let hint;


// when the check button is pressed (start)
document.querySelector('.check').addEventListener('click',function() {

    const guessd_number = Number(document.querySelector('.guess').value);
    if(!guessd_number){
        document.querySelector('.message').textContent = '⛔ No Number!';
    }

    // when player wins
    else if(guessd_number === secretNumber) {
        document.querySelector('.message').textContent = '🎉 Correct Number !';
        document.querySelector("body").style.backgroundColor = 'green';
        document.querySelector(".number").style.width = '30rem';
        document.querySelector(".number").textContent = secretNumber;
        if(score > high_score)
            high_score = score;
        
    }
    // when player miss the nomber (hint)
    else if(guessd_number !== secretNumber){
        if (score > 1){
            score--;
            document.querySelector('.score').textContent = score;
            if(guessd_number > secretNumber){
                hint = '📈 Too High !';
            }
            else{
                hint = '📉 Too Low !';
            }
            document.querySelector('.message').textContent = hint;
        }
        // when player lose's
        else {
            document.querySelector('.message').textContent = "💥 You Lost The Game !";
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = 'red';
        }
    }

});
// when again is pressed (restart)
document.querySelector('.again').addEventListener('click', function() {
    document.querySelector("body").style.backgroundColor = '#222';
    secretNumber = Math.trunc(Math.random() * 20)+ 1;
    score = 20;
    document.querySelector('.message').textContent = 'Start Guessing ..';
    document.querySelector(".number").style.width = '15rem';
    document.querySelector(".guess").value = '';
    document.querySelector(".number").textContent = '?';
    document.querySelector(".score").textContent = score;
    document.querySelector(".highscore").textContent = high_score;

});