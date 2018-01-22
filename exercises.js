 /* 1) Ticket Generator
Write a for-loop that will iterate through 20 numbers (starting at 1 and ending at 20) and console.log the following message:
"Now serving 1."
"Now serving 2."
"Now serving 3."
.
.
.
"Now serving 20."
*/

console.log('');
console.log('	1. Ticket Generator: ');

for (var i = 1; i <= 20; i++){
	console.log('Now serving ' + i);
}

/* 2) Pop Charts
Write a for-loop that will iterate through the topFive array below and console.log the following message:
This week's chart buster is: 'Closer.'
This week's chart buster is: 'Starboy.'
This week's chart buster is: 'I Feel It Coming.'
This week's chart buster is: 'Let Me Love You.'
This week's chart buster is: '24K Magic.'
*/

var topFive = ["Closer", "Starboy", "I Feel It Coming", "Let Me Love You", "24K Magic"];

console.log('');
console.log('	2. Pop Charts: ');

for (var i = 0; i < topFive.length; i++){
	console.log("This week's chart buster is: " + topFive[i] + '.');
}

/* 3) Dead Presidents
Declare a variable named `presidents` and assign it to an array containing the following Presidents: Washington, Adams, Jefferson, Madison and Monroe.
 
Write a for-loop that will iterate through this array and within the for-loop console.log the following:
The value at 0 is Washington.
The value at 1 is Adams.
The value at 2 is "Jefferson.
The value at 3 is "Madison.
The value at 4 is Monroe.

Next, console.log the length of the array.

3-A) Create a function named leaders which will take in a parameter: `person`.
   @param Datatype: String `person`
 
This function will iterate through the person parameter and console.log the following message for each item in the array:

"President person was a great leader."
*/

console.log('');
console.log('	3. Dead Presidents: ');

var presidents = ['Washington', 'Adams', 'Jefferson', 'Madison', 'Monroe'];

for (var i = 0; i < presidents.length; i++){
	console.log('The value at ' + i + ' is ' + presidents[i] + '.');
}
console.log('The length of the array = ' + presidents.length);

console.log('');
console.log('	3-A. leaders: ');

function leaders(person){
	for (var i = 0; i < presidents.length; i++){
		console.log('President ' + presidents[i] + ' was a great leader.');
	}
}
leaders(presidents);

/* 4) Line Number
Declare a variable named `stringOfNumbers` and assign its value to an empty string. 

Write a for-loop that concatenates a Number value into that string on each iteration, starting at `10` and continuing up to and including `20`. Console.log your result. It should read "1011121314151617181920"*/

console.log('');
console.log('	4. Line Number: ');

var stringOfNumbers = '';

for (var i = 10; i <= 20; i++){
	stringOfNumbers += i;
}
	console.log(stringOfNumbers);

/* 5) Even Stevens
Declare a variable named `evenNumArr` and assign its value to an empty array. 

Write a for-loop that will push even numbers to the `evenNumArr` array. We want to push 50 even even numbers starting from 0.
Console.log your results.
*/

console.log('');
console.log('	5. Even Stevens: ');

var evenNumArr = [];

for (var i = 0; i <= 50; i++){
	if (i % 2 === 0){
		evenNumArr += i + ', ';
	}
}
		console.log(evenNumArr);

/* 6) Up the Odds
Declare a variable named `oddSum` and assign it to the Number value 0.

Write a for-loop that will sum up odd numbers to the `oddSum` variable. We want to add 50 odd numbers starting from 1.
Console.log your results.
*/

console.log('');
console.log('	6. Up the Odds: ');

var oddSum = 0;

for (var i = 1; i <= 50; i++){
	if (i % 2 === 1){
		oddSum += i;
	}
}
console.log('oddSum = ' + oddSum);

/* 7) Oops There It is
Declare a variable named `oopsArray` and assign its to the following array: `[ 'turn' , , 'down' , , 'for' , , 'what' ]`.
Note that every odd index value in `oopsArray` is currently `undefined`. Using a for-loop, add the string `'nope'` to every odd index. Console.log your result. It should look like this:

[ 'turn' , 'nope' , 'down' , 'nope' , 'for' , 'nope' , 'what' ]
*/

console.log('');
console.log('	7. Oops There It is: ');

var oopsArray = [ 'turn' , , 'down' , , 'for' , , 'what' ];

