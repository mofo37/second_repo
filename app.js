'use strict';

var userName = prompt('What is your name?');

console.log(userName);

alert('Hi, ' + userName + ', guess some stuff about me!');

var firstAnswer = prompt('Do I like books?', 'Yes or No');

var firstAnswerLowerCase = firstAnswer.toLowerCase();

if (firstAnswerLowerCase === 'yes' || firstAnswerLowerCase === 'y') {
  alert('Heck yeah, I do!');
  console.log('Yes');
} else if (firstAnswerLowerCase === 'no' || firstAnswerLowerCase === 'n') {
  alert('What kind of a monster do you think I am?');
  console.log('No');
} else {
  alert('acting coy, eh?');
  console.log('Something weird.');
}

var secondAnswer = prompt('Do I love potatoes?', 'Yes or No');

var secondAnswerLowerCase = secondAnswer.toLowerCase();

if (secondAnswerLowerCase === 'yes' || secondAnswerLowerCase === 'y') {
  alert('My ancestors migrated to the United States during the great potato famine, so I feel sad for them... but potatoes are DELICIOUS, so you are right.');
  console.log('Yes');
} else if (secondAnswerLowerCase === 'no' || secondAnswerLowerCase === 'n') {
  alert('Who do you think I am?! Of course I like them!');
  console.log('No');
} else {
  alert('Let us try a different question');
  console.log('Something else weird.');
}

var thirdAnswer = prompt('Do I often pet cats?', 'Yes or No');

var thirdAnswerLowerCase = thirdAnswer.toLowerCase();

if (thirdAnswerLowerCase === 'yes' || thirdAnswerLowerCase === 'y') {
  alert('I often meander around Portland, looking for cats to pet');
  console.log('Yes');
} else if (thirdAnswerLowerCase === 'no' || thirdAnswerLowerCase === 'n') {
  alert(userName + ', you really do not understand me.');
  console.log('No');
} else {
  alert('You are being weird.');
  console.log('Something even weirder.');
}

var fourthAnswer = prompt('Are cats better than dogs?', 'Yes or No');

var fourthAnswerLowerCase = fourthAnswer.toLowerCase();

if (fourthAnswerLowerCase === 'yes' || fourthAnswerLowerCase === 'y') {
  alert('Well, ' + userName + ', I am actually partial to both.');
  console.log('Yes');
} else if (fourthAnswerLowerCase === 'no' || fourthAnswerLowerCase === 'n') {
  alert('You are right. They are both fluffy, beautiful creatures with different things to offer.');
  console.log('No');
} else {
  alert('Yes or No next time, bud.');
  console.log('Oh, geez.');
}

var fifthAnswer = prompt('Do you know who I am yet?', 'Yes or No');

var fifthAnswerLowerCase = fifthAnswer.toLowerCase();

if (fifthAnswerLowerCase === 'yes' || fifthAnswerLowerCase === 'y') {
  alert('Yay!');
  console.log('Yes');
} else if (fifthAnswerLowerCase === 'no' || fifthAnswerLowerCase === 'n') {
  alert('Think harder.');
  console.log('No');
} else {
  alert('I wonder what we could have had.');
  console.log('Another weird answer');
}