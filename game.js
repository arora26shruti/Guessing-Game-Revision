var questionArray =[
'What is your Name?',
'Its Nice to meet you..Great Name by the way!',

'Did Shruti grew up in USA?',
'No, sorry Shruti was not born in U.S.A!',
'Yay! You got it right, Shruti was born in India, not U.S.A.',
'<img src="http://www.in.undp.org/content/dam/india/img/dark_bluepngindia.png">',

'Has Shruti been in US for more than 2 years?',
'No, sorry! She has been here only for last nine months.',
'Yay! You got it right, Shruti just came here few months ago.',
'<img src="http://static.comicvine.com/uploads/scale_large/11123/111239481/4819266-goodbye.jpg">',

'Does Shruti like the Seattle\'s Raining Weather?',
'No,sorry Shruti doesn\'t like the raining throughout the year',
'Yay! You got it right,Shruti doesn\'t like the weather.',
'<img src="http://media.komonews.com/images/101011_rainy_seattle_rain.jpg">'
];


// //////////////////////////////////////////////////////////

//0'What is your Name?',

// //1'Its Nice to meet you..Great Name by the way!',
// document.getElementById("p1").innerHTML=questionArray[1];

// //2'Did Shruti grew up in USA?',

// //3'No, sorry Shruti was not born in U.S.A!',
// document.getElementById("p3").innerHTML=questionArray[3];

// //4'Yay! You got it right, Shruti was born in India, not U.S.A.',
// document.getElementById("p4").innerHTML=questionArray[4];

// //5'<img src="http://www.in.undp.org/content/dam/india/img/dark_bluepngindia.png">',
// document.getElementById("p5").innerHTML=questionArray[5];

// //6'Has Shruti been in US for more than 2 years?',

// //7'No, sorry! She has been here only for last nine months.',
// document.getElementById("p7").innerHTML=questionArray[7];

// //8'Yay! You got it right, Shruti just came here few months ago.',
// document.getElementById("p8").innerHTML=questionArray[8];

// //9'<img src="http://static.comicvine.com/uploads/scale_large/11123/111239481/4819266-goodbye.jpg">',
// document.getElementById("p9").innerHTML=questionArray[9];

// //10'Does Shruti like the Seattle\'s Raining Weather?',

// //11'No,sorry Shruti doesn\'t like the raining throughout the year',
// document.getElementById("p11").innerHTML=questionArray[11];	

// //12'Yay! You got it right,Shruti doesn\'t like the weather.',
// document.getElementById("p12").innerHTML=questionArray[12];

// //13'<img src="http://media.komonews.com/images/101011_rainy_seattle_rain.jpg">'
// document.getElementById("p13").innerHTML=questionArray[13];



// //////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

var userName = prompt('What is your Name?');

// //////////////////////////////////////////////////////////

	var funcForAns1 = function(){
	  var answer1 = prompt('Did Shruti grew up in USA?');
	  if (answer1 == 'Y' || answer1 == 'YES'|| answer1 == 'yes' || answer1 == 'y') {
		  //3'No, sorry Shruti was not born in U.S.A!',
		  document.getElementById("p3").innerHTML=questionArray[3];
	  } else if (answer1 == 'N'|| answer1 == 'NO'|| answer1 =='no'|| answer1 =='n') {
		  //4'Yay! You got it right, Shruti was born in India, not U.S.A.',
		  document.getElementById("p4").innerHTML = questionArray[4];
		  //5'<img src="http://www.in.undp.org/content/dam/india/img/dark_bluepngindia.png">',
		  document.getElementById("p5").innerHTML = questionArray[5];
	  }
}
funcForAns1();

// //////////////////////////////////////////////////////////

var funcForAns2 =function(){

	var answer2 = prompt('Has Shruti been in US for more than 2 years?');
	if (answer2 == 'Y' || answer2 == 'YES'|| answer2 =='yes'|| answer2 == 'y') {
		//7'No, sorry! She has been here only for last nine months.',
		document.getElementById("p7").innerHTML = questionArray[7];
	} else if (answer2 =='N'||answer2 == 'NO'|| answer2 =='no'|| answer2 =='n'){
		//8'Yay! You got it right, Shruti just came here few months ago.',
		document.getElementById("p8").innerHTML = questionArray[8];
		//9'<img src="http://static.comicvine.com/uploads/scale_large/11123/111239481/4819266-goodbye.jpg">',
		document.getElementById("p9").innerHTML = questionArray[9];
	}
}
funcForAns2();
// //////////////////////////////////////////////////////////
var funcForAns3 = function() {

	var answer3 = prompt('Does Shruti like the Seattle\'s Raining Weather?');
	if (answer3 =='Y' || answer3 =='YES'|| answer3 =='yes' || answer3 == 'y'){
		//11'No,sorry Shruti doesn\'t like the raining throughout the year',
		document.getElementById("p11").innerHTML = questionArray[11];	
    } else if (answer3 =='N' || answer3 == 'NO'|| answer3 =='no' || answer3 =='n'){
		//12'Yay! You got it right,Shruti doesn\'t like the weather.',
		document.getElementById("p12").innerHTML = questionArray[12];
		//13'<img src="http://media.komonews.com/images/101011_rainy_seattle_rain.jpg">'
		document.getElementById("p13").innerHTML = questionArray[13];
    }
}
funcForAns3();

	// console.log('You got '+ count+' out of 3 correct answers, '+ userName+' ,Thanks for playing!');