for (var i = 0; i < oopsArray.length; i++){
	if (i % 2 === 1){
		oopsArray.splice(i, 1, 'nope');
	}
}
		console.log(oopsArray);

/* 8) Is It There Oops
Using a for-loop, iterate through the Array stored at `oopsArray` backwards. Console.log your result. It should look like this:

what
nope
for
nope
down
nope
turn
*/

console.log('');
console.log('	8. Is It There Oops: ');

for (var i = oopsArray.length - 1; i >= 0; i--){
	console.log(oopsArray[i]);
}

/* 9) Siesta Time
Declare a variable named `napSchedule` and assign its value to the following array: `[false, false, true, false, true, true]`

Next, write a function named `nap`. This function takes in a single parameter: `schedule`

   @param Datatype: Array `schedule`

Inside of this function write a for-loop that will iterate through the `napSchedule` array and console.log the message: `ZzZzZzZz` if the schedule is `true`, otherwise the it will console.log the message: `Gotta get coding!` if the schedule is `false`.
*/

console.log('');
console.log('	9. Siesta Time: ');

var napSchedule = [false, false, true, false, true, true];

function nap(schedule){
	for (var i = 0; i < napSchedule.length; i++){
		if (napSchedule[i] === true){
			console.log('ZzZzZzZz');
		}else{
			console.log('Gotta get coding!');
		}
	}
}
nap(napSchedule);

/* 10) Copy Pasta
Declare a variable named `valuesArray` and assign its value to be an array: `[99, 66, 829, 1941, 8, 76]`. 
Declare another variable named `copyValuesArray` and assing its value to an empty array.

Write a function named `copyArray` which takes two arguments: `originArray` and `destinationArray`. 

   @param Datatype: Array `originArray`
   @param Datatype: Array `destinationArray`

Inside of this function write a for-loop that will iterate through the contents of the `originArray` and pushes each element of that array into `destinationArray`. Console.log your result.
*/

console.log('');
console.log('	10. Copy Pasta: ');

var valuesArray = [99, 66, 829, 1941, 8, 76];
var copyValuesArray = [];

function copyArray(originArray, destinationArray){
	for (var i = 0; i < originArray.length; i++){
		destinationArray.push(originArray[i]);
	}
}
copyArray(valuesArray, copyValuesArray);
console.log(copyValuesArray);

/*Final Boss*/

/* 11) Go Long
Declare a variable named `topQuote` and assign it to a String value of your favorite one line quote.
Write a function that will iterate through the string value and return the longest word in that quote. Console.log your result.
*/

console.log('');
console.log('	11. Go Long: ');

var topQuote = 'Do or do not, there is no try';

function yodaQuote(quote){
	var word = topQuote.split(' ');
	// console.log(word);
	var longestWord = '';
	for (var i = 0; i < word.length; i++){
		if (word[i].length > longestWord.length){
			longestWord = word[i];
		}
	}
			// console.log('The longestWord = ' + longestWord);
			return longestWord;
}
console.log('The longestWord = ' + yodaQuote(topQuote));

/* 12) Puppet Master
Declare a variable named `miscStorage` set it's value to be: `[ [], 'Carrots', 9, 'Beets', {}, {name: "Todd B."}, 'Mush' ]`
Write a function named `generateArrayOfStrings` which takes a single argument `storage`. This function will return a new Array with only `String` values inside of it.

   @param Datatype: Array `storage`
   @return Datatype: Array

*/

console.log('');
console.log('	12. Puppet Master: ');

var miscStorage = [ [], 'Carrots', 9, 'Beets', {}, {name: "Todd B."}, 'Mush' ];

function generateArrayOfStrings(storage){
	var str = [];
	for (var i = 0; i < storage.length; i++){
		if (typeof storage[i] === typeof ''){
			str.push(storage[i]);
		}
	}
			console.log(str);
			return str;
}
generateArrayOfStrings(miscStorage);

/* 13) All Grown Up 
Write a function that will capitalize the first letter in each word in the phrase below. The function will console.log the message: "I've Lived A Life That's Full. I've Traveled Each And Every Highway. But More, Much More Than This. I Did It My Way."  
*/

var myWay = "i've lived a life that's full, i've traveled each and every highway. but more, much more than this. i did it my way.";

console.log('');
console.log('	13. All Grown Up: ');

