//var number = 6;
//document.write(number);
//window.alert(number);
//console.log(number);

function square(arg1)
{
	return arg1*arg1;
}

console.log(square(6));

function sum ( arg1, arg2, arg3)
{
	return arg1+arg2+arg3;
}

console.log(sum(1,2,10));

var person = {
	name : "Mario",
	age : 25,
	occupation : "Plumber"
}

console.log(person);

function editPerson(name, age, occupation)
{
	person.name = name;
	person.age = age;
	person.occupation = occupation;
}

editPerson("Luigi", 22, "Apprentice");
console.log(person);

function increaseAge()
{
	person.age = person.age+1;
	console.log(person.name + " age is: " + person.age);
}

function createPerson()
{
	
	var newPerson = {
		name : document.getElementById("name").value,
		age : document.getElementById("age").value,
		occupation : document.getElementById("occ").value
	}

	console.log(newPerson);
}

var sentence = "He said \"My name is Elliot\"";

console.log(sentence);

var words = "Numbers = " + 4 + ", " + 5;

console.log(words);

