let score=JSON.parse(localStorage.getItem('score'));
      if(score===null){
        score={
        wins:0,
        losses:0,
        ties:0
        };
      }
      let intervalid;
      let autoplaying=false;
      document.querySelector('.js-button-rock').addEventListener('click',()=>{
        playGame('Rock');
      });
      document.querySelector('.js-button-paper').addEventListener('click',()=>{
        playGame('Paper');
      });
      document.querySelector('.js-button-scissor').addEventListener('click',()=>{
        playGame('Scissors');
      });
      document.body.addEventListener('keydown',(event)=>{
       if(event.key==='r'){
        playGame('Rock');
       }
       else if(event.key==='p'){
        playGame('Paper');
       }
       else if(event.key==='s'){
        playGame('Scissors');
       }
      });
      scoreCounting();
      function autoPlay(){
        if(!autoplaying){
          intervalid=setInterval(function(){
            const playermove=pickComputerMove();
            playGame(playermove);
          },1000);
          autoplaying=true;
        }
        else{
          clearInterval(intervalid);
          autoplaying=false;
        }
       }
      function playGame(playermove)
      {
      let computerMove=pickComputerMove();
      let result='';
      if(playermove==='Scissors')
      {
      if(computerMove==='Rock'){
        result='Lose';
      }
      else if(computerMove==='Paper'){
        result='Win';
      }
      else if(computerMove==='Scissors'){
        result='Tie';
      }
      if(result==='Win')
      {
        score.wins+=1;
      }
      else if(result==='Lose')
      {
        score.losses+=1;
      }
      else if(result==='Tie')
      {
        score.ties+=1;
      }
      }  
      else if(playermove==='Paper')
      {
      if(computerMove==='Rock'){
        result='Win';
      }
      else if(computerMove==='Paper'){
        result='Tie';
      }
      else if(computerMove==='Scissors'){
        result='Lose';
      }
      if(result==='Win')
      {
        score.wins+=1;
      }
      else if(result==='Lose')
      {
        score.losses+=1;
      }
      else if(result==='Tie')
      {
        score.ties+=1;
      }
      }
      else if(playermove==='Rock')
      {
      if(computerMove==='Rock'){
        result='Tie';
      }
      else if(computerMove==='Paper'){
        result='Lose';
      }
      else if(computerMove==='Scissors'){
        result='Win';
      }
      if(result==='Win')
      {
        score.wins+=1;
      }
      else if(result==='Lose')
      {
        score.losses+=1;
      }
      else if(result==='Tie')
      {
        score.ties+=1;
      }
      }
       /*localStorage does not delete after  refreshing page*/
       localStorage.setItem('score', JSON.stringify(score));/*Json.stringfy() is used to convert Javascript object into JSon Object*/
       scoreCounting();
        document.querySelector('.js-result').innerHTML=`You: ${result}`;
        document.querySelector('.js-move').innerHTML=`You picked:<img class="move-icon" src="images/${playermove}-emoji.png">  Computer picked:<img class="move-icon" src="images/${computerMove}-emoji.png">`;
      }
      function pickComputerMove(){
      let randomNumber=Math.random();
      let computerMove='';
      if(randomNumber>=0 && randomNumber<1/3){
      computerMove='Rock';
      }
      else if(randomNumber>=1/3 && randomNumber<2/3){
      computerMove='Paper';
      }
      else if(randomNumber>=2/3 && randomNumber<1){
        computerMove='Scissors';
      }
      return computerMove;
      }
      function scoreCounting(){
        document.querySelector('.js-score').innerHTML=`Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
      }