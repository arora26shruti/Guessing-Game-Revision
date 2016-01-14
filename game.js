

var userName = prompt('What is your Name?');
alert('Its Nice to meet you, '+userName+' ,Great Name by the way!');

var count=0;
//////////////////////////////////////////////////////////////////////////////////////////
var answer1 = prompt('Did Shruti grew up in USA?');

if(answer1=='Y' ||answer1=='YES'||answer1=='yes' || answer1== 'y'){
	alert('No, sorry '+ userName +', Shruti was not born in U.S.A!');
}
else if(answer1=='N'||answer1=='NO'||answer1=='no'||answer1=='n'){
	alert('Yay! You got it right, '+ userName +' , Shruti was born in India, not U.S.A.');
	count++;
}
//////////////////////////////////////////////////////////////////////////////////////////
var answer2 = prompt('Has Shruti been in US for more than 2 years');
if(answer2=='Y'||answer2 =='YES'||answer2 =='yes'||answer2=='y'){
	alert('No, sorry '+ userName + ' ,She has been here only for last nine months');
}
else if(answer2=='N'||answer2=='NO'||answer2=='no'||answer2=='n'){
	alert('Yay! You got it right, '+ userName +' , Shruti just came here few months ago.');
	count++;
}
//////////////////////////////////////////////////////////////////////////////////////////
var answer3 = prompt("Does Shruti like the Seattle\'s Raining Weather?");
if(answer3 =='Y'||answer3 =='YES'||answer3 =='yes'||answer3 =='y'){
	alert("No, sorry "+ userName +" Shruti doesn\'t like the raining throughout the year");
}
else if(answer3 =='N'||answer3 =='NO' ||answer3 =='no' ||answer3 =='n'){
	alert("Yay! You got it right, "+ userName +" , Shruti doesn\'t like the weather.");
	count++;
}
	alert('You got '+ count+' out of 3 correct answers, '+ userName+' ,Thanks for playing!');
//////////////////////////////////////////////////////////////////////////////////////////



