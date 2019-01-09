/*jslint white: true, browser: true, devel: true, windows: true, forin: true, vars: true, nomen: true, plusplus: true, bitwise: true, regexp: true, sloppy: true, indent: 4, maxerr: 50 */

'use strict';

//var number = 6;
//document.write(number);
//window.alert(number);
//console.log(number);

function square(arg1) {
    return arg1 * arg1;
}

console.log(square(6));

function sum (arg1, arg2, arg3) {
    return arg1 + arg2 + arg3;
}

console.log(sum(1, 2, 10));

var person = {
    name: "Mario",
    age: 25,
    occupation: "Plumber"
};

console.log(person);

function editPerson(name, age, occupation) {
    person.name = name;
    person.age = age;
    person.occupation = occupation;
}

editPerson("Luigi", 22, "Apprentice");
console.log(person);

function increaseAge() {
	person.age = person.age+1;
	console.log(person.name + " age is: " + person.age);
}

function createPerson() {	
	person = {
	    name: document.getElementById("name").value,
	    age: parseInt(document.getElementById("age").value),
	    occupation: document.getElementById("occ").value
    };

    console.log(person);
    checkAge(person.age);
}

var sentence = "He said \"My name is Elliot\"";

console.log(sentence);

var words = "Numbers = " + 4 + ", " + 5;

console.log(words);

var strArray = ["Hi", "Hello", "Hey"];
console.log(strArray);

strArray.push("Bye");
console.log(strArray);
strArray.pop();
console.log(strArray);

function checkAge(passedAge) {
    if ((passedAge >= 20) && (passedAge <= 40)) {
	    console.log("True");
    } else {
	    console.log("False");
	}

}

function iteration() {
	for (let i = 1; i <= 10; i++) {
		if(i%2 == 0) {
			console.log(i);
		}
	}
}

function iteration3(arg1 = parseInt(document.getElementById("number").value), str1 = document.getElementById("word1").value, str2 = document.getElementById("word2").value) {
	for(let i = 1; i<=arg1; i++) {
		if(i%3 === 0 && i%5 === 0) {
			console.log(str1 + str2);
		} else if(i%5 === 0) {
			console.log(str2);
		} else if (i%3 === 0) {
			console.log(str1);
		}
		else {
			console.log(i);
		}
	}
}

function iteration4() {
	console.log("Test");
}
