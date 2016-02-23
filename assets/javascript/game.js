
var wins=0;
var losses=0;

function startGame () {
var compScore= Math.floor(Math.random() * (120 - 19 + 1) + 19);
var playerScore=0;


	var coinValue1= Math.floor(Math.random() * (12 - 1 + 1) + 1);
	var coinValue2= Math.floor(Math.random() * (12 - 1 + 1) + 1);
	var coinValue3= Math.floor(Math.random() * (12 - 1 + 1) + 1);
	var coinValue4= Math.floor(Math.random() * (12 - 1 + 1) + 1);

	document.getElementById("compScore").innerHTML = compScore;
	document.getElementById("playerScore").innerHTML = playerScore;
//assign random score 

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
};

startGame();

