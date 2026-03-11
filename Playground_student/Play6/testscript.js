'use strict'
import {seedGenerator, uniqueId, randomNumber, deepCopy} from '../../SeidoHelpers/seido-helpers.js';

const seeder = new seedGenerator();


let _address = {};

_address.street = 'Main St';
_address.city = 'Stockholm';
_address.zipcode = seeder.zipCode;        // seedGenerator
_address.country = seeder.country;        // seedGenerator


let _friend = {};
_friend.address = {};

_friend.address.street = seeder.street();
_friend.address.zipcode = seeder.zipCode;
_friend.address.city = seeder.city();
_friend.address.country = seeder.country;

console.log(_address);
console.log(_friend);



let _names = {};
_names.firstName = seeder.firstName;
_names.lastName = seeder.lastName;


console.log(_names);
console.log(`${_names.firstName} ${_names.lastName}`)

let friend = [];
for (let index = 0; index < 50; index++) {
    friend.push({name: seeder.firstName,age: randomNumber(0,99), address: {
        street: seeder.street(),
        zipcode: seeder.zipCode,
        city: seeder.city(),
        country: seeder.country
    }});
}
friend.forEach(friendElement => {
    console.log(`${friendElement.name} is ${friendElement.age} years old, and address on ${friendElement.address.street}, ${friendElement.address.city}, ${friendElement.address.country}`);
});


function replaceName(text, name) {
    return text.replace(/<firstName\/>/g, name);
}

console.log(replaceName(`<firstName/> ipsum dolor sit amet, consectetur adipisicing elit, sed do <firstName/> tempor incididunt ut labore et dolore magna aliqua. 
   Ut enim ad minim <firstName/>, quis nostrud exercitation ullamco <firstName/> nisi ut aliquip ex ea commodo consequat.`, 'tomas'));

// Use a regular expression to replace patterns
const originalString = 'Now is the timesoso, this is the tame';

// below RegEx matches word that starts with 't' followed by any word character (exactly 2 times) and ends with 'e;
const regexReplace = /\bt\w{2}e\b/g;

const newString = originalString.replaceAll(regexReplace, 'King');
console.log(`The regex ${regexReplace} changes "${originalString}" to "${newString}"`);


function exercise1(obj, str, num, bool) {
  // First parameter must be a non-empty object
  if (!(typeof obj === 'object' && obj !== null && Object.keys(obj).length > 0)) {
    return false;
  }
  
  // Second parameter must be a non-empty string
  if (!(typeof str === 'string' && str.length > 0)) {
    return false;
  }
  
  // Third parameter must be a valid number
  if (!(typeof num === 'number' && !Number.isNaN(num))) {
    return false;
  }
  
  // Fourth parameter must be a boolean
  if ((typeof bool !== 'boolean')) {
    return false;
  }
  
  return true;
}

// Test the function
console.log(exercise1({}, "test", 42, true)); // false (empty object)
console.log(exercise1({name: "John"}, "", 42, true)); // false (empty string)
console.log(exercise1({name: "John"}, "test", NaN, true)); // false (NaN)
console.log(exercise1({name: "John"}, "test", 42, "true")); // false (string instead of boolean)
console.log(exercise1({name: "John"}, "test", 42, true)); // true

/* Exercises

1. write a function that takes 4 parameters, 
  first parameter must be a non-empty object,
  second parameter must be a non-empty string,
  third parameter must be a valid number,
  fourth parameter must be a boolean. 
  
  The function should test for the correct types of each parameter and return true if all parameters are correct, otherwise false.
  Use the negation pattern to test for wrong parameters and return false, then return true at the end of the function if all parameters are correct.

2. Modify first parameter so it must be a non-empty object containing a specific property, for example 'name'.
*/


const fNames = 'John, Mary, Hans, Thomas, José, Susanne'.split(', ');
console.log(fNames);
const lNames = 'Smith, Schultz, Perez, Johnsson'.split(', ');
console.log(lNames);

//console.log(`${fNames[0]} ${lNames[1].trim()}`);


function generateRandomName() {
    const randomFirstName = fNames[Math.floor(Math.random() * fNames.length)];
    const randomLastName = lNames[Math.floor(Math.random() * lNames.length)];
    return `${randomFirstName} ${randomLastName}`;
}


for (let i = 0; i < 20; i++) {
    console.log(generateRandomName());
}   