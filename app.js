
var scores, roundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 1;


document.querySelector('#current-' + activePlayer).textContent = dice;

document.querySelector('.btn-roll').addEventListener('click', function(){

    //Random number
    var dice = Math.floor(Math.random() *6 ) +1;

});