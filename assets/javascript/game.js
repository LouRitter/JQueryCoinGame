
var wins=0;
var losses=0;

// <----------------- Declare coinValue variables here with initial values
var coinValue1= Math.floor(Math.random() * (12 - 1 + 1) + 1); 
var	coinValue2= Math.floor(Math.random() * (12 - 1 + 1) + 1);
var	coinValue3= Math.floor(Math.random() * (12 - 1 + 1) + 1);
var	coinValue4= Math.floor(Math.random() * (12 - 1 + 1) + 1);
// <----------------- 

// <----------------- Declare the score variables here with initial values
var playerScore = 0;
var compScore = 0;
// <-----------------

function startGame () {
 	compScore= Math.floor(Math.random() * (120 - 19 + 1) + 19); // <------ Take off all the var keywords now that we declared at top.
	playerScore=0;

	coinValue1= Math.floor(Math.random() * (12 - 1 + 1) + 1); // <------ Take off all the var keywords now that we declared at top.
	coinValue2= Math.floor(Math.random() * (12 - 1 + 1) + 1);
	coinValue3= Math.floor(Math.random() * (12 - 1 + 1) + 1);
	coinValue4= Math.floor(Math.random() * (12 - 1 + 1) + 1);

	document.getElementById("compScore").innerHTML = compScore;
	document.getElementById("playerScore").innerHTML = playerScore;
//assign random score 

}; // <-------------- startGame shouldn't extend over other functions. It should stop here. 

function checkGame() {
	if (playerScore==compScore){
		wins++;
		document.getElementById("wins").innerHTML = wins;
		startGame();
	}else if(playerScore>compScore){
		losses++
		document.getElementById("losses").innerHTML = losses;
		startGame();
	}
}; 



//click functions
$('#yellowCoin').click(function(){
	alert(coinValue1);
	playerScore=playerScore+coinValue1;
	document.getElementById("playerScore").innerHTML = playerScore;
	checkGame();
	
});
$('#blueCoin').click(function(){
	alert(coinValue2);
	playerScore=playerScore+coinValue2;
	document.getElementById("playerScore").innerHTML = playerScore;
	checkGame();


});
$('#redCoin').click(function(){
	alert(coinValue3);
	playerScore=playerScore+coinValue3;
	document.getElementById("playerScore").innerHTML = playerScore;
	checkGame();

		
});
$('#greenCoin').click(function(){
	alert(coinValue4);
	playerScore=playerScore+coinValue4;
	document.getElementById("playerScore").innerHTML = playerScore;
	checkGame();
});


startGame();

