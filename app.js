/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var scores, roundScore, activePlayer, dice, dice2, play, previousRoundScore;
initJeux();


document.querySelector('.btn-roll').addEventListener('click', function(){
    
    if(play){
    dice = Math.floor(Math.random() * 6)+ 1;
    dice2 = Math.floor(Math.random() * 6)+ 1;    
    console.log(dice);
    console.log(dice2);    
    var diceImg= document.querySelector('.dice');
    diceImg.style.display= 'block';
    diceImg.src = 'dice-'+ dice +'.png';
    var dice2Img= document.querySelector('.dice2');
    dice2Img.style.display= 'block';
    dice2Img.src = 'dice-'+ dice2 +'.png';    
    var currentDom = document.querySelector('#current-' + activePlayer);  
        
    if(activePlayer == 0){
        if(dice == 6 && dice2 == 6 && previousRoundScore == 12){
           scores[activePlayer]= 0;
           roundScore = 0;
           currentDom.textContent= 0;     
           document.querySelector('#score-'+ activePlayer).textContent= 0;
           document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
           activePlayer = 1;
           document.querySelector('.player-'+activePlayer+'-panel').classList.add('active');
           dice = dice2 = 0;     
           }
        else if(dice == 1 || dice2 == 1){
        currentDom.textContent= 0; 
        roundScore = 0; 
        activePlayer = 1; 
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('active');    
        } else{
        roundScore = roundScore +(dice + dice2);    
        currentDom.textContent= roundScore;    
        }
        
    } else {
        
        if(dice == 6 && dice2 == 6 && previousRoundScore == 12){
           scores[activePlayer]= 0;
           roundScore = 0;
           currentDom.textContent= 0; 
           document.querySelector('#score-'+ activePlayer).textContent= 0;
           document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
           activePlayer = 0;
           document.querySelector('.player-'+activePlayer+'-panel').classList.add('active');
           dice = dice2 = 0;        
          }
        else if(dice == 1 || dice2 == 1){
        currentDom.textContent= 0; 
        roundScore = 0; 
        activePlayer = 0;    
        document.querySelector('.player-1-panel').classList.remove('active');
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('active');
        }
        else{
        roundScore = roundScore +(dice + dice2);      
        currentDom.textContent= roundScore;}
        
          }
        
        previousRoundScore = dice + dice2;
    }
});

document.querySelector('.btn-hold').addEventListener('click',function(){
    
    if(play){
        
     var inputFinalScore = document.querySelector('.final-score').value;
     var winningScore;   
        if(inputFinalScore)
            winningScore = inputFinalScore;
        else
            winningScore = 100;
        
    if(activePlayer == 0)
    {
        scores[activePlayer] += roundScore;
        document.querySelector('#score-'+ activePlayer).textContent= scores[activePlayer];
        if(scores[activePlayer] < winningScore){
        roundScore=0;
        document.querySelector('#current-'+ activePlayer).textContent= roundScore;
        activePlayer = 1;
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('active');
        } else {
            
            document.querySelector('#name-'+ activePlayer).textContent = 'Winner!';
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            document.querySelector('.player-'+ activePlayer +'-panel').classList.add('winner');
            play = false;
        }
        
    } else{
        
        scores[activePlayer] += roundScore;
        document.querySelector('#score-'+ activePlayer).textContent= scores[activePlayer];
        if(scores[activePlayer] < winningScore){
        roundScore= 0;
        document.querySelector('#current-'+ activePlayer).textContent= roundScore;
        activePlayer = 0;
        document.querySelector('.player-1-panel').classList.remove('active');
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('active');
        } else{
            
            document.querySelector('#name-'+ activePlayer).textContent = 'Winner!';
            document.querySelector('.player-'+ activePlayer +'-panel').classList.remove('active');
            document.querySelector('.player-'+ activePlayer +'-panel').classList.add('winner');
            play = false;
        }
        
       }
        previousRoundScore = 0;
    }
     
});

document.querySelector('.btn-new').addEventListener('click',initJeux);


function initJeux(){
    
alert("- The game has 2 players, playing in rounds. In each turn, a player rolls two dices as many times as he whishes. Each result get added to his ROUND score BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn he player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn. A player looses his ENTIRE score when he rolls two double 6 in a row. After that, it's the next player's turn. By Default The first player to reach 100 points on GLOBAL score wins the game but you can set the final winning score via the input below the 'Hold button'.");  
    
play = true;    
scores =  [0,0];
roundScore = 0;   
activePlayer = (Math.random() >= 0.5)? 1 : 0;

document.querySelector('#score-0').textContent= 0;
document.querySelector('#score-1').textContent= 0;
document.querySelector('#current-0').textContent= 0; 
document.querySelector('#current-1').textContent= 0;
document.querySelector('.dice').style.display= 'none';
document.querySelector('.dice2').style.display= 'none';    
document.querySelector('#name-0').textContent = 'Player 1';
document.querySelector('#name-1').textContent = 'Player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');    
  

 if(activePlayer !== 0){
     document.querySelector('.player-0-panel').classList.remove('active');
     document.querySelector('.player-'+activePlayer+'-panel').classList.add('active');
     
 }else
     {
         document.querySelector('.player-1-panel').classList.remove('active');
         document.querySelector('.player-'+activePlayer+'-panel').classList.add('active');
     }
      

}



/*function rollTwiceSix(){
    
    var currentDom = document.querySelector('#current-' + activePlayer);
    //dice == 6 ? six += dice : sixe = 0;
    if(dice == 6)
        six += dice;
    else
        six = 0;
    
    if(six == 12 && activePlayer == 0){
    scores[activePlayer]=0;
    roundScore=0;    
    document.querySelector('#score-'+ activePlayer).textContent= 0;
    currentDom.textContent= 0;
    document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
    activePlayer = 1;
    document.querySelector('.player-'+activePlayer+'-panel').classList.add('active');    
    }else if(six == 12 && activePlayer ==1){
    scores[activePlayer]=0;
    roundScore=0;     
    document.querySelector('#score-'+ activePlayer).textContent= 0;
    currentDom.textContent= 0;
    document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
    activePlayer = 0;
    document.querySelector('.player-'+activePlayer+'-panel').classList.add('active');   
    }else{
        roundScore += dice;    
        currentDom.textContent= roundScore;
    }
        
}*/










