
var scores, roundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0;
 
//Impostiamo il display none per il dado
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0'


//Event Listener click
    document.querySelector('.btn-roll').addEventListener('click', function(){
        //1.Random number
        var dice = Math.floor(Math.random() * 6) + 1;


        //2. Mostro il  risultato
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display='block';
        diceDOM.src = 'dice-' + dice + '.png';

        //3.Update the round score if the rolled number was not 1
        
        if(dice !== 1){
            //Add score
            roundScore += dice;
            document.querySelector('#current-' +activePlayer).textContent = roundScore;

        } else {
            //Next Player (player 1)
            activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
            roundScore = 0;

            document.getElementById('current-0').textContent='0';
            document.getElementById('current-1').textContent='0';

            //Remove 'active' class
            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');
            
            // display none dado
            document.querySelector('.dice').style.display='none';
            
        }

    })

