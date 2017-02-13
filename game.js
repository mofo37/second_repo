'use strict';

var userName = prompt('What is your name?');

console.log(userName);

alert('Hi, ' + userName + ', guess some stuff about me!');

function askQuestionOne() {

  var firstAnswer = prompt('Have I ever lived on wheels?', 'Yes or No');

  var firstAnswerLowerCase = firstAnswer.toLowerCase();

  if (firstAnswerLowerCase === 'yes' || firstAnswerLowerCase === 'y') {
    alert('You are correct! I lived in a 1987 Volkswagen camper van with my boyfriend from June 2015 until January 2017. We travelled around the perimeter of the United States. It was an incredible experience, but I am happy to be settling down in Portland for awhile.');
    console.log('Yes');
  } else if (firstAnswerLowerCase === 'no' || firstAnswerLowerCase === 'n') {
    alert('Wrong! I lived in a 1987 Volkswagen camper van with my boyfriend from June 2015 until January 2017. We travelled around the perimeter of the United States. It was an incredible experience, but I am happy to be settling down in Portland for awhile');
    console.log('No');
  } else {
    alert('Let us try another.');
    console.log('Something weird.');
  }
}

askQuestionOne();

function askQuestionTwo() {
  var secondAnswer = prompt('Do I love potatoes?', 'Yes or No');

  var secondAnswerLowerCase = secondAnswer.toLowerCase();

  if (secondAnswerLowerCase === 'yes' || secondAnswerLowerCase === 'y') {
    alert('My ancestors migrated to the United States during the great potato famine around 1850. It was a rough time for them... but potatoes are DELICIOUS, so you are right. I do love them.');
    console.log('Yes');
  } else if (secondAnswerLowerCase === 'no' || secondAnswerLowerCase === 'n') {
    alert('My ancestors migrated to the United States during the great potato famine around 1850. It was a rough time for them... but potatoes are DELICIOUS, so you are wrong. I love them. ');
    console.log('No');
  } else {
    alert('On to the next one!');
    console.log('Something else weird.');
  }
}
askQuestionTwo();

function askQuestionThree() {
  var thirdAnswer = prompt('Do I often pet cats?', 'Yes or No');

  var thirdAnswerLowerCase = thirdAnswer.toLowerCase();

  if (thirdAnswerLowerCase === 'yes' || thirdAnswerLowerCase === 'y') {
    alert('Yes, ' + userName + ', I often meander around Portland, looking for cats to pet');
    console.log('Yes');
  } else if (thirdAnswerLowerCase === 'no' || thirdAnswerLowerCase === 'n') {
    alert(userName + ', you really do not understand me.');
    console.log('No');
  } else {
    alert('Come on, everyone loves cats.');
    console.log('Something even weirder.');
  }
}
askQuestionThree();

function askQuestionFour() {
  var fourthAnswer = prompt('Do I have any siblings?', 'Yes or No');

  var fourthAnswerLowerCase = fourthAnswer.toLowerCase();

  if (fourthAnswerLowerCase === 'yes' || fourthAnswerLowerCase === 'y') {
    alert('Well, ' + userName + ', I am the youngest of 5 kids, so you are right!');
    console.log('Yes');
  } else if (fourthAnswerLowerCase === 'no' || fourthAnswerLowerCase === 'n') {
    alert('You are incorrect. I am the youngest of 5 kids.');
    console.log('No');
  } else {
    alert('Yes or No next time, bud.');
    console.log('Something unexpected.');
  }
}
askQuestionFour();

function askQuestionFive() {
  var fifthAnswer = prompt('Is computer programming my second career?', 'Yes or No');

  var fifthAnswerLowerCase = fifthAnswer.toLowerCase();

  if (fifthAnswerLowerCase === 'yes' || fifthAnswerLowerCase === 'y') {
    alert('You are right! My first career was as a dancer. After college I danced professionally in modern dance companies in New York City, then was a professor of dance at Northern Illinois University. I see a lot of similarities between dance and programming, actually!');
    console.log('Yes');
  } else if (fifthAnswerLowerCase === 'no' || fifthAnswerLowerCase === 'n') {
    alert('Incorrect. My first career was as a dancer. After college I danced professionally in modern dance companies in New York City, then was a professor of dance at Northern Illinois University. I see a lot of similarities between dance and programming, actually!');
    console.log('No');
  } else {
    alert('Nice try!');
    console.log('Another weird answer');
  }
}
askQuestionFive();

var numberAnswer = 37;
var counter = 0;

function askQuestionSix() {
  while (counter < 4 && numberGuess !== numberAnswer) {
    var numberGuess = prompt('Guess a number 1 to 100'); 
    counter++;
    if (numberGuess > numberAnswer) {
      alert('Too high!');
      console.log('Too high');
    } else if (numberGuess < numberAnswer) {
      alert('Too low.');
      console.log('Too low.');
    } else {
      alert('You are correct! Wow!');
      numberGuess = numberAnswer;
    }
  };
}
askQuestionSix();


var count = 0;
var answers = ['Kansas', 'Chicago', 'New York City', 'Los Angeles'];
var guessedCorrectly = false;

function askQuestionSeven() {
  while(guessedCorrectly === false && count < 6) {
    var guess = prompt('Guess where I have lived, besides Portland!');

    for (var i = 0; i < answers.length; i++) {
      var answer = answers[i];
      
      if (guess.toLowerCase() === answer.toLowerCase()) {
        guessedCorrectly = true;
      } 
    }

    if (guessedCorrectly === true) {
      alert('You are right!');
      console.log('Correct: ' + guess);
    } else {
      alert('You are wrong. Sorry.');
      console.log('Incorrect: ' + guess);
    }

    count++;
    console.log(count);
  };
}
askQuestionSeven();