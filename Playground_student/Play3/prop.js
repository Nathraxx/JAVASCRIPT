'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../../SeidoHelpers/seido-helpers.js';

/* Exercise
1. Create an object _address and give it a property country with value "Sweden"
2. Create two objects _friend1, _friend2 using _address as prototype
3. Give _friend1 and _friend2 properties name and assing it to "Sam" resp "Frodo"
    - What country do Sam and Frodo live in?
    - Set _address.country to "Denmark". What country do Sam and Frodo live in?
    - Set _friend2.country to "Finland". What country do Sam and Frodo live in?

4. assign to _address.toString a function that presents the friend with name and country
5. assign to _address.isEqual = function (obj) a function that returns true if this and obj lives in the same country
6. modify to _address.isEqual = function (obj) so it returns true if this and obj lives in the same country and has same name
*/


const _address = {

    country: "Sweden"
}

const _friend1 = Object.create(_address);

const _friend2 = Object.create(_address);

_address.toString = function() 

{
 return this.name + " lives in" + this.country

};


_address.isEqual = function (obj) {
  return this.country === obj.country;
};


_friend1.name = "bob";
_friend2.name = "berry";

console.log(_friend1.name, "lives in", _friend1.country);
console.log(_friend2.name, "lives in", _friend2.country);

_address.country = "Denmark";  //byter till danmark för båda

console.log(_friend1.name, "lives in", _friend1.country);
console.log(_friend2.name, "lives in", _friend2.country);


_friend2.country = "Finland";  //ger friend2 finland , friend 1 behåller danmark.

console.log(_friend1.name, "lives in", _friend1.country);
console.log(_friend2.name, "lives in", _friend2.country);

console.log(_friend1.toString());
console.log(_friend2.toString());

console.log(_friend1.isEqual(_friend2));



const arr3d = [
[[1,2],[3,4],[5,6]]

,
[[7,8],[9,10],[11,12]]

,
[[13,14],[15,16],[17,18]]


]

console.log(arr3d[0][2][1]); // 2  → layer 0, row 0, column 1
console.log(arr3d[1][2][0]); // 11 → layer 1, row 2, column 0
console.log(arr3d[2][1][1]); // 16 → layer 2, row 1, column 1


    
    console.log ('alternative 4');
for (let index = 0; index < arr3d.length; index++) {
    console.log (arr3d[index] +'');
}



const suits = ["Hearts","Diamonds","Spades","Clubs"];

const values = ["Ace", "1","2","3","4","5","6","7","8","9","10", "Jack","Queen","King"];

const deck = []

for (let suit of suits) {
    for (let value of values) {
       
        deck.push({suit: suit , numeral: value});
    }
}

const [firstCard, secondCard, ...restOfDeck] = deck;

console.log("First Card:", firstCard);
console.log("Second Card:", secondCard);
console.log("Rest of Deck", restOfDeck);



const firstTen = deck.slice(0,10);
const lastFive = deck.slice(-5);
const newDeck =[...firstTen, ...lastFive];
console.log("new deck (First10+last5:", newDeck);




