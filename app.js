
var scores, roundScore, activePlayer;
 

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
            nextPlayer();
        }

    });

    document.querySelector('.btn-hold').addEventListener('click', function(){
        //Add current score to global score
            scores[activePlayer] += roundScore;
        //Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        //Check if the player won the game
        if(scores[activePlayer] >= 4){
            document.querySelector('#name-' + activePlayer).textContent='Winnner!'
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

        }else{
            //Next player
                nextPlayer();
        }

        

    });

    function nextPlayer(){
         //Next Player (player 1)
         activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
         roundScore = 0;

         document.getElementById('current-0').textContent='0';
         document.getElementById('current-1').textContent='0';

         //Remove 'active' class or add if there isn't
         document.querySelector('.player-0-panel').classList.toggle('active');
         document.querySelector('.player-1-panel').classList.toggle('active');
         
         // display none dado
         document.querySelector('.dice').style.display='none';
         
    }

    //NEW GAME

    document.querySelector('.btn-new').addEventListener('click', init);

    //PREPARO IL TAVOLO DA GIOCO

    function init(){

    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;

    //Impostiamo il display none per il dado
    document.querySelector('.dice').style.display='none';

    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.getElementById('name-0').textContent='Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');


    }
    


