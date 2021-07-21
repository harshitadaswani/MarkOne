// ex13: list some questions
var questions = [ questionOne = {
  question: "What is my favorite fruit?",
  answer: "apple"
},

questionTwo = {
  question: "Which is my favorite sad song?",
  answer: "Mann Bharya"
},

questionThree = {
  question: "What is my favorite vegetable?",
  answer: "ladyfinger"
},

questionFour = {
  question: "Which is my favorite english series?",
  answer: "Grey's Anatomy"
},

questionFive = {
  question: "Which is my favorite hindi movie?",
  answer: "Neerja"
},

questionSix = {
  question: "What is my favorite hobby?",
  answer: "puzzles"
},

questionSeven = {
  question: "Who is my favorite actress?",
  answer: "Kareena Kapoor Khan"
},

questionEight = {
  question: "Do I like Sunrise or Sunset?",
  answer: "Sunset"
}
];

var rs = require("readline-sync");
var count=0;

// ex14: use function to make a quiz
function welcome()
{
	var userName = rs.question("Enter your name:");
	console.log("Welcome " + userName + " to the quiz of Harshita"); 
}

function play(q , a)
{
	var ans=rs.question(q);
	if(ans.toUpperCase() === a.toUpperCase())
	{
		console.log("YAY! Correct Answer");
		count = count + 1; 
	}
	else
	{
		console.log("NAY! Wrong Answer");
	}
}

function game()
{
	for(i = 0; i < questions.length; i++)
	{
		var currQ = questions[i];
		play(currQ.question , currQ.answer);
	}
}

// ex15: print the final score
function score()
{
	console.log("Your score is : " + count);
}

welcome();
game();
score();