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

