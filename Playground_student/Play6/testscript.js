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