function firstLetter(phrase){
	// console.log(phrase.charAt(0).toUpperCase() + phrase.slice(1));
	var word = phrase.split(' ');
	// console.log(word);
	var rephrase = [];
	for (var i = 0; i < word.length; i++){
		rephrase.push(word[i].charAt(0).toUpperCase() + word[i].slice(1));
	}
	// console.log(rephrase);
	return rephrase.join(' ');
}
console.log(firstLetter(myWay));

// function firstLetter(phrase){
// 	// console.log(phrase.charAt(0).toUpperCase() + phrase.slice(1));
// 	var word = phrase.split(' ');
// 	 // console.log(word);
// 	for (var i = 0; i < word.length; i++){
// 	 var letter = word[i].split('');
// 	 // console.log(letter);
// 	 letter[0] = letter[0].toUpperCase();
// 	 // console.log(letter);
// 	 word[i] = letter.join('');
// 	 // console.log(word[i]);
// 	}
// 	// console.log(word.join(' '));
// 	return word.join(' ');
// }
// console.log(firstLetter(myWay));


/* 14) Sightseeing
Write a function that will loop through the multi-dimensional array and console.log the city and landmark on separate lines.
Note, please use two for loops to complete this problem

  @param Datatype: Array
  */

console.log('');
console.log('	14. Sightseeing: ');

var guide = [["Honolulu", "Waikiki"], ["Tokyo", "Tsukiji Fish Market"], ["Cairo", "Pyramids"],["Rome", "Colosseum"]];

var cities = [];
var landmarks = [];

function location(place){
	for (var i = 0; i < place.length; i++){
		// console.log(place[i][0]);
		cities.push(place[i][0]);
	}
	for (var j = 0; j < place.length; j++){
		// console.log(place[i][1]);
		landmarks.push(place[j][1]);
	}
}
location(guide);
console.log(cities);
console.log(landmarks);

// function location(place){
// 	for (var i = 0; i < place.length; i++){
// 		// place[i][0] += [i];
// 		// console.log(place[i][0]);
// 		cities.push(place[i][0]);
// 		// console.log(place[i][1]);
// 		landmarks.push(place[i][1]);
// 	}
// }
// location(guide);
// console.log(cities);
// console.log(landmarks);

// function location(place){
// 		var spot = place.toString(' ');
// 		// console.log(spot);
// 		var spotToArr = spot.split(',');
// 		// console.log(spotToArr);
// 	for (var i = 0; i < spotToArr.length; i++){
// 		if (i % 2 === 0){
// 			// console.log(spotToArr[i]);
// 			cities.push(spotToArr[i]);
// 		}else{
// 			landmarks.push(spotToArr[i]);
// 		}
// 	}
// }
// location(guide);
// console.log('cities = ' + cities);
// console.log('landmarks = ' + landmarks);

/* 15) Back to School
Declare a variable named `currentCohort` and set it's value to be this [array found here](https://gist.github.com/sgnl/e40879b2249e06ca7811).
Write a function named `graduateAndSetNewClass`, which takes a single argument called `cohort`.

   @param Datatype: Array `cohort`

The function will iterate through the `cohort` argument and check each student's `enrolled` property.
If the `enrolled` property is set to `true` then change that student's `graduated` property to `true`. Otherwise, if `enrolled` is set to `false` then change `enrolled` to `true` leaving `graduated` alone and unchanged.
Console.log your result.
*/

console.log('');
console.log('	15. Back to School: ');

var currentCohort = [
  {
    name: 'Doug',
    graduated: false,
    enrolled: true
  },
  {
    name: 'Pat',
    graduated: false,
    enrolled: false
  },
  {
    name: 'Marsha',
    graduated: false,
    enrolled: false
  },
  {
    name: 'Moira',
    graduated: false,
    enrolled: true
  },
  {
    name: 'Ben',
    graduated: false,
    enrolled: true
  },
  {
    name: 'Nigel the Giraffe',
    graduated: false,
    enrolled: false
  },
  {
    name: 'Brandon the Shark',
    graduated: false,
    enrolled: true
  }
];

function graduateAndSetNewClass(cohort){
	for(var i in cohort){
		if (cohort[i].enrolled === true){
			cohort[i].graduated = true;
		}else{
			cohort[i].enrolled = true;
		}
	}
}
graduateAndSetNewClass(currentCohort);
console.log(currentCohort);
