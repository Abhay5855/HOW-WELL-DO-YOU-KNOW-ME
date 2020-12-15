var readlineSync = require('readline-sync');
var userName = readlineSync.question("Do you know Me?")

console.log("Welcome " + userName + " lets play a game!")

score = 0;
function Play(question,answer){
  var userAnswer = readlineSync.question(question);
  if (userAnswer===answer){
    console.log("You are right")
    score = score+1;
    console.log("Your score is ",score)
    console.log("----------------")
  }
}