var wins=0;
var losses=0;
var coinValues=[.01000000000000,.05000000000000000,.10000000000000,.250000000000000000000];
// <----------------- Declare coinValue variables here with initial values
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};
shuffle(coinValues);
console.log(coinValues);

var coinValue1=coinValues[0];
var coinValue2=coinValues[1];
var coinValue3=coinValues[2];
var coinValue4=coinValues[3];


var dollarValue1= Math.floor(Math.random() * (10 - 1 + 1) + 1); 
var	dollarValue2= Math.floor(Math.random() * (10 - 1 + 1) + 1);
var	dollarValue3= Math.floor(Math.random() * (10 - 1 + 1) + 1);
var	dollarValue4= Math.floor(Math.random() * (10 - 1 + 1) + 1);


// <----------------- Declare the score variables here with initial values
var playerScore = 0;
var compScore = 0;
var result=0;
// <-----------------

function startGame () {

	function roundNumber(num, dec) {
		result = Math.round(num*Math.pow(10,dec))/Math.pow(10,dec);
		return result;
};
	
	coinValues=[.01,.05,.10,.25];

	shuffle(coinValues);
	console.log(coinValues);
	
	coinValue1=coinValues[0];
	coinValue2=coinValues[1];
	coinValue3=coinValues[2];		
	coinValue4=coinValues[3];

	dollarValue1= Math.floor(Math.random() * (10 - 1 + 1) + 1); 
	dollarValue2= Math.floor(Math.random() * (10 - 1 + 1) + 1);
	dollarValue3= Math.floor(Math.random() * (10 - 1 + 1) + 1);
	dollarValue4= Math.floor(Math.random() * (10 - 1 + 1) + 1);


	
	compScore= Math.random() * (150 - 19 + 1) + 19; // <------ Take off all the var keywords now that we declared at top.
	playerScore=0;
	result = roundNumber(compScore, 2);

	document.getElementById("compScore").innerHTML = result;
	document.getElementById("playerScore").innerHTML = playerScore;
//assign random score 

};//<-------------- startGame shouldn't extend over other functions. It should end here.


	
	function roundNumbertwo(num, dec) {
		playerScore = Math.round(num*Math.pow(100,dec))/Math.pow(100,dec);
		return playerScore;
	};
	function checkGame() {
		if (playerScore==result){
			alert("Winner!")
			wins++;
			document.getElementById("wins").innerHTML = wins;
			startGame();
		}else if(playerScore>result){
			alert("You Lose!")
			losses++
			document.getElementById("losses").innerHTML = losses;
			startGame();
		}
	};
//click functions
$('#yellowCoin').click(function(){
	playerScore=playerScore+coinValue1;
	roundNumbertwo(playerScore,2);
	document.getElementById("playerScore").innerHTML = playerScore;
	checkGame();
	
});
$('#blueCoin').click(function(){
	playerScore=playerScore+coinValue2;
	roundNumbertwo(playerScore,2);
	document.getElementById("playerScore").innerHTML = playerScore;
	checkGame();


});
$('#redCoin').click(function(){
	playerScore=playerScore+coinValue3;
	roundNumbertwo(playerScore,2)
	document.getElementById("playerScore").innerHTML = playerScore;
	checkGame();

		
});
$('#greenCoin').click(function(){
	playerScore=playerScore+coinValue4;
	roundNumbertwo(playerScore,2)
	document.getElementById("playerScore").innerHTML = playerScore;
	checkGame();
});

//dollar amount
$('#yellowBill').click(function(){
	playerScore=playerScore+dollarValue1;
	roundNumbertwo(playerScore,2);
	document.getElementById("playerScore").innerHTML = playerScore;
	checkGame();
	
});
$('#blueBill').click(function(){
	playerScore=playerScore+dollarValue2;
	roundNumbertwo(playerScore,2);
	document.getElementById("playerScore").innerHTML = playerScore;
	checkGame();


});
$('#redBill').click(function(){
	playerScore=playerScore+dollarValue3;
	roundNumbertwo(playerScore,2);
	document.getElementById("playerScore").innerHTML = playerScore;
	checkGame();

		
});
$('#greenBill').click(function(){
	playerScore=playerScore+dollarValue4;
	roundNumbertwo(playerScore,2);
	document.getElementById("playerScore").innerHTML = playerScore;
	checkGame();
});


startGame();

