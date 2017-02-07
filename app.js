'use strict';

alert('Guess some stuff about me!');

var firstAnswer = prompt('Do I like books?', 'Yes or No');

var firstAnswerLowerCase = firstAnswer.toLowerCase();

if (firstAnswerLowerCase === 'yes' || firstAnswerLowerCase === 'y') {
    console.log('Yes');
} else if (firstAnswerLowerCase === 'no' || firstAnswerLowerCase === 'n') {
    console.log('No');
} else {
    console.log('Something weird.');
}

alert('Hey! You are right!');

var secondAnswer = prompt('Do I love potatoes?', 'Yes or No');

var secondAnswerLowerCase = secondAnswer.toLowerCase();

if (secondAnswerLowerCase === 'yes' || secondAnswerLowerCase === 'y') {
    console.log('Yes')
} else if (secondAnswerLowerCase === 'no' || secondAnswerLowerCase === 'n') {
    console.log('No')
} else {
    console.log('Something else weird.');
}

alert('You got it again!');

var thirdAnswer = prompt('Do I often pet cats?');

var thirdAnswerLowerCase = thirdAnswer.toLowerCase();

if (thirdAnswerLowerCase === 'yes' || thirdAnswerLowerCase === 'y') {
    console.log('Yes');
} else if (thirdAnswerLowerCase === 'no' || thirdAnswerLowerCase === 'n') {
    console.log('No');
} else {
    console.log('Something even weirder.');
}

alert('You are really good at this.');

var fourthAnswer = prompt('Are cats better than dogs?');

var fourthAnswerLowerCase = fourthAnswer.toLowerCase();

if (fourthAnswerLowerCase === 'yes' || fourthAnswerLowerCase === 'y') {
    console.log('Yes');
} else if (fourthAnswerLowerCase === 'no' || fourthAnswerLowerCase === 'n') {
    console.log('No');
} else {
    console.log('Oh, geez.');
}

alert('Yeah doi. Everyone knows that.');

var fifthAnswer = prompt('Do you know who I am yet?');

var fifthAnswerLowerCase = fifthAnswer.toLowerCase();

if (fifthAnswerLowerCase === 'yes' || fifthAnswerLowerCase === 'y') {
    console.log('Yes');
} else if (fifthAnswerLowerCase === 'no' || fifthAnswerLowerCase === 'n') {
    console.log('No');
} else {
    console.log('Another weird answer');
}